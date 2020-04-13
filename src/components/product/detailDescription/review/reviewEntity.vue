<template>
  <div class="reviewEntityWrap">
      <ReviewInfo :review="review"/>
      <div class="reviewBody">
        <p class="reviewContent"><router-link :to="'/ReviewDetail/' + $route.params.prdtSysId +'/' + review.prdtReviewSysId">{{printText}}</router-link></p>
      </div>
      <div class="photoBox" v-if="review.reviewType===1">
        <img class="singlePic" v-if="review.productReviewPhotos.length === 1" :src="review.productReviewPhotos[0].photoUrl" alt="" />
        <div v-if="limitLength > 1" class="photoSection" :style="{width:(limitLength * 76) + ((limitLength - 1) * 10) + 'px'}">
          <router-link :to="'/ReviewDetail/' + $route.params.prdtSysId +'/' + review.prdtReviewSysId" class="imgBox" v-for="(photo, pIndex) in photoLength" :key="review.prdtReviewSysId + '_Pic_' + pIndex" :style="{backgroundImage:'url('+ photo.photoUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}" :class="{'moreBtn':pIndex === 3}" ></router-link>
        </div>
      </div>
      <div v-if="review.reviewType===2">
        <div v-if="review.productReviewMedias" class="mediaSection">
          <div :id="'player_container_' + review.productReviewMedias[0].prdtReviewMediaSysId" class="use-play-1 flowplayer" ></div>
        </div>
      </div>
  </div>
</template>

<script>
import 'flowplayer-files/lib/styles/flowplayer.css'
import ReviewInfo from '@/components/product/detailDescription/review/InfoBar'
import { getProductReview } from '@/api/index.js'

export default {
  props: ['review', 'type'],
  components: {
    ReviewInfo
  },
  mounted () {
    if (this.review.reviewType === 2) { this.getVideoTypePlayer() }
  },
  computed: {
    reviewDate () {
      let date = this.review.createdAt.replace(this.review.createdAt.substr(8, this.review.createdAt.length), '').split('')
      date.splice(4, 0, '.')
      date.splice(7, 0, '.')
      return date.join('')
    },
    photoLength () {
      let photos = []
      if (this.review.productReviewPhotos.length > 4) {
        for (let i = 0; i < 4; i++) {
          photos.push(this.review.productReviewPhotos[i])
        }
        return photos
      } else {
        return this.review.productReviewPhotos
      }
    },
    limitLength () {
      if (this.review.productReviewPhotos.length > 4) {
        return 4
      } else {
        return this.review.productReviewPhotos.length
      }
    },
    printText () {
      if (this.review.oneLine) {
        return this.review.oneLine
      } else if (this.review.content) {
        return this.review.content
      }
    }
  },
  methods: {
    getVideoTypePlayer () {
      // 임시
      // getProductReview(this.$route.params.prdtSysId, this.review.prdtReviewSysId)
      //   .then(res => {
      //     console.log(res)
      //   })

      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      // 임시
      const POSTER = 'http://cdn.shallwe.link/product/0/0/krill_oil_snapshot.jpg'
      // const VIDEOSRC = this.review.productReviewMedias[0].hlsUrl
      const VIDEOSRC = `https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/1706171e5dd6ad88/playlist.m3u8`

      // console.log(this.$route.params)

      // eslint-disable-next-line no-undef
      flowplayer('#player_container_' + this.review.productReviewMedias[0].prdtReviewMediaSysId, {
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
    }
  }
}
</script>

<style>
.reviewEntityWrap{
  overflow: hidden;
  border-top: 1px solid #eeeeee;
  padding: 13px 12px 15px;
}
.reviewEntityWrap.dpNone{
  display:none;
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
  margin-right: 5px;
}

.reviewEntityWrap .reviewDelimiter{
  font-size: 7px;
  font-weight: 500;
  line-height: 19px;
}
.reviewEntityWrap .singlePic{
  width:100%;
  margin-top:10px;
}
.reviewEntityWrap .photoBox{
  overflow-x: auto;
  width:100%;
  margin-top:10px;
  font-size:0;
}
.reviewEntityWrap .photoBox .imgBox{
  position:relative;
  display:inline-block;
  width:76px;
  height:76px;
  margin-left:10px;
  vertical-align: middle;
}
.reviewEntityWrap .photoBox .imgBox:first-child{
  margin-left:0;
}
.reviewEntityWrap .photoBox .imgBox.moreBtn:before{
  content:'더보기';
  position:absolute;
  left:0;
  top:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.5);
  color:#fff;
  font-size:13px;
  text-align:center;
  line-height:76px;
}

.reviewEntityWrap .subPhoto{
  display: inline-block;
  margin: 10px 10px 15px 0;
  width: 74px;
  height: 55px;
  background-color: #ebd1c4;
}

.reviewEntityWrap .mediaSection{
  position:relative;
  display: inline-block;
  width: 100%;
  margin-top:10px;
  padding-top: 56.26%;
  background-color: gray;
}
.reviewEntityWrap .mediaSection .flowplayer{
  position:absolute;
  top:0;
  left:0;
  right:0;
  bottom:0;
}

.reviewEntityWrap .reviewBody{
  margin-top:10px;
}
</style>
