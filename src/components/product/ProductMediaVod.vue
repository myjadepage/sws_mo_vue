<template>
<!-- 라이브 방송일 경우 사용하는 상품 페이지 -->
  <div class="productMediaWrap">
    <div class="mainMedia live" :class="{'fullscreen': mode==='fullscreen', 'info': mode==='info'}">
      <div id="player_container" class="use-play-1 flowplayer use-thin-controlbar" ref="player">
        <!-- <div class="ui-custom"> -->
          <button class="toggleFullsize" @click="goDetail" v-if="mode==='fullscreen'"><span class="ir_pm">전체화면 켜기/끄기</span></button>
          <!-- <button class="toggleMute"><span class="ir_pm">음소거 켜기/끄기</span></button> -->
        <!-- </div> -->
        <button class="btn_goBack" @click="goBack"></button>
        <div class="productInfoBox" v-if="mode==='fullscreen'">
          <h1>[{{product.brandName}}] {{product.name}}</h1>
          <div class="bottom">
            <p class="price">
              <span class="sale c_them" v-if="product.discountRate > 0">{{product.discountRate}}%</span>
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
      dummyItem: [
        {
          thumnailUrl: '',
          objectIds: '170c79acc9763aba',
          type: 'live'
        },
        {
          thumnailUrl: '',
          objectIds: '1706171e5dd6ad88',
          type: 'vod'
        },
        {
          thumnailUrl: '',
          objectIds: '170c79acc9763aba',
          type: 'vod'
        }
      ]
    }
  },
  mounted: function () {
    this.broadcastSysId = this.$route.params.broadcastSysId
    this.prdtSysId = this.$route.params.prdtSysId
    getLiveProduct(this.$route.params.broadcastSysId)
      .then(res => {
        console.log(res.data.jsonData.broadcastMedias[0])
        this.getVideoTypePlayer(res.data.jsonData.broadcastMedias[0])
        // $(this.$refs.player).children('video').stop()
        // console.log($(this.$refs.player))
        if (this.mode === 'fullscreen') {
          if ($(this.$refs.player)[0].requestFullscreen) {
            $(this.$refs.player)[0].requestFullscreen()
          } else if ($(this.$refs.player)[0].mozRequestFullScreen) { /* Firefox */
            $(this.$refs.player)[0].mozRequestFullScreen()
          } else if ($(this.$refs.player)[0].webkitRequestFullscreen) { /* Chrome, Safari & Opera */
            $(this.$refs.player)[0].webkitRequestFullscreen()
          } else if ($(this.$refs.player)[0].msRequestFullscreen) { /* IE/Edge */
            $(this.$refs.player)[0].msRequestFullscreen()
          }
        }
      })
      .catch(error => {
        console.log(error)
      })
  },
  methods: {
    getVideoTypePlayer (item, playType) {
      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      const POSTER = item.thumnailUrl
      // const VIDEOSRC = `https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/${item.objectIds}/playlist.m3u8`

      // 테스트용 url
      const VIDEOSRC = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8'

      let vodOpt = {
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
        preload: 'auto'
      }

      // eslint-disable-next-line no-undef
      flowplayer('#player_container', vodOpt)
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
    }
  },
  watch: {
    playedIndex: function () {
      // 페이지 라우팅으로 변경.

      if (this.dummyItem[this.playedIndex].type === 'live') {
        this.$router.push('/Product/' + this.prdtSysId + '/detail/2')
      } else {
        this.$router.push('/Product/' + this.prdtSysId + '/detailVod/2')
      }
      // $(this.$refs.player)[0].find('video').setSrc(`https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/${this.dummyItem[this.playedIndex].objectIds}/playlist.m3u8`).play()
      // $(this.$refs.player)[0].find('video').setSrc('https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8').play()
      // this.getVideoTypePlayer(this.dummyItem[this.playedIndex], 'vod')
    }
  }
}
</script>

<style scoped>

#player_container {
    background-size: contain !important;
}

</style>
