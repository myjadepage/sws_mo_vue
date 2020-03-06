<template>
  <div class="productDetailWrap">
      <Bar :val="title" />
      <Media/>
      <Info/>
      <Description/>
      <ProductFooter/>
  </div>
</template>

<script>
import Bar from '@/components/product/Bar'
import Media from '@/components/product/ProductMedia'
import Info from '@/components/product/ProductInfo'
import Description from '@/components/product/ProductDescription'
import ProductFooter from '@/components/product/ProductFooter'

export default {
  data () {
    return {
      title: '상품상세'
    }
  },
  components: {
    Bar, Media, Info, Description, ProductFooter
  }
}
</script>

<style>
.productDetailWrap{
    min-width: 360px;
}
</style>
