<template>
<!-- 라이브 방송일 경우 사용하는 상품 페이지 -->
  <div class="productMediaWrap" :class="{'fullscreen': mode==='fullscreen', 'info': mode==='info'}">
    <div class="mainMedia live" :class="{'fullscreen': mode==='fullscreen', 'info': mode==='info'}">
      <div id="player_container" class="use-play-1 flowplayer use-thin-controlbar" ref="player">
        <!-- <div class="ui-custom"> -->
          <button class="toggleFullsize" @click="goDetail" v-if="mode === 'fullscreen'"><span class="ir_pm">전체화면 켜기/끄기</span></button>
          <button class="toggleFullsize" @click="toggleFullsize" v-if="mode === 'info'"><span class="ir_pm">전체화면 켜기/끄기</span></button>
          <button class="toggleMute" :class="{'muted':muteState}"  ref="muteBtn"><span class="ir_pm">음소거 켜기/끄기</span></button>
        <!-- </div> -->
        <button class="btn_goBack" @click="goBack" v-if="mode === 'fullscreen'"></button>
        <div class="productInfoBox" v-if="mode === 'fullscreen'" >
          <h1>[{{product.brandName}}] {{product.name}}</h1>
          <div class="bottom">
            <p class="price">
              <span class="sale c_them" v-if="product.discountRate > 0">{{product.discountRate * 100}}%</span>
              <span class="now_price">{{formatNumber(product.price)}}<span>원</span></span>
              <span class="org_price" v-if="product.marketPrice > 0">{{formatNumber(product.marketPrice)}}</span>
            </p>
            <button class="btn_buy btn_them" @click="goDetail">구매하기</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getLiveProduct } from '../../api'

export default {
  props: ['product', 'mode', 'playedIndex'],
  data () {
    return {
      videoType: 'live',
      broadcastSysId: null,
      prdtSysId: null,
      muteState: false,
      movSize: {
        width: 0,
        height: 0
      },
      fullMode: false
    }
  },
  mounted: function () {
    this.broadcastSysId = this.$route.params.broadcastSysId
    this.prdtSysId = this.$route.params.prdtSysId
    getLiveProduct(this.$route.params.broadcastSysId)
      .then(res => {
        this.getVideoTypePlayer(res.data.jsonData.broadcastMedias[0])

        // if (this.mode === 'fullscreen') {
        //   if ($(this.$refs.player)[0].requestFullscreen) {
        //     $(this.$refs.player)[0].requestFullscreen()
        //   } else if ($(this.$refs.player)[0].mozRequestFullScreen) { /* Firefox */
        //     $(this.$refs.player)[0].mozRequestFullScreen()
        //   } else if ($(this.$refs.player)[0].webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        //     $(this.$refs.player)[0].webkitRequestFullscreen()
        //   } else if ($(this.$refs.player)[0].msRequestFullscreen) { /* IE/Edge */
        //     $(this.$refs.player)[0].msRequestFullscreen()
        //   }
        // }
      })
      .catch(error => {
        console.log(error)
        // alert('네트워크 오류입니다.')
        // this.$router.go(-1)
      })
  },
  methods: {
    getVideoTypePlayer (item) {
      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      // const POSTER = item.thumnailUrl
      const POSTER = ''
      // const VIDEOSRC = `https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/${item.objectIds}/playlist.m3u8`
      const VIDEOSRC = 'https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/1706171e5dd6ad88/playlist.m3u8'

      // 실시간 url
      // const VIDEOSRC = 'http://epiens.xst.kinxcdn.com/epiens/1/playlist.m3u8'

      // 테스트용 url
      // const VIDEOSRC = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'
      // const VIDEOSRC = 'http://epiensup1.xst.kinxcdn.com/epiens/test2.m3u8'

      let liveOpt = {
        float_on_scroll: false,
        share: {
          link: true,
          facebook: true,
          twitter: false
        },
        type: 'application/x-mpegurl',
        autoplay: true,
        src: VIDEOSRC,
        poster: POSTER,
        token: TOKEN,
        live: true,
        loop: false,
        preload: 'auto',
        seekable: false,
        muted: false,
        hls: {startLevel: 0}
      }

      let vodOpt = {
        float_on_scroll: false,
        share: {
          link: true,
          facebook: true,
          twitter: false
        },
        rewind: true,
        type: 'application/x-mpegurl',
        autoplay: true,
        src: VIDEOSRC,
        poster: POSTER,
        token: TOKEN,
        loop: false,
        preload: 'auto'
      }

      // eslint-disable-next-line
      let player;
      if (this.videoType === 'live') {
        // eslint-disable-next-line no-undef
        player = flowplayer('#player_container', liveOpt)
      } else if (this.videoType === 'vod') {
        // eslint-disable-next-line no-undef
        player = flowplayer('#player_container', vodOpt)
      }

      this.$refs.muteBtn.addEventListener('click', () => {
        player.toggleMute()
        if (player.muted === true) {
          this.muteState = true
        } else {
          this.muteState = false
        }
      }, false)

      // 비디오 사이즈 체크
      const video = document.getElementById('player_container').querySelector('video')
      video.addEventListener('loadedmetadata', (e) => {
        this.movSize.width = e.srcElement.videoWidth
        this.movSize.height = e.srcElement.videoHeight
        if (this.mode === 'fullscreen') {
          this.toggleFullsize()
        }
      })

      // 비디오 컨트롤 박스 높이 설정 (인포박스 높이에 따라 가변)
      let infoBox
      if (document.querySelector('.productInfoBox')) {
        infoBox = document.querySelector('.productInfoBox')
      }
      const controler = document.querySelector('.fp-controls')
      controler.style.bottom = infoBox.offsetHeight + 'px'
    },
    formatNumber (num) {
      let value = num
      return value.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    goBack () {
      this.$router.go(-1)
    },
    goDetail () {
      this.$router.push('/Product/' + this.prdtSysId + '/detail/' + this.broadcastSysId)
    },
    toggleFullsize () {
      let vWrap = document.getElementsByClassName('productMediaWrap')[0]
      if (this.fullMode) {
        $(vWrap).css({
          'transform': 'rotate(0)',
          'transform-origin': 'top left',
          'position': 'fixed',
          'top': '50px',
          'left': '0',
          'width': '100%',
          'height': '0',
          'padding-top': '56.3%'
        })
        this.fullMode = false
        document.querySelector('html').style.overflow = 'visible'
      } else {
        if ((this.movSize.width / this.movSize.height) > 1) {
          // 가로영상
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
        this.fullMode = true
        window.addEventListener('orientationchange', () => {
          console.log(window.orientation)
          if (window.orientation === 0) {
            // portrait
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
          } else {
            // landscape
            if ((this.movSize.width / this.movSize.height) > 1) {
              // 세로영상
              $(vWrap).css({
                'transform': 'rotate(0)',
                'top': '0',
                'width': '100vw',
                'height': '100vh'
              })
            } else {
              $(vWrap).css({
                'transform': 'rotate(-90deg)',
                'top': '100%',
                'width': '100vh',
                'height': '100vw'
              })
            }
          }
        })
        document.querySelector('html').style.overflow = 'hidden'
        window.addEventListener('scroll', (e) => {
          e.preventDefault()
          e.stopPropagation()
          return false
        })
      }
    }
  },
  destroyed () {
    document.querySelector('html').style.overflow = 'visible'
  }
}
</script>

<style scoped>
body{
  max-width:100% !important;
}
#player_container {
    background-size: contain !important;
}

</style>
