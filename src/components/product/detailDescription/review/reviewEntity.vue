<template>
  <div class="reviewEntityWrap" v-if="cat === review.reviewType || cat===0">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full sm"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half sm"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none sm"></span>
    <span class="reviewDeclare">신고하기</span><span class="reviewDelimiter">|</span><span class="reviewDate">{{reviewDate}}</span><span class="reviewWriter">{{review.userId}}</span>
    <div class="reviewBody">
      <div class="reviewContent">{{review.content}}</div>
      </div>
      <div v-if="review.reviewType===1">
      <div v-if="review.productReviewPhotos.length===1" class="photoSection"><img :src="review.productReviewPhotos[0].photoUrl" alt="포토 리뷰 사진"></div>
      <div v-if="review.productReviewPhotos.length>2" class="multiPhotoSection">
        <!-- <span v-for="(p,idx) in review.photo" :key="idx" class="subPhoto"></span> -->
      </div>
      </div>
      <div v-if="review.reviewType===2">
        <div v-if="review.media" class="mediaSection">
          <div id="player_container" class="use-play-1 flowplayer"></div>
        </div>
      </div>
  </div>
</template>

<script>
import 'flowplayer-files/lib/styles/flowplayer.css'
export default {
  mounted () {
    if (this.review.reviewType === 2) { this.getVideoTypePlayer() }
  },
  props: ['review', 'cat'],
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
  },
  methods: {
    getVideoTypePlayer () {
      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      const POSTER = 'http://cdn.shallwe.link/product/0/0/krill_oil_snapshot.jpg'
      const VIDEOSRC = this.review.productReviewPhotos[0].hlsUrl

      console.log(this.$route.params)
      if (this.$route.params.type === '1') {
        // eslint-disable-next-line no-undef
        flowplayer('#player_container', {
          float_on_scroll: true,
          share: {
            link: true,
            facebook: true,
            twitter: false
          },
          type: 'application/x-mpegurl',
          src: VIDEOSRC,
          poster: POSTER,
          token: TOKEN
        })
      } else {
        // eslint-disable-next-line no-undef
        flowplayer('#player_container', {
          float_on_scroll: true,
          share: {
            link: true,
            facebook: true,
            twitter: false
          },
          rewind: true,
          type: 'application/x-mpegurl',
          src: VIDEOSRC,
          poster: POSTER,
          token: TOKEN
        })
      }
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
  margin-top: 10px;
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
