<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
    <Snackbar></Snackbar>
    <Ajax-animation></Ajax-animation>
    <v-footer class="pa-3">
      <v-spacer></v-spacer>
      <div>족보 관리 v0.1 &copy; 가안</div>
    </v-footer>
  </v-app>
</template>

<style>
</style>


<script>
import Login from "./components/login";
import Snackbar from "./components/common/snackbar";
import AjaxAnimation from "./components/common/ajaxAnimation";

export default {
  name: "App",
  components: {
    Login,
    Snackbar,
    "Ajax-animation": AjaxAnimation
  },
  data() {
    return {
      //
    };
  }
};
</script>
