import * as types from '../mutation-types'

const state = {
  pedigree: {
  }
}

/* eslint-disable no-shadow */
/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
const mutations = {
  [types.CHANGE_PEDIGREE](state, payload) {
    state.pedigree = payload;
  }
}

export default {
  state,
  mutations
}