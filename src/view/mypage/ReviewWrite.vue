<template>
  <div class="bgGray reviewBlock">
  <Bar :val="title" />
  <DetailItem />
  <PhotoReview />
  <MovieReview />
  <BuyDecision />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import DetailItem from '@/components/mypage/MyReview/DetailItem'
import PhotoReview from '@/components/mypage/MyReview/PhotoReview'
import MovieReview from '@/components/mypage/MyReview/MovieReview'
import BuyDecision from '@/components/mypage/MyReview/BuyDecision'

export default {
  name: 'ReviewWrite',
  data () {
    return {
      title: '수취확인/리뷰작성'
    }
  },
  components: {
    Bar, DetailItem, PhotoReview, MovieReview, BuyDecision
  }
}
</script>
<style>

</style>
