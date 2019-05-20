import login from './components/login'
import main from './components/main'
import store from './vuex/store'

// 로그인 여부를 체크한다.
const requireAuth = function (from, to, next) {
  if (store.getters.getPedigree.pedigree._id) {
    return next();
  } else {
    return next('/');
  }
}

export default [
  {
    path: '/',
    component: login
  },
  {
    path: '/main',
    component: main,
    beforeEnter: requireAuth
  },
  {
    path: '*',
    redirect: '/'
  }
]




