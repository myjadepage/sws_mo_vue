<template>
  <div class="detailReviewWrap">
      <div v-if="reviews">
      <ReviewHeader :reviews="reviews" @catClick="catClick" />
      <Entity v-for="(review,idx) in reviews" :key="idx" :cat="currentCat" :review="review" />
      </div>
      <!-- <div v-if="currentCat===0">
        <Entity v-for="r in reviews.photos" :key="r.r_no" :review="r" />
        <Entity v-for="r in reviews.normals" :key="r.r_no" :review="r" />
        <Entity v-for="m in reviews.medias" :key="m.r_no" :review="m" />
        </div>
        <div v-if="currentCat===1">
          <Entity v-for="r in reviews.photos" :key="r.r_no" :review="r" />
        </div>
        <div v-if="currentCat===2">
          <Entity v-for="m in reviews.medias" :key="m.r_no" :review="m" />
        </div> -->

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
