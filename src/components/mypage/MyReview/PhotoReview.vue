<template>

  <section class="photoReview compBlock">
    <StartScore :score="score" @stars="stars"/>
    <TextBlock :photos="photos" :prdtSysId="prdtSysId" :score="score" @text="text" />
  </section>

</template>

<script>
import StartScore from '@/components/mypage/MyReview/StartScore'
import TextBlock from '@/components/mypage/MyReview/TextBlock'

export default {
  name: 'PhotoReview',
  props: ['prdtSysId'],
  data () {
    return {
      score: 0,
      photos: []
    }
  },
  components: {
    StartScore, TextBlock
  },
  methods: {
    stars (num) {
      this.score = num
    },
    text (str) {
      this.reviewText = str
    }
  }
}
</script>

<style>

</style>
