import Vue from 'vue'
import Vuex from 'vuex'
import { checkJoinId } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {},
    isAuth: false
  },
  getters: {
    getId: state => state.userId.userId,
    getIsAuth: state => state.isAuth
  },
  mutations: {
    UID (state, uid) {
      state.userId.userId = uid
    },
    IS_AUTH (state, isAuth) {
      state.isAuth = isAuth
    }
  },
  actions: {
    login () {
    },
    // 아이디중복체크
    CHECH_JOIN_ID () {
      checkJoinId(this.state.userInfo.userId)
        .then(res => {
          console.log('아이디체크성공!', res)
          if (res.data.jsonData.resultCode === '0001') {
            alert('사용가능한 아이디입니다.')
          } else if (res.data.jsonData.resultCode === '0003') {
            alert('중복 아이디가 있습니다.')
            this.state.userInfo.userId = ''
            return false
          }
        })
        .catch(error => {
          console.log('error', error)
          alert('아이디체크 중 문제가 생겼습니다.')
        })
    }
  }
})
