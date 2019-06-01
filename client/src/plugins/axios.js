import Vue from 'vue'
import axios from 'axios'
import querystring from 'query-string'
import store from '../vuex/store'

let ajaxCount = 0;

Vue.prototype.$http = axios.create({
  // 기본 API URL
  baseURL: process.env.VUE_APP_ROOT_API,
  timeout: 30000,
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
});

// 요청데이터 전처리
Vue.prototype.$http.interceptors.request.use(function (config) {
  ajaxCount++;
  if (config.data.ajaxAnimation !== false) {
    if (ajaxCount == 1) {
      store.dispatch("changeAjaxState", {
        isShow: true
      });
    }
  }
  console.log('-------------보낸 데이터--------------');
  console.log(config.url);
  console.log(config.data);
  console.log(config.data);
  console.log('------------------------------------');
  return config;
}, function (error) {
  store.dispatch("changeAjaxState", {
    isShow: false
  });
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
Vue.prototype.$http.interceptors.response.use(function (response) {
  ajaxCount--;
  if (ajaxCount == 0) {
    store.dispatch("changeAjaxState", {
      isShow: false
    });
  }
  console.log('-------------받은 데이터--------------');
  console.log(response);
  console.log('------------------------------------');
  return response.data;
}, function (error) {
  ajaxCount--;
  store.dispatch("changeAjaxState", {
    isShow: false
  });
  // Do something with response error
  return Promise.reject(error);
});
