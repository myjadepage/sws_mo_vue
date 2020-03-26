<template>
  <div class="bgGray">
  <Bar :val="title" />
  <DetailItem />
  <PhotoReview />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import DetailItem from '@/components/mypage/Exchange/DetailItem'
import PhotoReview from '@/components/mypage/MyReview/PhotoReview'

export default {
  name: 'ReviewWrite',
  data () {
    return {
      title: '수취확인/리뷰작성'
    }
  },
  components: {
    Bar, DetailItem, PhotoReview
  }
}
</script>
<style>

</style>
