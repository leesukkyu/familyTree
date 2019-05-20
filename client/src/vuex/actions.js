/* eslint-disable */
import * as types from './mutation-types'

// 족보 선택
export const changePedigree = function (context, payload) {
  context.commit(types.CHANGE_PEDIGREE, payload);
}

// 스낵바 열기
export const openSnackbar = function (context, payload) {
  context.commit(types.OPEN_SNACKBAR, payload);
}

// 스낵바 닫기
export const closeSnackbar = function (context, payload) {
  context.commit(types.CLOSE_SNACKBAR, payload);
}

// AJAX 애니메이션
export const changeAjaxState = function (context, payload) {
  context.commit(types.CHANGE_AJAX_STATE, payload);
}

