<template>
  <div ref="footerWrap" class="productFooterWrap">
      <div class="hideBtnDiv">
        <div @click="clickHide" v-if="buyMode" class="hideBtn"><span class="ico_hide"></span></div>
      </div>
      <Option :options="options" :addPrdts="addPrdts" :buyMode="buyMode" />
      <button @click="clickCart" class="goBtn cart"><span class="ico_heart"></span>장바구니</button>
      <button @click="clickBuy" class="goBtn buy">구매하기</button>
  </div>
</template>

<script>
import Option from './Footer/ProductFooterOption'
import {postCartItem, getAccessToken} from '@/api/index.js'

export default {
  props: ['buyMode', 'options', 'addPrdts'],
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
      } else if (this.buyMode && this.$store.getters.optionTypeCode !== 1) {
        sessionStorage.setItem('products', JSON.stringify([this.$store.getters.getProduct]))
        sessionStorage.setItem('selectedOptions', JSON.stringify([this.$store.getters.getSelectedOptions]))
        sessionStorage.setItem('selectedAddPrdts', JSON.stringify([this.$store.getters.getSelectedAddPrdts]))

        if (this.$store.state.isLogin) {
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
          // optionGroups: []
          // addingProducts: []
        }

        if (this.$store.getters.getSelectedAddPrdtsLength) { // 추가 상품이 있는 경우
          cartItem.isAddingProduct = 1
          cartItem.addingProducts = []

          this.$store.getters.getSelectedAddPrdts.forEach(ap => {
            cartItem.addingProducts.push({
              prdtAddingProductSysId: ap.prdtAddingProductSysId,
              prdtAddingProductDetailSysId: ap.prdtAddingProductDetailSysId,
              addingQty: ap.addingQty
            })
          })
        }

        if (this.$store.getters.getSelectedOptions[0].contentName !== '') { // 옵션이 있는 경우
          cartItem.isOptionNormal = 1
          cartItem.optionGroups = []
          let i = 999
          for (const o of this.$store.getters.getSelectedOptions) {
            let option = {
              optionQty: o.count,
              productOptions: []
            }
            if (!this.$store.state.isLogin) {
              option.optionGroupId = i--
            }

            for (const c of o.contentGroup) {
              if (c.name === '선택없음') {
                continue
              }

              if (this.$store.state.isLogin) {
                option.productOptions.push({
                  prdtNormalOptionSysId: c.prdtNormalOptionSysId,
                  optionKeyName: c.name
                })
              } else {
                option.productOptions.push({
                  prdtNormalOptionSysId: c.prdtNormalOptionSysId,
                  optionKeyName: c.name,
                  price: c.price
                })
              }
            }
            cartItem.optionGroups.push(option)
          }
        } else { // 옵션이 없는 경우
          cartItem.basketQty = this.$store.getters.getSelectedOptions[0].count
        }

        if (this.$store.state.isLogin) {
        // 회원 장바구니 등록
          postCartItem(sessionStorage.getItem('accessToken'), cartItem)
            .then(res => {
              if (res.data.jsonData.resultCode === '0001') {
                this.$emit('addedCartItem')
              }
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

          if (cartItem.isAddingProduct) {
            cartItem.addingProducts = this.$store.getters.getSelectedAddPrdts
          }

          let cartList = sessionStorage.getItem('nonMemberCartList')

          if (cartList) {
            cartList = JSON.parse(cartList)
            cartList.push({...this.$store.getters.getProduct, ...cartItem, basketSysId: cartList[cartList.length - 1].basketSysId - 1, isAddingProduct: cartItem.isAddingProduct})
            sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
          } else {
            sessionStorage.setItem('nonMemberCartList', JSON.stringify([{...this.$store.getters.getProduct, ...cartItem, basketSysId: 999}]))
          }
          this.$emit('addedCartItem')
        }
      }
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
