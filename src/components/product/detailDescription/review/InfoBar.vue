<template>
  <div class="reviewInfoBar">
    <span v-if="review.starPoint" class="startBox">
      <span v-for="(n,nid) of review.starPoint" :key="review.prdtReviewSysId + '_fullStar_' + nid" class="ico_star_full sm"></span>
      <span v-for="(j,jid) of (5 - review.starPoint)" :key="review.prdtReviewSysId + '_emptyStar_' + jid" class="ico_star_none sm"></span>
    </span>
    <p class="txtBox">
      <span class="reviewWriter">{{printId}}</span>
      <span class="reviewDate">{{reviewDate}}</span>
      <span class="reviewDelimiter">|</span>
      <button class="reviewDeclare">신고하기</button>
    </p>
  </div>
</template>

<script>
export default {
  props: ['review'],
  computed: {
    reviewDate () {
      if (this.review.createdAt) {
        let date = this.review.createdAt.substr(0, 8)
        return date.substr(0, 4) + '.' + date.substr(4, 2) + '.' + date.substr(6, 2)
      }
    },
    printId () {
      if (this.review.userId) {
        return this.review.userId.substr(0, 10)
      }
    }
  }
}
</script>
