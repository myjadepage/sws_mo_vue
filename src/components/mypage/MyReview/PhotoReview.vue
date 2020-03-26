<template>

  <section class="photoReview compBlock">
    <StartScore :score="score"/>
    <TextBlock :reviewText="reviewText" :photos="photos" />
  </section>

</template>

<script>
import StartScore from '@/components/mypage/MyReview/StartScore'
import TextBlock from '@/components/mypage/MyReview/TextBlock'

export default {
  name: 'PhotoReview',
  data () {
    return {
      score: 3,
      reviewText: '최고에요!',
      photos: []
    }
  },
  components: {
    StartScore, TextBlock
  }
}
</script>

<style>

</style>
