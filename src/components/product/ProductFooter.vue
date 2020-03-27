<template>
  <div ref="footerWrap" class="productFooterWrap">
      <div class="hideBtnDiv">
        <div @click="clickHide" v-if="buyMode" class="hideBtn"><span class="ico_hide"></span></div>
      </div>
      <Option :options="options" :buyMode="buyMode" />
      <button @click="clickCart" class="goBtn cart"><span class="ico_heart"></span>장바구니</button>
      <button @click="clickBuy" class="goBtn buy">구매하기</button>
  </div>
</template>

<script>
import Option from './Footer/ProductFooterOption'
import {postCartItem, getAccessToken} from '@/api/index.js'

export default {
  props: ['buyMode', 'options'],
  components: {
    Option
  },
  updated () {
    if (this.buyMode === true) {
      this.$refs.footerWrap.classList.add('buyMode')
    } else {
      this.$refs.footerWrap.classList.remove('buyMode')
    }
  },
  methods: {
    clickBuy () {
      if (!this.buyMode) {
        this.$emit('buyModeClick')
      } else if (this.buyMode && this.$store.getters.getSelectedOptionsLength > 0) {
        if (this.$store.state.isLogin) {
          sessionStorage.setItem('product', JSON.stringify(this.$store.getters.getProduct))
          sessionStorage.setItem('selectedOptions', JSON.stringify(this.$store.getters.getSelectedOptions))
          this.$router.push('/BuyProduct')
        } else {
          this.$router.push('/Login')
        }
      }
    },
    clickHide () {
      this.$emit('hideClick')
    },
    clickCart () {
      if (!this.buyMode) {
        this.$emit('buyModeClick')
      } else if (this.buyMode && this.$store.getters.getSelectedOptionsLength > 0) {
        let cartItem = { // 빈 장바구니 아이템 객체
          prdtSysId: this.$store.getters.getProduct.prdtSysId,
          basketQty: 0,
          isOptionNormal: 0,
          isAddingProduct: 0
          // productOptions: []
          // addingProductsoptional: []
        }

        if (this.$store.getters.getSelectedOptions[0].contentName !== '') { // 옵션이 있는 경우
          cartItem.isOptionNormal = 1
          cartItem.productOptions = []
          for (const o of this.$store.getters.getSelectedOptions) {
            let option = {
              prdtNormalOptionSysId: 0,
              optionKeyName: o.contentName,
              optionQty: o.count
            }

            for (const c of o.contentGroup) {
              if (c.name === '선택없음') {
                continue
              }
              option.prdtNormalOptionSysId = c.prdtNormalOptionSysId
            }
            cartItem.productOptions.push(option)
          }
        } else { // 옵션이 없는 경우
          cartItem.basketQty = this.$store.getters.getSelectedOptions[0].count
        }

        if (this.$store.state.isLogin) {
        // 회원 장바구니 등록

          console.log(cartItem)

          postCartItem(sessionStorage.getItem('accessToken'), cartItem)
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              if (err.response.status === 401) {
                getAccessToken(sessionStorage.getItem('refreshToken'))
                  .then(res => {
                    sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                  })
                  .catch(err => {
                    if (err.response.status === 401) {
                      this.$store.dispatch('logOut')
                      this.$router.push('/Login')
                    }
                  })
              }
            })
        } else {
          // 비회원 장바구니 등록

          let cartList = sessionStorage.getItem('nonMemberCartList')

          if (cartList) {
            cartList = JSON.parse(cartList)

            for (const p of cartList) { // 중복 체크
              if (this.isEquals(p, cartItem)) {
                return
              }
            }
            cartList.push(cartItem)
            sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
          } else {
            sessionStorage.setItem('nonMemberCartList', JSON.stringify([cartItem]))
          }
        }
      }
    },

    isEquals (x, y) { // 객체 값 동일 비교 함수
      if (x === y) return true
      if (!(x instanceof Object) || !(y instanceof Object)) return false
      if (x.constructor !== y.constructor) return false
      for (var p in x) {
        if (!x.hasOwnProperty(p)) continue
        if (!y.hasOwnProperty(p)) return false
        if (x[p] === y[p]) continue
        if (typeof (x[p]) !== 'object') return false
        if (!this.isEquals(x[p], y[p])) return false
      }
      for (p in y) {
        if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false
      }
      return true
    }

  }
}
</script>

<style>
.productFooterWrap.buyMode{
background-color: #fff;
position: fixed;
min-width: 100%;
z-index: 100;
left: 0;
bottom: 0;
}

.productFooterWrap .goBtn{
height: 50px;
width: 50%;
color: white;
font-size: 15px;
}

.productFooterWrap .goBtn.cart{
float: left;
background-color: black;
}
/* .productFooterWrap.buyMode .goBtn.cart, .productFooterWrap.buyMode .goBtn.buy{
  background-color: #999999;
  color: ;
} */

.productFooterWrap .goBtn.buy{
background-color: #e61754;
}

.productFooterWrap .ico_heart{
position: relative;
top: 3px;
margin-right: 41px;
display: inline-block;
width: 21px;
height: 19px;
background: url('../../assets/img/ico/combined.png');
background-size: 100%;
}
.productFooterWrap.buyMode .ico_heart{
  display: none;
}

.productFooterWrap .hideBtnDiv{
  position: relative;
  bottom: 20px;
  width: 100%;
  height: 0;
  text-align: center;
}

.productFooterWrap .ico_hide{
  display: inline-block;
  background: url('../../assets/img/ico/ico_hide.png');
  background-size: 100%;
  width: 12px;
  height: 7px;
}
.productFooterWrap .hideBtn{
  text-align: center;
  display: inline-block;
  background: url('../../assets/img/buyHideBtn.png');
  cursor: pointer;
  background-size: 100%;
  width: 70px;
  height: 20px;
}

</style>
