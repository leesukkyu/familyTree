// 공통 - 포스트 스크립트
<template>
  <v-menu
    ref="menu"
    v-model="menu"
    :close-on-content-click="false"
    :nudge-right="40"
    lazy
    transition="scale-transition"
    offset-y
    full-width
    min-width="290px"
  >
    <v-text-field
      slot="activator"
      v-model="date"
      :label="label"
      prepend-icon="event"
      readonly
    ></v-text-field>
    <v-date-picker
      locale="kr"
      @input="menu = false"
      v-model="date"
      no-title
      scrollable
    ></v-date-picker>
  </v-menu>
</template>

<script>
export default {
  props: ["obj", "objKey", "label", "value"],
  data: () => ({
    menu: false,
    date : ''
  }),
  watch: {
    date : function(d){
      this.obj[this.objKey] = d;
    },
    value : function(d){
      if(d && d.length == 10){
        this.date = d;
      }else{
        this.date = new Date().toISOString().substr(0, 10)
      }
    }
  },
  created() {
    console.log('xx');
  },
  mounted() {},
  methods: {}
};
</script>