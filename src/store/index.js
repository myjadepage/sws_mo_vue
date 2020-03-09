import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import { checkJoinId } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations,
  actions: {
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
