<template>
  <div class="bgGray reviewBlock">
  <Bar :val="title" />
  <DetailItem :product="product" />
  <PhotoReview :prdtSysId="prdtSysId" />
  <MovieReview :prdtSysId="prdtSysId" />
  <BuyDecision :prdtSysId="prdtSysId" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import DetailItem from '@/components/mypage/MyReview/DetailItem'
import PhotoReview from '@/components/mypage/MyReview/PhotoReview'
import MovieReview from '@/components/mypage/MyReview/MovieReview'
import BuyDecision from '@/components/mypage/MyReview/BuyDecision'
import {getProduct} from '@/api/index'

export default {
  metaInfo: {
    title: 'Shall We Shop - 수취확인/리뷰작성'
  },
  name: 'ReviewWrite',
  data () {
    return {
      title: '수취확인/리뷰작성',
      prdtSysId: this.$route.params.prdtSysId,
      product: {}
    }
  },
  components: {
    Bar, DetailItem, PhotoReview, MovieReview, BuyDecision
  },
  created () {
    getProduct(this.prdtSysId)
      .then(res => {
        if (res.data.jsonData.resultCode === '0001') {
          this.product = res.data.jsonData.product
        }
      })
  }
}
</script>
<style>

</style>
