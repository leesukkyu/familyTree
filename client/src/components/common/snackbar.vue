<template>
  <div>
    <v-snackbar v-model="show" :color="snackbar.color" :timeout="snackbar.timeout">
      {{ snackbar.msg }}
      <v-btn dark flat @click="snackbar.isShow = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show : false
    }
  },
  watch : {
    isShow(newData, oldData) {
      if(newData){
        this.show = newData;
      }
    },
    show(newData, oldData){
      if(!newData){
        this.$store.dispatch("closeSnackbar")
      }
    }
  },
  computed: {
    snackbar: function() {
      return this.$store.getters.getSnackbar.snackbar;
    },
    isShow : function(){
      return this.$store.getters.getSnackbar.snackbar.isShow;
    }
  }
};
</script>