<template>
  <div class="reviewHeaderWrap">
      <span class="reviewCnt">리뷰 총 {{reviews?reviews.length:0}}개</span>
      <div class="rating">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none"></span><span class="ratePoint"> {{reviewAvgRate}}</span>
      </div>
        <div class="reviewCategory">
          <span @click="catClick(0)" class="selected">전체</span>
          <span @click="catClick(1)">포토</span>
          <span @click="catClick(2)">동영상</span>
        </div>
  </div>
</template>

<script>
export default {
  props: ['reviews'],
  methods: {
    catClick (cat) {
      this.$emit('catClick', cat)
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
      if (this.reviews) {
        for (const i of this.reviews) {
          sum += i.starPoint
        }

        return Math.round((sum / 2) / this.reviews.length).toFixed(1)
      } else {
        return 0
      }
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
