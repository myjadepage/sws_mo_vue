<template>
  <div class="productMediaWrap">
    <div class="mainMedia">
      <!-- <div id="player_container"  class="use-drag-handle is-poster use-thin-controlbar use-play-1 flowplayer"></div> -->
      <div id="player_container" class="use-play-1 flowplayer use-thin-controlbar use-drag-handle">
        <button class="toggleFullsize" @click="fullSize" ><span class="ir_pm">전체화면 켜기/끄기</span></button>
      </div>
    </div>

    <!-- <ul class="mediaMenu">
      <li @click="selectMediaMode(0)" class="selected"><div class="dot">·</div>제품뷰티</li>
      <li @click="selectMediaMode(1)"><div class="dot">·</div>언박싱</li>
      <li @click="selectMediaMode(2)"><div class="dot">·</div>설명</li>
      <li @click="selectMediaMode(3)"><div class="dot">·</div>제품특장점</li>
      <li @click="selectMediaMode(4)"><div class="dot">·</div>비교</li>
    </ul> -->
  </div>
</template>

<script>
// import 'flowplayer-files/lib/styles/flowplayer.css'

export default {
  data () {
    return {
      mediaDirection: 0,
      mediaMode: 0,
      item: { },
      mode: 'normal',
      movSize: {
        width: 0,
        height: 0
      }
    }
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
      const POSTER = ''
      const VIDEOSRC = 'https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/1706171e5dd6ad88/playlist.m3u8'
      // const VIDEOSRC = `https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/170c79acc9763aba/playlist.m3u8`

      // eslint-disable-next-line no-undef
      flowplayer('#player_container', {
        float_on_scroll: false,
        share: {
          link: true,
          facebook: true,
          twitter: false
        },
        rewind: true,
        type: 'application/x-mpegurl',
        src: VIDEOSRC,
        poster: POSTER,
        token: TOKEN,
        loop: false,
        preload: 'auto',
        muted: false,
        hls: {startLevel: 0}
      })

      const video = document.getElementById('player_container').querySelector('video')
      video.addEventListener('loadedmetadata', (e) => {
        this.movSize.width = e.srcElement.videoWidth
        this.movSize.height = e.srcElement.videoHeight
        console.log(e.srcElement.videoWidth)
        console.log(e.srcElement.videoHeight)
      })
    },
    fullSize () {
      let vWrap = document.getElementsByClassName('productMediaWrap')[0]
      if (this.mode === 'normal') {
        // 가로영상
        if ((this.movSize.width / this.movSize.height) > 1) {
          $(vWrap).css({
            'transform': 'rotate(-90deg)',
            'top': '100%',
            'width': '100vh',
            'height': '100vw'
          })
        } else {
          // 세로영상
          $(vWrap).css({
            'transform': 'rotate(0)',
            'top': '0',
            'width': '100vw',
            'height': '100vh'
          })
        }
        $(vWrap).css({
          'transform-origin': 'top left',
          'position': 'fixed',
          'left': '0',
          'z-index': '100',
          'padding-top': '0'
        })
        this.mode = 'fullscreen'
      } else if (this.mode === 'fullscreen') {
        $(vWrap).css({
          'transform': 'rotate(0)',
          'transform-origin': 'top left',
          'position': 'static',
          'top': '0',
          'left': '0',
          'width': '100%',
          'height': '0',
          'padding-top': '56.3%'
        })
        this.mode = 'normal'
      }
    }
  }
}
</script>

<style>
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
