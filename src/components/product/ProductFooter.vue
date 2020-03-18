<template>
  <div ref="footerWrap" class="productFooterWrap">
      <div class="text-center">
      <span @click="clickHide" v-if="buyMode" class="hideBtn"><span class="ico_hide"></span></span>
      </div>
      <Option :buyMode="buyMode" />
      <button class="goBtn cart"><span class="ico_heart"></span>장바구니</button>
      <button @click="clickBuy" class="goBtn buy">구매하기</button>
  </div>
</template>

<script>
import Option from './Footer/ProductFooterOption'
export default {
  props: ['buyMode'],
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
      if (this.buyMode === false) {
        this.$emit('buyModeClick')
      } else if (this.$store.getters.getSelectedOptionsLength > 0) {
        sessionStorage.setItem('product', JSON.stringify(this.$store.getters.getProduct))
        sessionStorage.setItem('selectedOptions', JSON.stringify(this.$store.getters.getSelectedOptions))
        this.$router.push('/BuyProduct')
      }
    },
    clickHide () {
      this.$emit('hideClick')
    }
  }
}
</script>

<style>
.productFooterWrap.buyMode{
background-color: #fff;
position: fixed;
min-width: 100%;
z-index: 999;
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

.productFooterWrap .text-center{
  position: absolute;
  bottom: 236px;
  left: 0;
  width: 100%;
  height: 0;
  background-color: transparent !important;
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
  background-size: 100%;
  width: 70px;
  height: 20px;
}

</style>
