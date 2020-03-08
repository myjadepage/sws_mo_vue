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
      checkJoinId()
        .then(res => {
          console.log('중복성공?', res)
          if (res.data.jsonData.resultCode === '0001') {
            alert('사용가능한 아이디입니다.')
          }
        })
        .catch(error => {
          console.log('error', error)
          alert('중복 아이디가 있습니다.')
        })
    }
  }
})
