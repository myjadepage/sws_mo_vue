// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store/index'
import GAuth from 'vue-google-oauth2'

// 결제관련
var IMP = window.IMP // 생략가능
IMP.init('imp99407185') // 'iamport' 대신 부여받은 "가맹점 식별코드"를 사용

// 구글로그인 관련
Vue.use(GAuth, {'client_id': '64392911625-v0krge4vu1k02v5mv4dvdpj67ei9jh2v.apps.googleusercontent.com'})

// 필터 -가격 세자리 콤마
Vue.filter('makeComma', val => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  beforeCreate () {
    // this.$store.dispatch('getUserInfo')
  },
  components: { App },
  template: '<App/>'
})
