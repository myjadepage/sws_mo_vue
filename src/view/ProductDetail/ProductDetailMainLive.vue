<template>
  <div class="productDetailWrap" v-if="product.prdtSysId">
      <MediaLive/>
  </div>
</template>

<script>
import MediaLive from '@/components/product/ProductMediaLive'
import { getProduct } from '@/api/index'

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
    MediaLive
  }
}
</script>

<style>
.productDetailWrap{
  min-width: 360px;
}
</style>
