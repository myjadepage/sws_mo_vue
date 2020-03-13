<template>
  <div class="buyFooterWrap">
      <button>{{finalPrice|makeComma}}원 결제하기</button>
  </div>
</template>

<script>
export default {
  created () {
    this.finalPrice = this.$store.getters.getFinalPrice
  },
  data () {
    return {
      finalPrice: 0
    }
  }
}
</script>

<style>
.buyFooterWrap button{
    width: 100%;
    height: 50px;
    background-color: #e61754;
    color: #fff;
    font-size: 15px;
}
</style>
