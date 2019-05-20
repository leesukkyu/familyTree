<template>
  <div v-show="isShow" class="wrap">
    <div class="box">
      <v-progress-circular :size="60" :width="3" color="green" indeterminate></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      show: false
    };
  },
  computed: {
    isShow: function() {
      return this.$store.getters.getAjaxState.ajaxState.isShow;
    }
  }
};
</script>

<style scoped>
.wrap {
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  background: rgba(0, 0, 0, 0.1);
  z-index: 9;
}
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -30px;
  margin-left: -30px;
}
@keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}
</style>