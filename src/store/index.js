import Vue from 'vue'
import Vuex from 'vuex'
import { checkJoinId } from '../api'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    userInfo: {},
    product: {},
    productPrice: 0,
    selectedOptions: [],
    searchCat: 0,
    isAuth: false
  },
  getters: {
    getId: state => state.userId.userId,
    getIsAuth: state => state.isAuth,
    getProduct: state => state.product,
    getProductPrice: state => state.productPrice,
    getSelectedOptions: state => state.selectedOptions,
    getSelectedOptionsLength: state => state.selectedOptions.length,
    getOptionCnt: state => idx => state.selectedOptions[idx].count,
    getOptionPrice: state => idx => state.selectedOptions[idx].price,
    getSearchCat: state => state.searchCat
  },
  mutations: {
    addOption: (state, item) => state.selectedOptions.push(item),
    deleteOption: (state, idx) => state.selectedOptions.splice(idx, 1),
    decreaseOptionCnt: (state, idx) => state.selectedOptions[idx].count--,
    increaseOptionCnt: (state, idx) => state.selectedOptions[idx].count++
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
