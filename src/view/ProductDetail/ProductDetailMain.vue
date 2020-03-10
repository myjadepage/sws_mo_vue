<template>
  <div class="productDetailWrap" v-if="product.prdtSysId">
      <Bar :val="title" />
      <Media/>
      <Info />
      <Description />
      <ProductFooter/>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Media from '@/components/product/ProductMedia'
import Info from '@/components/product/ProductInfo'
import Description from '@/components/product/ProductDescription'
import ProductFooter from '@/components/product/ProductFooter'
import {getProduct} from '@/api/index'

export default {
  created () {
    let id = this.$route.params.prdtSysId
    let self = this

    getProduct(id).then((res) => {
      self.$store.state.product = res.data.jsonData.product
      self.product = res.data.jsonData.product
    }
    ).catch((e) => console.log(e)
    )
  },
  data () {
    return {
      title: '상품상세',
      product: {}
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
