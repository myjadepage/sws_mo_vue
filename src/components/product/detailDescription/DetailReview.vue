<template>
  <div class="detailReviewWrap">
      <ReviewHeader :reviews="reviews" @catClick="catClick" />
      <Entity v-for="(review,idx) in reviews" :key="idx" :cat="currentCat" :review="review" />
  </div>
</template>

<script>
import ReviewHeader from './review/ReviewHeader'
import Entity from './review/reviewEntity'

export default {
  props: ['reviews'],
  components: {
    ReviewHeader, Entity
  },
  data () {
    return {
      currentCat: 0
    }
  },

  methods: {
    catClick (cat) {
      let cats = this.$el.getElementsByClassName('reviewCategory')[0].children

      cats[this.currentCat].className = ''
      this.currentCat = cat
      cats[cat].className = 'selected'
    }
  }
}
</script>

<style>
</style>
