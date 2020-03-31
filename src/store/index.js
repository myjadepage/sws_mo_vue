import Vue from 'vue'
import Vuex from 'vuex'
import router from '../router'
import { userLogin, getUserInfo } from '../api'
Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {},
    isLogin: false, // 로그인을 했는지 여부
    product: {},
    postCode: {},
    optionAddedPrice: null,
    finalPrice: null,
    payMethod: null,
    selectedOptions: [],
    searchCat: 0,
    isAuth: false,
    ordererInfo: {name: '', phone: '', email: ''},
    destInfo: {name: '', phone: ''},
    payPriceInfo: {prdtPrice: 0, discount: 0, deliveryPrice: 0, addDeliveryCost: 0},
    cartItemOptionPrices: []
  },
  getters: {
    getId: state => state.userInfo.userId,
    getIsAuth: state => state.isAuth,
    getProduct: state => state.product,
    getOptionAddedPrice: state => state.optionAddedPrice,
    getPayMethod: state => state.payMethod,
    getFinalPrice: state => state.finalPrice,
    getSelectedOptions: state => state.selectedOptions,
    getSelectedOptionsLength: state => state.selectedOptions.length,
    getOptionCnt: state => idx => state.selectedOptions[idx].count,
    getOptionPrice: state => idx => state.selectedOptions[idx].price,
    getSearchCat: state => state.searchCat,
    getPostCode: state => state.postCode,
    getPayPriceInfo: state => state.payPriceInfo,
    getOrdererInfo: state => state.ordererInfo,
    getDestInfo: state => state.destInfo,
    getCartItemOptionPrices: state => state.cartItemOptionPrices
  },
  mutations: {
    // 로그인 성공시
    loginSuccess (state) {
      sessionStorage.getItem('accessToken')
      sessionStorage.getItem('refreshToken')
      if (sessionStorage.getItem('accessToken')) {
        state.isLogin = true
      } else {
        state.isLogin = false
      }
    },
    loginSuccessGoogle (state) {
      sessionStorage.getItem('accessTokenGoogle')
      sessionStorage.getItem('refreshTokenGoogle')
      if (sessionStorage.getItem('accessTokenGoogle')) {
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
      sessionStorage.removeItem('accessToken')
      sessionStorage.removeItem('refreshToken')
      sessionStorage.removeItem('memberInfo')
    },
    logOutGoogle (state) {
      state.isLogin = false
      state.userInfo = null
      sessionStorage.removeItem('accessTokenGoogle')
      sessionStorage.removeItem('refreshTokenGoogle')
    },
    addOption: (state, item) => state.selectedOptions.push(item),
    deleteOption: (state, idx) => state.selectedOptions.splice(idx, 1),
    deleteAllOption (state) { state.selectedOptions = [] },
    decreaseOptionCnt: (state, idx) => state.selectedOptions[idx].count--,
    increaseOptionCnt: (state, idx) => state.selectedOptions[idx].count++,
    setOptionCnt (state, [idx, num]) {
      state.selectedOptions[idx].count = num
    },
    updatePayPriceInfo (state, {name, price}) {
      state.payPriceInfo[name] = price
    },
    updateOrdererInfo (state, [name, value]) {
      state.ordererInfo[name] = value
    },
    updateDestInfo (state, [name, value]) {
      state.destInfo[name] = value
    },
    updateAddDeliveryCost (state, cost) {
      state.payPriceInfo.addDeliveryCost = cost
    },
    addcartItemOptionPrice (state, value) {
      state.cartItemOptionPrices.push(value)
    }
  },
  actions: {
    // 로그아웃
    logOut ({commit}) {
      commit('logOut')
      router.push('/')
    },
    // 로그인
    login ({dispatch}, loginObj) {
      userLogin(loginObj.id, loginObj.password)
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            let accessToken = res.data.jsonData.accessToken
            let refreshToken = res.data.jsonData.refreshToken
            sessionStorage.setItem('accessToken', accessToken)
            sessionStorage.setItem('refreshToken', refreshToken)

            getUserInfo(accessToken).then(r => {
              sessionStorage.setItem('memberInfo', JSON.stringify(r.data.jsonData))
            }).catch(err => {
              console.log(err)
            })

            dispatch('getUserInfo')
            router.push('/')
          } else {
            alert('아이디나 패스워드가 다릅니다.')
            return false
          }
        })
        .catch(function (error) {
          console.log('ERROR', error)
        })
    },
    getUserInfo ({commit}) {
      return new Promise((resolve, reject) => {
        commit('loginSuccess')
        resolve()
      })
    },
    getUserInfoGoogle ({commit}) {
      return new Promise((resolve, reject) => {
        commit('loginSuccessGoogle')
        resolve()
      })
    }
  }
})
