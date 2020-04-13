<template>
  <div class="detailReviewWrap">
      <ReviewHeader :reviews="reviews" @typeClick="typeClick" :type="type" />
      <Entity v-for="(review,idx) in reviewList" :key="idx" :type="type" :review="review" :class="{'dpNone':review.reviewType !== type && type !== 0}" />
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
      type: 0
    }
  },

  methods: {
    typeClick (type) {
      this.type = type
    }
  },
  computed: {
    reviewList () {
      // if (this.type === 0) {
      return this.reviews
      // } else if (this.type === 1) {
      // return this.reviews.filter(review => review.reviewType === 1)
      // } else if (this.type === 2) {
      // return this.reviews.filter(review => review.reviewType === 2)
      // }
    }
  }
}
</script>

<style>
</style>
