<template>
  <div class="reviewHeaderWrap">
      <span class="reviewCnt">리뷰 총 {{reviewsLength}}개</span>
      <div class="rating">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none"></span><span class="ratePoint"> {{reviewAvgRate}}</span>
      </div>
        <div class="reviewCategory">
          <span @click="typeClick(0)" :class="{'selected': type === 0}">전체</span>
          <span @click="typeClick(1)" :class="{'selected': type === 1}">포토</span>
          <span @click="typeClick(2)" :class="{'selected': type === 2}">동영상</span>
        </div>
  </div>
</template>

<script>
export default {
  props: ['reviews', 'type'],
  methods: {
    typeClick (type) {
      this.$emit('typeClick', type)
    }
  },
  computed: {
    fullStarCnt () {
      return Math.floor(this.reviewAvgRate)
    },
    halfStarCnt () {
      return this.reviewAvgRate % 1
    },
    noneStarCnt () {
      if (this.halfStarCnt) {
        return 4 - this.fullStarCnt
      } else {
        return 5 - this.fullStarCnt
      }
    },
    reviewAvgRate () {
      let sum = 0
      let cnt = 0
      if (this.reviews) {
        this.reviews.forEach(obj => {
          if (obj.starPoint) {
            sum += obj.starPoint
            cnt++
          }
        })
        if (sum === 0 && cnt === 0) return 0
        return (sum / cnt).toFixed(1)
      } else {
        return 0
      }
    },
    reviewsLength () {
      return this.reviews ? this.reviews.length : 0
    }
  }

}
</script>

<style>
.reviewHeaderWrap{
  padding: 30px 12px 10px 12px;
}

.reviewHeaderWrap .ratePoint{
  font-size: 22px;
  font-weight: bold;
}
.reviewHeaderWrap .reviewCnt{
  font-size: 15px;
  font-weight: 500;
  padding-left: 3px;
}

.reviewHeaderWrap .reviewCategory span{
  text-align: center;
  margin: 35px 15px 10px 0;
  line-height: 30px;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
}
.reviewHeaderWrap .reviewCategory span.selected{
  text-align: center;
  line-height: 30px;
  display: inline-block;
  border: 1px solid #e61754;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  color: #e61754;
}
</style>
