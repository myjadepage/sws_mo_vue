<template>
  <div class="ReviewDetailWrapper">
      <div v-if="$store.state.declareModalShow" class="darkFilter"></div>
      <Bar :val="title" />
      <ReviewPhotos :review="review" :photosLength="photosLength" v-if="review.reviewType === 1 && photosLength > 1" />
      <img :src="review.productReviewPhotos[0].photoUrl" alt="" class="singlePhoto" v-if="review.reviewType === 1 && photosLength === 1" />
      <ReviewMovie :review="review" v-if="review.reviewType === 2" />
      <InfoBar @declare="declare" :review="review" />
      <OptionBar />
      <p class="content" >{{printText}}</p>
      <LikeBox :like="review.recommendCnt" :hate="review.deprecatedCnt"  />
      <DeclareModal v-if="$store.state.declareModalShow" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import InfoBar from '@/components/product/detailDescription/review/InfoBar'
import OptionBar from '@/components/product/detailDescription/review/OptionBar'
import ReviewPhotos from '@/components/product/detailDescription/review/ReviewPhotos'
import ReviewMovie from '@/components/product/detailDescription/review/ReviewMovie'
import LikeBox from '@/components/product/detailDescription/review/LikeBox'
import DeclareModal from '@/components/product/Modal/DeclareModal'
import { getProductReview } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 상품 상세정보'
  },
  components: {
    Bar, InfoBar, ReviewPhotos, LikeBox, OptionBar, ReviewMovie, DeclareModal
  },
  data () {
    return {
      review: {},
      photosLength: 0,
      title: '',
      declareModalShow: false
    }
  },
  created () {
    getProductReview(this.$route.params.prdtSysId, this.$route.params.prdtReviewSysId)
      .then(res => {
        // console.log(res)
        if (res.data.jsonData.resultCode === '0001') {
          this.review = res.data.jsonData
          if (this.review.reviewType === 0) {
            this.title = '리뷰'
          } else if (this.review.reviewType === 1) {
            this.title = '포토리뷰'
            this.photosLength = this.review.productReviewPhotos.length
          } else if (this.review.reviewType === 2) {
            this.title = '영상리뷰'
          }
        }
      })
  },
  computed: {
    printText () {
      if (this.review.oneLine) {
        return this.review.oneLine
      } else if (this.review.content) {
        return this.review.content
      }
    }
  },
  methods: {
    declare () {
      this.declareModalShow = true
    }
  }
}
</script>

<style>

</style>
