<template>
  <div class="reviewEntityWrap">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full sm"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half sm"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none sm"></span>
    <span class="reviewDeclare">신고하기</span><span class="reviewDelimiter">|</span><span class="reviewDate">{{review.date}}</span><span class="reviewWriter">{{concealedWriter}}</span>
      <div class="reviewContent">{{review.content}}</div>
      <div v-if="review.photo.length===1" class="photoSection"></div>
      <div v-if="review.photo.length>2" class="multiPhotoSection">
        <span v-for="(p,idx) in review.photo" :key="idx" class="subPhoto"></span>
      </div>
      <div v-if="review.media" class="mediaSection"></div>
  </div>
</template>

<script>
export default {
  props: ['review'],
  computed: {
    fullStarCnt () {
      return Math.floor(this.review.rate)
    },
    halfStarCnt () {
      return this.review.rate % 1
    },
    noneStarCnt () {
      if (this.halfStarCnt) {
        return 4 - this.fullStarCnt
      } else {
        return 5 - this.fullStarCnt
      }
    },
    concealedWriter () {
      let val = this.review.writer
      val = val.split('')
      for (let i = 3; i < val.length; i++) {
        val[i] = '*'
      }
      val = val.join('')

      return val
    }
  }
}
</script>

<style>
.reviewEntityWrap{
  padding-top: 13px;
  padding-bottom: 15px;
  border-top: 1px solid #eeeeee;
}

.reviewEntityWrap .sm{
    width: 13px;
    height: 13px;
}

.reviewEntityWrap .reviewDeclare{
  cursor: pointer;
}

.reviewEntityWrap .reviewWriter,.reviewDate,.reviewDelimiter,.reviewDeclare{
  font-size: 13px;
  color: #666666;
  float: right;
  margin-right: 5px;
}

.reviewEntityWrap .reviewDelimiter{
  font-size: 7px;
  font-weight: 500;
  line-height: 19px;
}

.reviewEntityWrap .reviewContent{
  margin-top: 13px;
}

.reviewEntityWrap .photoSection{
  display: inline-block;
  width: 100%;
  height: 230px;
  background-color: #ebd1c4;
}

.reviewEntityWrap .subPhoto{
  display: inline-block;
  margin: 10px 10px 15px 0;
  width: 74px;
  height: 55px;
  background-color: #ebd1c4;
}

.reviewEntityWrap .mediaSection{
  display: inline-block;
  width: 100%;
  height: 230px;
  background-color: gray;
}
</style>
