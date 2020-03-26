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
// import {postCartItem} from '@/api/index.js'

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
        if (this.$store.state.isLogin) {
        // 회원 장바구니 등록

          // let cartItem = {
          //   prdtSysId: this.$store.getters.getProduct.prdtSysId,
          //   basketQty: 0,
          //   isOptionNormal: 0,
          //   isAddingProduct: 0,
          //   productOptions: []
          //   // addingProductsoptional: []
          // }

          // console.log(this.$store.getters.getSelectedOptions)

          // if (this.$store.getters.getSelectedOptions) {
          //   postCartItem(sessionStorage.getItem('accessToken'), cartItem)
          // }
          console.log('aaa')
        } else {
        // 비회원 장바구니는 쿠키에 등록
          console.log('bbb')

          let cartItem = {
            prdtSysId: this.$store.getters.getProduct.prdtSysId,
            basketQty: 0,
            isOptionNormal: 0,
            isAddingProduct: 0,
            productOptions: []
            // addingProductsoptional: []
          }

          if (this.$store.getters.getSelectedOptions[0].contentName !== '') { // 옵션이 있는 경우
            cartItem.isOptionNormal = 1
            for (const o of this.$store.getters.getSelectedOptions) {
              let option = {
                prdtNormalOptionSysId: 0,
                optionKeyName: '',
                optionQty: o.count
              }

              for (const c of o.contentGroup) {
                option.prdtNormalOptionSysId = c.prdtNormalOptionSysId
                option.optionKeyName = c.name
              }
              cartItem.productOptions.push(option)
            }

            console.log(cartItem)
          } else { // 옵션이 없는 경우

            //   let item = {
            //     product: this.$store.getters.getProduct,
            //     options: this.$store.getters.getSelectedOptions
            //   }

            //   if (!sessionStorage.getItem('nonMemberCartList')) {
            //     sessionStorage.setItem('nonMemberCartList', JSON.stringify([item]))
            //   } else {
            //     let x = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
            //     if (x.includes(item)) {
            //       return
            //     }

            //     x.push(item)
            //     sessionStorage.setItem('nonMemberCartList', JSON.stringify(x))
            //   }
            //   console.log(JSON.parse(sessionStorage.getItem('nonMemberCartList')))
            // }
          }
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
