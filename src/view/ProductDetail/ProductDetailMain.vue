<template>
  <div class="productDetailWrap" v-if="product.prdtSysId">
    <div  v-if="buyMode" class="darkFilter"></div>
      <Bar :val="title" />
      <Media/>
      <Info />
      <Description />
      <ProductFooter :options="options" @hideClick="buyMode = false" @buyModeClick="buyMode = true" :buyMode="buyMode" />
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
      this.options = res.data.jsonData.normalOptions
    }
    ).catch((e) => console.log(e)
    )
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
    Bar, Media, Info, Description, ProductFooter
  }
}
</script>

<style>
.productDetailWrap{
  min-width: 360px;
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
