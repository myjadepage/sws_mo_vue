import Vue from 'vue'
import Vuex from 'vuex'
import { checkJoinId, userLogin } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {},
    isLogin: false, // 로그인을 했는지 여부
    product: {},
    optionAddedPrice: null,
    finalPrice: null,
    selectedOptions: [],
    searchCat: 0,
    isAuth: false
  },
  getters: {
    getId: state => state.userId.userId,
    getIsAuth: state => state.isAuth,
    getProduct: state => state.product,
    getOptionAddedPrice: state => state.optionAddedPrice,
    getFinalPrice: state => state.finalPrice,
    getSelectedOptions: state => state.selectedOptions,
    getSelectedOptionsLength: state => state.selectedOptions.length,
    getOptionCnt: state => idx => state.selectedOptions[idx].count,
    getOptionPrice: state => idx => state.selectedOptions[idx].price,
    getSearchCat: state => state.searchCat
  },
  mutations: {
    // 로그인 성공시
    loginSuccess (state) {
      state.isLogin = true
    },
    // 로그인 실패시
    loginError (state) {
      state.isLogin = false
    },
    logOut (state) {
      state.isLogin = false
      state.userInfo = null
    },
    addOption: (state, item) => state.selectedOptions.push(item),
    deleteOption: (state, idx) => state.selectedOptions.splice(idx, 1),
    decreaseOptionCnt: (state, idx) => state.selectedOptions[idx].count--,
    increaseOptionCnt: (state, idx) => state.selectedOptions[idx].count++
  },
  actions: {
    // 로그아웃
    logOut ({commit}) {
      commit('logOut')
      this.$router.push('/')
    },
    // 로그인
    login ({dispatch}, loginObj) {
      userLogin(loginObj.id, loginObj.password)
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            console.log('로그인성공?', res)
            localStorage.setItem('accessToken', res.data.jsonData.accessToken)
            localStorage.setItem('refreshToken', res.data.jsonData.accessToken)
            localStorage.setItem('userSysId', res.data.jsonData.userSysId)
            this.$router.push('/MyPage')
          } else {
            alert('없는 아이디 정보입니다.')
          }
        })
        .catch(function (error) {
          console.log('ERROR', error)
        })
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
