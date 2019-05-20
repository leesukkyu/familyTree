import Vue from 'vue'

import './plugins/vuetify'
import './plugins/axios'
import './components/util/util'

import router from './plugins/router'
import store from './vuex/store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
