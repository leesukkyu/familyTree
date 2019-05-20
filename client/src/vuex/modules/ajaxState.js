import * as types from '../mutation-types'

const state = {
  ajaxState: {
    isShow: false
  }
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.CHANGE_AJAX_STATE](state, payload) {
    state.ajaxState.isShow = payload.isShow;
  }
}

export default {
  state,
  mutations
}