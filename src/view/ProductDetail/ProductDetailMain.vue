<template>
  <div class="productDetailWrap" v-if="product.prdtSysId">
    <div v-if="buyMode" class="darkFilter"></div>
      <Bar :val="title" />
      <Media/>
      <Info />
      <Description />
      <ProductFooter @hideClick="buyMode = false" @buyModeClick="buyMode = true" :buyMode="buyMode" />
      <!-- Footer에게 normalOptions를 Prop으로 넘겨줘야함 -->
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
      product: {},
      buyMode: false
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
.darkFilter{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  opacity: 50%;
  width: 100%;
  height: 100%;
}

</style>
