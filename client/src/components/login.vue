<template>
  <v-container fill-height>
    <v-layout align-center justify-center text-xs-center row fill-height>
      <v-flex xs12 class="mb-5">
        <object height="340" data="/image/logo.svg" type="image/svg+xml"></object>

        <!-- 족보 리스트 -->
        <v-card class="list" flat>
          <v-list class="pa-0 mt-4">
            <div v-for="item in pedigreeList" :key="item._id">
              <v-subheader v-if="item.header" :key="item._id">{{ item.header }}</v-subheader>
              <v-divider v-else-if="item.divider" :key="item._id" :inset="item.inset"></v-divider>

              <v-list-tile v-else :key="item._id" avatar @click="onClickList(item.obj)">
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title class="font-weight-medium" v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
                <v-btn flat icon color="pink" @click.stop="onClickDeleteBtn(item.obj)">
                  <v-icon>close</v-icon>
                </v-btn>
              </v-list-tile>
            </div>
          </v-list>
          <v-alert v-if="pedigreeList.length == 1" :value="true" color="#37aa66">여러분의 족보를 생성하세요.</v-alert>
        </v-card>

        <!-- 생성 버튼 -->
        <v-card flat class="mb-5">
          <v-btn flat large icon color="blue" @click="openPopup">
            <v-icon>group_add</v-icon>
          </v-btn>
        </v-card>

        <!-- 생성 팝업 -->
        <v-dialog v-model="dialog" max-width="600px">
          <v-card>
            <v-card-title>
              <span class="title mt-3">새로운 족보를 생성합니다.</span>
            </v-card-title>
            <v-card-text class="py-0">
              <v-form ref="form" v-model="valid" lazy-validation>
                <v-container class="pt-0 pb-3" grid-list-md>
                  <v-layout wrap>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="성씨 *"
                        v-model="editedItem.surname"
                        required
                        :rules="rule.require"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field label="성씨 한문" v-model="editedItem.surname_chinese"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="시조 *"
                        v-model="editedItem.root_father"
                        required
                        :rules="rule.require"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field label="시조 한문" v-model="editedItem.root_father_chinese"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="본관 *"
                        v-model="editedItem.family_origin"
                        required
                        :rules="rule.require"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field label="본관 한문" v-model="editedItem.family_origin_chinese"></v-text-field>
                    </v-flex>

                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        label="중시조 *"
                        v-model="editedItem.middle_tier_name"
                        required
                        :rules="rule.require"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field label="중시조 한문" v-model="editedItem.middle_tier_name_Chinese"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field
                        type="number"
                        label="세대입력"
                        v-model="editedItem.middle_tier_generation"
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                      <v-text-field label="파명입력" v-model="editedItem.middle_tier_faction"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
              <small class="ml-4">* 필수 항목</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red" flat @click="close">닫기</v-btn>
              <v-btn color="blue" flat @click="create">생성</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style scoped>
.v-subheader,
.v-list > div {
  background: #fafafa;
}
.theme--light.v-sheet {
  background: #fafafa;
}
</style>

<script>
import rule from "./util/rules";
import router from "../plugins/router";

export default {
  data: () => ({
    rule,
    pedigreeList: [],
    dialog: false,
    valid: true,
    editedItem: {
      surname: "",
      surname_chinese: "",
      root_father: "",
      root_father_chinese: "",
      family_origin: "",
      family_origin_chinese: "",
      middle_tier_name: "",
      middle_tier_name_Chinese: "",
      middle_tier_generation: "",
      middle_tier_faction: ""
    }
  }),
  created() {
    this.init();
  },
  methods: {
    init() {
      // 1. 족보리스트를 불러옵니다.
      this.loadPedigreeList();
    },
    // 전체 족보 리스트를 조회합니다.
    loadPedigreeList() {
      var pedigreeList = [
        {
          header: "조회할 족보를 선택하세요."
        }
      ];
      this.$http
        .post("/api/load_pedigree_list", {})
        .then(rs => {
          console.log(rs.pedigreeList);
          for (var i in rs.pedigreeList) {
            if (i != 0) {
              pedigreeList.push({ divider: true, inset: true });
            }

            pedigreeList.push(this.makeViewObject(rs.pedigreeList[i]));
          }
          this.pedigreeList = pedigreeList;
        })
        .catch(error => {});
    },
    makeViewObject(item) {
      return {
        avatar: item.img ? "" : "/image/person.png",
        title: item.surname,
        subtitle:
          "<span class='text--primary'>" +
          item.surname_chinese +
          "</span> " +
          item.middle_tier_faction +
          " " +
          item.middle_tier_generation +
          "세" +
          " 세보",
        obj: item
      };
    },
    openPopup: function() {
      console.log("create");
      this.dialog = !this.dialog;
    },
    onClickList: function(item) {
      this.$store.dispatch("changePedigree", item);
      router.push("main");
    },
    onClickDeleteBtn: function(obj) {
      if(confirm('정말 삭제하시겠습니까?')){
        var rq = {
          _id: obj._id
        };
        this.$http.post("/api/delete_pedigree", rq).then(rs => {
          var index = this.pedigreeList.indexOf(obj);
          this.pedigreeList.splice(index, 1);
          this.$store.dispatch("openSnackbar", {msg : '삭제되었습니다.'});
          this.dialog = false;
        });
      }
    },
    create() {
      if (this.$refs.form.validate()) {
        this.$http.post("/api/save_pedigree", this.editedItem).then(rs => {
          this.editedItem.id = rs.id;
          this.pedigreeList.push(
            this.makeViewObject(this.$util.copy(this.editedItem))
          );
        });
        this.$store.dispatch("openSnackbar", {msg : '등록되었습니다.'});
        this.dialog = false;
      }
    },
    close() {
      this.dialog = false;
      this.$refs.form.reset();
    }
  }
};
</script>

<style>
</style>
