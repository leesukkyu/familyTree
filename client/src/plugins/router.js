import Vue from 'vue'
import Router from 'vue-router'
import routes from '../routes'


// 라우터 설정
Vue.use(Router)
const router = new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes
})

export default router