import * as types from '../mutation-types'

const state = {
  snackbar: {
    isShow: false,
    color: "success",
    timeout: 3000,
  }
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.OPEN_SNACKBAR](state,  payload = {}) {
    console.log(payload);
    Object.assign(state.snackbar, payload)
    state.snackbar.color = payload.color ? payload.color : "success"
    state.snackbar.msg = payload.msg ? payload.msg : "등록되었습니다"
    state.snackbar.isShow = true;
  },
  [types.CLOSE_SNACKBAR](state) {
    state.snackbar.isShow = false;
  }
}

export default {
  state,
  mutations
}