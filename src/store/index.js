import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { userLogin } from '../api'

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
    getId: state => state.userInfo.userId,
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
      localStorage.getItem('accessToken')
      localStorage.getItem('refreshToken')
      if (localStorage.getItem('accessToken')) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
    // 로그인 실패시
    loginError (state) {
      state.isLogin = false
    },
    logOut (state) {
      state.isLogin = false
      state.userInfo = null
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
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
      router.push('/')
    },
    // 로그인
    login ({dispatch}, loginObj) {
      console.log('loginObj', loginObj)
      userLogin(loginObj.id, loginObj.password)
        .then(res => {
          console.log('로그인성공?', res)
          let accessToken = res.data.jsonData.accessToken
          let refreshToken = res.data.jsonData.refreshToken
          localStorage.setItem('accessToken', accessToken)
          localStorage.setItem('refreshToken', refreshToken)
          dispatch('getUserInfo')
        })
        .catch(function (error) {
          console.log('ERROR', error)
        })
    },
    getUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        commit('loginSuccess')
        router.push('/')
        resolve()
      })
    }
  }
})
