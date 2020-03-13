<template>
  <div class="buyPrdInfoWrap">
    <div class="infoHeader">주문상품 정보</div>
    <div class="prdImg">{{product.imgUrl}}</div>
    <div class="prdTitle">{{product.name}}</div>
    <div class="prdOptions">
      <span v-for="(o, idx) in options.length-2" :key="idx">
        [옵션명{{o}}]
      </span>
    </div>
    <div class="prdPriceCnt">{{calcTotalPrice}}</div>
  </div>
</template>

<script>
export default {
  created () {
    this.product = this.$store.getters.getProduct
    this.options = this.$store.getters.getSelectedOptions
  },
  data () {
    return {
      product: {},
      options: {}
    }
  },
  computed: {
    calcTotalPrice () {
      return this.product.price * (this.options.price * this.options.count)
    }
  }
}
</script>

<style>

</style>
