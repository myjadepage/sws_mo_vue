<template>
  <div class="productMediaWrap">
    <div :style="mediaSize" class="mainMedia">
      <!-- <div id="player_container"  class="use-drag-handle is-poster use-thin-controlbar use-play-1 flowplayer"></div> -->
      <div id="player_container" class="use-play-1 flowplayer"></div>
      <div class="layer-player">
          <!-- 하단 구매영역 -->
          <!-- <div class="buy-wrap">
              <h2 class="title">
                  [클리오] 킬커버 광채쿠션 타마누 카밍 세럼 (50ml)
              </h2>
              <p class="price-title">
                  <span>
                      <strong>25% <em>32,500</em></strong>
                      <del>132,500</del>
                  </span>
                  <button type="button" class="btn btn-sm btn-main">구매하기</button>
              </p>
          </div> -->
          <!-- <div class="thumbs">
              <span data-video="http://cache.midibus.kinxcdn.com/name/ch_1648a4c9/16b0d38f948f6a8c_original.mp4">
                <img src="https://flowplayer.com/demos/images/agency/2-thumb.jpeg">
                <p class="thumb-title">제품뷰티</p>
              </span>
              <span data-video="http://cache.midibus.kinxcdn.com/name/ch_1648a4c9/16b0d38f948f6a8c_original.mp4">
                <img src="https://flowplayer.com/demos/images/agency/6-thumb.jpeg">
                <p class="thumb-title">언박싱</p>
              </span>
              <span data-video="http://cache.midibus.kinxcdn.com/name/ch_1648a4c9/16b0d38f948f6a8c_original.mp4">
                <img src="https://flowplayer.com/demos/images/agency/5-thumb.jpeg">
                <p class="thumb-title">설명</p>
              </span>
              <span data-video="http://cache.midibus.kinxcdn.com/name/ch_1648a4c9/16b0d38f948f6a8c_original.mp4">
                <img src="https://flowplayer.com/demos/images/agency/3-thumb.jpeg">
                <p class="thumb-title">제품특장점</p>
              </span>
              <span data-video="http://cache.midibus.kinxcdn.com/name/ch_1648a4c9/16b0d38f948f6a8c_original.mp4">
                <img src="https://flowplayer.com/demos/images/agency/6-thumb.jpeg">
                <p class="thumb-title">비교</p>
              </span>
          </div> -->
        </div>
    </div>

    <ul class="mediaMenu">
      <li @click="selectMediaMode(0)" class="selected"><div class="dot">·</div>제품뷰티</li>
      <li @click="selectMediaMode(1)"><div class="dot">·</div>언박싱</li>
      <li @click="selectMediaMode(2)"><div class="dot">·</div>설명</li>
      <li @click="selectMediaMode(3)"><div class="dot">·</div>제품특장점</li>
      <li @click="selectMediaMode(4)"><div class="dot">·</div>비교</li>
    </ul>
  </div>
</template>

<script>
// import $ from 'jquery'
import 'flowplayer-files/lib/styles/flowplayer.css'
// import flowplayer from 'flowplayer-files'
import { eventBus } from '../slide/EventBus'

export default {
  data () {
    return {
      mediaDirection: 0,
      mediaMode: 0,
      item: {}
    }
  },
  created: function () {
    eventBus.$on('item', function (value) {
      console.log('item', value)
    })
  },
  mounted: function () {
    this.getVideoTypePlayer()
  },
  computed: {
    mediaSize () {
      // return this.mediaDirection === 0 ? 'padding-top:56.25%;' : 'padding-top:177.78%;'
      return this.mediaDirection === 0 ? 'height:100%;' : 'height:40px;'
    }
  },
  methods: {
    getVideoTypePlayer () {
      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      const POSTER = 'http://cdn.shallwe.link/product/0/0/krill_oil_snapshot.jpg'
      const VIDEOSRC = 'https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/1706171e5dd6ad88/playlist.m3u8'

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
          seekable: false,
          type: 'application/x-mpegurl',
          src: VIDEOSRC,
          poster: POSTER,
          token: TOKEN
        })
      }
    },
    selectMediaMode (x) {
      this.$el.getElementsByTagName('li')[this.mediaMode].className = ''
      this.mediaMode = x
      this.$el.getElementsByTagName('li')[this.mediaMode].className = 'selected'
    }
  }
}
</script>

<style>
/* // 플레이어 설정 */
#id>#flowplayer-floating-container {
  height: 0;
  left: 65%;
}
/* .flowplayer {
  height: 100%;
} */

.productMediaWrap .mainMedia{
   background-color: gray;
}

.productMediaWrap .mediaMenu{
  text-align: center;
  height: 40px;
}

.productMediaWrap .mediaMenu li{
  text-align: center;
  width: 20%;
  float: left;
  background-color: black;
  height: 40px;
  color: white;
  cursor: pointer;
  /* line-height: 45px; */
}

.mediaMenu{
  width: 100%;
  height: 40px;
  /* user-select: none; */
}

.mediaMenu th,.mediaMenu td{
  background-color: black;
  width: 20%;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  color: white;
}

.mediaMenu th{
  font-size: 20pt;
  line-height: 1px;
}

.productMediaWrap .mediaMenu .selected{
  font-weight: 500;
  color: #e61754;
}

.productMediaWrap .dot{
  line-height:20px;
  font-size: 25px;
  font-weight:bold;
  height: 10px;
  margin-bottom: 5px;
  visibility: hidden;
}

.productMediaWrap .selected .dot{
  visibility: visible;
}
</style>
