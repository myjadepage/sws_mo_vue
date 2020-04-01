<template>
  <div class="reviewEntityWrap">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full sm"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half sm"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none sm"></span>
    <span class="reviewDeclare">신고하기</span><span class="reviewDelimiter">|</span><span class="reviewDate">{{reviewDate}}</span><span class="reviewWriter">{{review.userId}}</span>
    <div class="reviewBody">
      <div class="reviewContent">{{review.content}}</div>
      </div>
      <!-- <div v-if="review.productReviewPhotos.length===1" class="photoSection"><img :src="reivew.productReviewPhotos[0].photoUrl" alt="포토 리뷰 사진"></div> -->
      <!-- <div v-if="review.photo.length>2" class="multiPhotoSection">
        <span v-for="(p,idx) in review.photo" :key="idx" class="subPhoto"></span>
      </div>
      <div v-if="review.media" class="mediaSection"></div> -->
  </div>
</template>

<script>
export default {
  props: ['review'],
  computed: {
    fullStarCnt () {
      return Math.floor(this.review.starPoint / 2)
    },
    halfStarCnt () {
      return (this.review.starPoint / 2) % 1
    },
    noneStarCnt () {
      if (this.halfStarCnt) {
        return 4 - this.fullStarCnt
      } else {
        return 5 - this.fullStarCnt
      }
    },
    reviewDate () {
      let date = this.review.createdAt.replace(this.review.createdAt.substr(8, this.review.createdAt.length), '').split('')
      date.splice(4, 0, '.')
      date.splice(7, 0, '.')
      return date.join('')
    }
  }
}
</script>

<style>
.reviewEntityWrap{
  border-top: 1px solid #eeeeee;
  padding: 13px 12px 15px;
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

.reviewEntityWrap .photoSection{
  display: inline-block;
  width: 100%;
  padding-top: 75%;
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
  padding-top: 56.26%;
  background-color: gray;
}

.reviewEntityWrap .reviewBody{
  padding-left: 3px;
}
</style>
