<template>
  <div class="productDetailWrap">
    <div  v-if="buyMode" class="darkFilter"></div>
      <Bar :val="title" />
      <img class="mainMedia" src="static\images\DetailExamThumbNail.png" alt="상세 예시 썸네일">

      <Info :product="product" />
      <SubMedia />
      <Info2 :product="product" />
      <Description />
      <ProductFooter  :options="options"  />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Media from '@/components/product/ProductMedia'
import Info from '@/components/product/ProductInfo'
import SubMedia from '@/components/product/SubMedia'
import Info2 from '@/components/product/ProductInfo2'
import Description from '@/components/product/ProductDescription'
import ProductFooter from '@/components/product/ProductFooter'

export default {
  created () {
    window.scrollTo(0, 0)
    this.product = {
      brandName: '클리오',
      name: '킬커버 광채쿠션 타마누 카밍 세럼 (50ml) 킬커버 광채쿠션 타마누 카밍 세럼 (50ml)',
      discountRate: 0.25,
      price: 132500,
      deliveryPriceTypeCode: 5,
      debitAmount: 2500,
      prepaymentAmount: 2500,
      deliveryCommentHTML: '(50,000원 이상 구매시 무료 배송) 3일 이내 발송 예정(주말/공휴일 제외)',
      point: 240,
      pointRate: 1,
      detailDescription: '<p><img src="static\\images\\detailExamDesc.png"></p>'
    }

    this.$store.state.product = this.product
  },
  data () {
    return {
      title: '상품상세',
      product: {},
      buyMode: false,
      options: []
    }
  },
  components: {
    Bar, Media, SubMedia, Info, Info2, Description, ProductFooter
  },
  beforeDestroy () {
    this.$store.commit('deleteAllOption')
  }
}
</script>

<style>
.productDetailWrap{
  min-width: 360px;
}

.productDetailWrap .mainMedia{
 width: 100%;
}

.productDetailWrap .darkFilter{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}

</style>
