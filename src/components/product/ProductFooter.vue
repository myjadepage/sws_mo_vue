<template>
  <div class="productFooterWrap">
      <Option/>
      <button class="goBtn cart"><span class="ico_heart"></span>장바구니</button>
      <button class="goBtn buy">구매하기</button>
  </div>
</template>

<script>
import Option from './Footer/ProductFooterOption'
export default {
  components: {
    Option
  }
}
</script>

<style>

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

</style>
