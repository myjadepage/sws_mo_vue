// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'
import { store } from './store/index'
import GAuth from 'vue-google-oauth2'
import IMP from 'vue-iamport'
import VueDaumPostcode from 'vue-daum-postcode'

Vue.use(IMP, 'imp99407185') // 아임포트 회원가입 후 발급된 가맹점 고유 코드를 사용해주세요. 예시는 KCP공식 아임포트 데모 계정입니다.
Vue.IMP().load()
Vue.use(VueDaumPostcode)
Vue.use(VueMeta, {
  refreshOnceOnNavigation: true
})

// 구글로그인 관련
Vue.use(GAuth, {'client_id': '64392911625-v0krge4vu1k02v5mv4dvdpj67ei9jh2v.apps.googleusercontent.com'})

// 필터 -가격 세자리 콤마
Vue.filter('makeComma', val => {
  return String(val).replace(/\B(?=(\d{3})+(?!\d))/g, ',')
})

// 검색시 상품이름 짧게
Vue.filter('shortString', val => {
  if (val.length > 28) {
    return val.replace(val.substring(27), '')
  } else {
    return val
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  beforeCreate () {
    if (sessionStorage.getItem('accessToken')) {
      this.$store.dispatch('getUserInfo')
    }
    if (sessionStorage.getItem('accessTokenGoogle')) {
      this.$store.dispatch('getUserInfoGoogle')
    }
    if (sessionStorage.getItem('accessTokenKakao')) {
      this.$store.dispatch('getUserInfoKakao')
    }

    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/static/sw.js')
        .then((success) => {
          console.log('Service Worker register success', success)
        })
        .catch((err) => {
          console.log('Service Worker register fail', err)
        })
    }
  },
  components: { App },
  template: '<App/>'
})
