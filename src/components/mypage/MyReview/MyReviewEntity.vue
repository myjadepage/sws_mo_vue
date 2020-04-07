<template>
  <div class="myReviewEntityWrap">
      <div class="prdtSection">
        <img :src="review.smallImageUrl" alt="리뷰 상품 썸네일">
        <div class="prdtInfo">
            <div class="title">[{{review.brandName}}]{{review.name}}</div>
            <div class="option">[옵션명1] LRS200007G 작은원석 [원석 컬러] 06월 라벤더</div>
        </div>
      </div>

      <div class="reviewSection">
        <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full sm"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half sm"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none sm"></span>
        <div class="content">
            {{review.content}}
        </div>

        <div class="like">
            <span class="ico_like"></span> 추천 {{review.recommendCnt}}
        </div>
        <div class="unlike">
            <span class="ico_unlike"></span> 비추천 {{review.deprecatedCnt}}
        </div>
        <div class="media" v-if="review.reviewType===2">
            <span class="ico_media"></span> +{{review.mediaCnt?review.mediaCnt:''}}
        </div>
        <div class="photo" v-if="review.reviewType===1">
        <span class="ico_photo"></span> +{{review.photoCnt?review.photoCnt:''}}
        </div>

      </div>
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
    }
  }
}
</script>

<style>
.myReviewEntityWrap{
    margin-top: 5px;
    padding: 15px 12px;
    background-color: #fff;
}

.myReviewEntityWrap img{
    width: 50px;
    height: 50px;
    float: left;
}

.myReviewEntityWrap .prdtInfo{
    margin-left: 60px;
}

.myReviewEntityWrap .option{
    margin-top: 5px;
    color: #666666;
}

.myReviewEntityWrap .content{
    margin: 10px 0 12px 2px;
}

.myReviewEntityWrap .prdtSection{
    padding-bottom: 15px;
    border-bottom: 1px solid #eeeeee;
    margin-bottom: 15px;
}

.myReviewEntityWrap .sm{
    width: 12px;
    height: 12px;
}

.myReviewEntityWrap .like{
    margin-right: 15px;
}

.myReviewEntityWrap .like,.myReviewEntityWrap .unlike, .myReviewEntityWrap .media, .myReviewEntityWrap .photo{
    color:#666666;
    font-size: 12px;
    display: inline-block;
}

.myReviewEntityWrap .photo, .myReviewEntityWrap .media{
    float: right;
}

.myReviewEntityWrap .ico_like{
    position: relative;
    top: 2px;
}

.myReviewEntityWrap .ico_unlike{
    position: relative;
    top: 4px;
}

.myReviewEntityWrap .ico_photo, .myReviewEntityWrap .ico_media{
    position: relative;
    top: 5px;
}

</style>
