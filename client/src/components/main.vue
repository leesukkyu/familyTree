<template>
  <div>
    <v-navigation-drawer style="margin-top:58px;" app v-model="drawer">
      <v-layout row align-center>
        <v-flex>
          <v-subheader>{{pedigreeTitle}}</v-subheader>
        </v-flex>
      </v-layout>
      <v-list dense>
        <template v-for="item in items">
          <v-list-group
            v-if="item.children"
            v-model="item.model"
            :key="item.text"
            :prepend-icon="item.model ? item.icon : item['icon-alt']"
            append-icon
          >
            <v-list-tile slot="activator">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
            <v-list-tile v-for="(child, i) in item.children" :key="i" @click>
              <v-list-tile-action v-if="child.icon">
                <v-icon>{{ child.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ child.text }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list-group>
          <v-list-tile v-else @click="onClick_Menu(item)" :key="item.text">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ item.text }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar
      style="height:58px;"
      color="teal darken-2"
      dark
      app
      :clipped-left="$vuetify.breakpoint.mdAndUp"
      fixed
    >
      <v-toolbar-title class="pa-0 ma-0">
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-text-field class="mt-2" flat solo-inverted label="Search"></v-text-field>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>apps</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content class="pa-0">
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <div style="width:100%;">
            <v-btn color="pink" @click="onClick_upPageLoad">
              <v-icon>위로 불러오기</v-icon>
            </v-btn>

            <div v-for="(item, index) in personlist" :key="index">
              <div class="person-list-wrap">
                <div class="generation-list-box">{{startGeneration + index}} 세대</div>
                <div class="person-list-box">
                  <!-- 사람 아이템 -->
                  <div
                    v-for="(item, index) in item"
                    :key="index"
                    class="person-item-wrap text-xs-center"
                    style="position:relative"
                  >
                    <div class="vertical-line" v-if="item.id_parent && item.firstChild"></div>
                    <div class="horizon-line" v-else-if="item.id_parent"></div>

                    <v-avatar size="36px">
                      <img v-if="item.img_profile" src="/image/person.png" alt="프로필 사진">
                      <img v-else src="/image/person.png" alt="프로필 사진">
                    </v-avatar>
                    <div class="text-overflow">
                      <span class="body-2">{{item.name}}</span>
                      <span class="ml-1">{{item.name_chinese}}</span>
                    </div>
                    <div class="text-overflow">
                      <span class="ml-1">{{item.age}}세</span>
                      <span class="mx-1">-</span>
                      <span>{{item.is_male ? '남자' : '여자'}}</span>
                    </div>
                    <div>{{item.birth_date}}</div>
                    <v-menu offset-y transition="slide-x-transition" bottom right>
                      <template v-slot:activator="{ on }">
                        <v-btn
                          style="position:absolute;top:0px;right:0px;"
                          class="ma-0"
                          color="primary"
                          dark
                          v-on="on"
                          flat
                          icon
                        >
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                      </template>
                      <v-list>
                        <v-list-tile @click="onClick_addRelationPerson(item)">
                          <v-list-tile-title>가족추가</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="onClick_personDetailView(item)">
                          <v-list-tile-title>상세보기</v-list-tile-title>
                        </v-list-tile>
                        <v-list-tile @click="onClick_personDelete(item)">
                          <v-list-tile-title>삭제하기</v-list-tile-title>
                        </v-list-tile>
                      </v-list>
                    </v-menu>
                  </div>
                </div>
              </div>
            </div>

            <v-btn color="pink" @click="onClick_downPageLoad">
              <v-icon>아래로 불러오기</v-icon>
            </v-btn>
          </div>
        </v-layout>
      </v-container>
    </v-content>

    <v-btn
      class="mb-5 mr-2"
      fab
      bottom
      right
      small
      color="pink"
      dark
      fixed
      @click.stop="dialog = !dialog"
    >
      <v-icon>add</v-icon>
    </v-btn>

    <!-- 전체 플로팅 버튼 눌렀을 때 창-->
    <v-dialog v-model="dialog" width="800px">
      <v-card>xxx</v-card>
    </v-dialog>

    <!-- 사람 추가 팝업-->
    <v-dialog
      @scroll.stop="true"
      @click.stop="true"
      v-model="personDialog"
      persistent
      max-width="600px"
    >
      <v-card>
        <v-card-title>
          <span class="headline">가족 추가</span>
        </v-card-title>
        <v-card-text>
          <v-container class="pb-0" grid-list-md>
            <v-form ref="form">
              <v-layout wrap>
                <!-- 연관된 사람 -->
                <v-flex v-if="relationPersonItem" xs12>
                  <div role="listitem">
                    <a class="v-list__tile v-list__tile--link v-list__tile--avatar theme--light">
                      <div class="v-list__tile__avatar">
                        <div class="v-avatar" style="height: 40px; width: 40px;">
                          <img v-if="relationPersonItem.img_profile" src="/image/person.png">
                          <img v-else src="/image/person.png">
                        </div>
                      </div>
                      <div class="v-list__tile__content">
                        <div
                          class="v-list__tile__title"
                        >{{relationPersonItem.generation}}세대 {{relationPersonItem.name}} {{relationPersonItem.name_chinese}} {{relationPersonItem.age}}세 {{relationPersonItem.is_male ? '남자' : '여자'}}</div>
                        <div class="v-list__tile__sub-title">
                          <span
                            class="text--primary"
                          >{{relationPersonItem.birth_date}} / {{relationPersonItem.death_date}}</span>
                          {{relationPersonItem.job}}
                        </div>
                      </div>
                      <div
                        class="v-list__tile__content subheading font-weight-medium"
                        style="display: flex;padding: 0 10px;"
                      >의</div>
                      <div class="v-list__tile__content" style="max-width:200px;">
                        <v-select
                          class="ma-0"
                          v-model="relationType"
                          @change="onChange_relationTypeSelect()"
                          :items="[{
                            text : '배우자',
                            value : 0
                          },{
                            text : '자녀',
                            value : 1
                          },{
                            text : '형제',
                            value : 2
                          },{
                            text : '부모',
                            value : 3
                          }]"
                          :hide-details="true"
                          :persistent-hint="false"
                          :single-line="true"
                          label="관계"
                        ></v-select>
                      </div>
                    </a>
                  </div>
                </v-flex>

                <v-flex xs6>
                  <v-text-field
                    v-model="personItem.generation"
                    required
                    mask="###"
                    :rules="rules.require"
                    :disabled="Boolean(relationPersonItem)"
                    label="세대 입력 *"
                    suffix="세대"
                  ></v-text-field>
                </v-flex>
                <v-flex xs6>
                  <v-select
                    v-model="personItem.is_male"
                    :items="[{text:'남성',value : true},{text:'여성', value:false}]"
                    item-value="value"
                    label="성별"
                  ></v-select>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field
                    v-model="personItem.name"
                    required
                    :rules="rules.require"
                    label="이름 *"
                  ></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="personItem.name_chinese" label="이름 - 한문"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6 md6>
                  <v-text-field v-model="personItem.age" mask="###" label="나이"></v-text-field>
                </v-flex>
                <v-flex xs12 sm6>
                  <v-text-field v-model="personItem.job" label="직업"></v-text-field>
                </v-flex>
                <v-flex xs12>
                  <date-picker
                    :value="personItem.birth_date"
                    :obj="personItem"
                    :obj-key="'birth_date'"
                    label="태어난 일자"
                  ></date-picker>
                </v-flex>
                <v-flex xs12>
                  <date-picker
                    :value="personItem.death_date"
                    :obj="personItem"
                    :obj-key="'death_date'"
                    label="사망 일자"
                  ></date-picker>
                </v-flex>
              </v-layout>
            </v-form>
            <div class="text-xs-right">
              <small>*필수 입력 항목 입니다</small>
            </div>
          </v-container>
          <v-divider class="mt-4"></v-divider>
          <v-container class="pb-0" grid-list-md style="max-height:150px;overflow:auto;">
            <v-layout wrap v-for="(item, i) in personItem.tag_list" :key="i">
              <v-flex xs3>
                <v-text-field v-model="item.key" label="태그명"></v-text-field>
              </v-flex>
              <v-flex xs8>
                <v-text-field v-model="item.value" label="태그값"></v-text-field>
              </v-flex>
              <v-flex xs1 align-self-center>
                <v-btn flat icon color="red" class="ma-0 pa-0">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
          <v-container class="ma-0 pa-0">
            <v-layout>
              <v-flex xs12 class="text-xs-right">
                <v-btn
                  @click="onClick_addTagBtn"
                  flat
                  block
                  dark
                  color="green"
                  class="ma-0 pa-0 mr-3"
                >
                  <v-icon>add</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click="onClick_close">취소</v-btn>
          <v-btn color="blue darken-1" flat @click="onClick_save">저장</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.text-overflow {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.v-toolbar__content {
  height: 58px !important;
}
.person-list-wrap {
  height: 130px;
  border-bottom: dashed 1px rgba(0, 0, 0, 0.38);
}
.generation-list-box {
  width: 100px;
  text-align: center;
  height: 130px;
  float: left;
  line-height: 130px;
  border-right: solid 1px gray;
}
.person-list-box {
  height: 130px;
  float: left;
}
.person-item-wrap {
  border: solid 1px gray;
  width: 110px;
  height: 110px;
  border-radius: 3px;
  padding: 5px;
  margin-top: 10px;
  box-sizing: border-box;
  margin-left: 10px;
  float: left;
}
</style>

<script>
import rules from "./util/rules.js";
import datePicker from "./common/datePicker";

export default {
  components: {
    datePicker
  },
  data: () => ({
    rules,
    dialog: false,
    personDialog: false,
    drawer: null,
    pedigreeObject: null,
    generation: null,
    startGeneration: 1,
    pedigreeTitle: "",
    items: [
      {
        icon: "person_add",
        text: "구성원추가",
        menu: "add_person"
      },
      {
        icon: "link",
        text: "직계 가족만 보기"
      },
      {
        icon: "get_app",
        text: "족보 다운로드"
      }
    ],
    personItem: {
      id: null,
      generation: null,
      name: null,
      name_chinese: null,
      is_male: null,
      age: null,
      birth_timestamp: null,
      death_timestamp: null,
      job: null,
      img_profile: null,

      id_parent: null,
      id_mate_list: [],
      id_child_list: [],
      tag_list: [],

      birth_date: "",
      death_date: ""
    },
    relationPersonItem: null,
    relationType: null,
    personlist: [],
    personMap: {}
  }),
  props: {
    source: String
  },
  // 시작
  created() {
    this.init();
  },
  methods: {
    init: function() {
      this.pedigreeObject = this.$store.getters.getPedigree.pedigree;
      this.generation = +this.pedigreeObject.middle_tier_generation;
      this.pedigreeTitle =
        this.pedigreeObject.surname +
        " " +
        this.pedigreeObject.surname_chinese +
        " " +
        this.pedigreeObject.middle_tier_faction;
      this.loadPersonData();
    },
    // 사람 팝업 닫기
    closePersonPopup: function() {
      this.$refs.form.reset();
      this.personDialog = false;
      this.relationPersonItem = null;
      this.relationType = null;
      this.personItem.tag_list = []
    },
    // 대메뉴 클릭
    onClick_Menu: function(item) {
      if (item.menu == "add_person") {
        this.personDialog = true;
      }
    },
    onClick_upPageLoad: function() {},
    onClick_downPageLoad: function() {},
    // 사람 팝업 닫기 클릭
    onClick_close: function() {
      this.closePersonPopup();
    },
    // 사람 생성하기 클릭
    onClick_save: function() {
      if (this.$refs.form.validate()) {
        if (this.personItem.birth_date) {
          this.personItem.birth_timestamp = new Date(
            this.personItem.birth_date
          ).getTime();
        }
        if (this.personItem.death_date) {
          this.personItem.death_timestamp = new Date(
            this.personItem.death_date
          ).getTime();
        }

        // 사람 관계가 있다면
        if (this.relationPersonItem) {
          this.createPerson(this.relationType);
        } else {
          this.createPerson(-1);
        }
      } else {
        alert("필수값을 입력하세요.");
      }
    },
    // 사람 생성
    createPerson: function(type) {
      // 루트에 사람이 생기는 경우
      if (type === -1) {
        this.$http
          .post("/api/create_person", {
            rq: this.personItem
          })
          .then(rs => {
            this.$store.dispatch("openSnackbar", { msg: "저장되었습니다." });
            this.closePersonPopup();
            // 지금은 일단 전체 새로고침
            this.loadPersonData();
          });
      }
      // 배우자를 만드는 경우
      else if (type === 0) {
        this.$http
          .post("/api/create_person", {
            rq: this.personItem
          })
          .then(rs => {
            this.$store.dispatch("openSnackbar", { msg: "저장되었습니다." });
            this.closePersonPopup();
            // 지금은 일단 전체 새로고침
            this.loadPersonData();
          });
      }
      // 자녀를 만드는 경우
      else if (type === 1) {
        this.$http
          .post("/api/create_person_child", {
            rq: {
              ...this.personItem,
              relationPersonItem: this.relationPersonItem
            }
          })
          .then(rs => {
            this.$store.dispatch("openSnackbar", { msg: "저장되었습니다." });
            this.closePersonPopup();
            // 지금은 일단 전체 새로고침
            this.loadPersonData();
          });
      }
      // 형제를 만드는 경우
      else if (type === 2) {
        this.$http
          .post("/api/create_person", {
            rq: this.personItem
          })
          .then(rs => {
            this.$store.dispatch("openSnackbar", { msg: "저장되었습니다." });
            this.closePersonPopup();
            // 지금은 일단 전체 새로고침
            this.loadPersonData();
          });
      }
      // 부모를 만드는 경우
      else if (type === 3) {
        this.$http
          .post("/api/create_person", {
            rq: this.personItem
          })
          .then(rs => {
            this.$store.dispatch("openSnackbar", { msg: "저장되었습니다." });
            this.closePersonPopup();
            // 지금은 일단 전체 새로고침
            this.loadPersonData();
          });
      }
    },
    // 태그 추가 버튼 클릭
    onClick_addTagBtn: function() {
      this.personItem.tag_list.push({
        key: "",
        value: ""
      });
    },
    // 사람 데이터 로드
    loadPersonData: function() {
      this.$http
        .post("/api/loadPersons", {
          rq: {
            startGeneration: this.startGeneration
          }
        })
        .then(rs => {
          let id_child_list;
          this.personlist = [];
          console.log(rs.personList);
          for (let i = 0; i < 10; i++) {
            this.personlist[i] = [];
          }
          if (rs.personList) {
            // 1. 돌면서 map을 만들고 this.personlist에 세대 순으로 넣는다.
            for (let i in rs.personList) {
              if (rs.personList[i].birth_timestamp) {
                rs.personList[i].birth_date = new this.$util._Date(
                  rs.personList[i].birth_timestamp
                ).format("yyyy-MM-dd");
              }
              if (rs.personList[i].death_timestamp) {
                rs.personList[i].death_date = new this.$util._Date(
                  rs.personList[i].death_timestamp
                ).format("yyyy-MM-dd");
              }
              // map 만들고
              this.personMap[rs.personList[i]._id] = rs.personList[i];
              // 세대 순으로 넣는다.
              this.personlist[
                rs.personList[i].generation - this.startGeneration
              ].push(rs.personList[i]);
            }
            // 2. childItemList를 만들어 준다.
            for (let i in rs.personList) {
              
              id_child_list = rs.personList[i].id_child_list;

              if (id_child_list && id_child_list.length) {
                rs.personList[i].childItemList = [];
                for (let j in id_child_list) {
                  rs.personList[i].childItemList[j] = this.personMap[
                    id_child_list[j]
                  ];
                  if (j == 0) {
                    rs.personList[i].childItemList[j].firstChild = true;
                  }
                }
              }
            }
            console.log(this.personlist);
          }
        });
    },
    // 사람 클릭 후 가족 추가
    onClick_addRelationPerson: function(item) {
      this.relationPersonItem = item;
      this.personDialog = true;
    },
    // 자세히 보기
    onClick_personDetailView: function(item) {
      this.personItem = this.$util.copy(item);
      this.personDialog = true;
    },
    // 삭제 하기
    onClick_personDelete: function() {
      if (confirm("정말 삭제하시겠습니까?")) {
        console.log("삭제");
      }
    },
    // 관계 셀렉트 박스 바뀐 경우
    onChange_relationTypeSelect: function() {
      // 배우자
      if (this.relationType == 0) {
        this.personItem.generation = this.relationPersonItem.generation;
      }
      // 자녀
      else if (this.relationType == 1) {
        this.personItem.generation = this.relationPersonItem.generation + 1;
      }
      // 형제
      else if (this.relationType == 2) {
        this.personItem.generation = this.relationPersonItem.generation;
      }
      // 부모
      else if (this.relationType == 3) {
        this.personItem.generation = this.relationPersonItem.generation - 1;
      }
    }
  }
};
</script>