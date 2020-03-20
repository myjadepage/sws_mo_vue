<template>
<!-- 라이브 방송일 경우 사용하는 상품 페이지 -->
  <div class="productMediaWrap">
    <div class="mainMedia">
      <div id="player_container" class="use-play-1 flowplayer"></div>
    </div>
  </div>
</template>

<script>
import 'flowplayer-files/lib/styles/flowplayer.css'

export default {
  data () {
    return {
    }
  },
  mounted: function () {
    this.getVideoTypePlayer()
  },
  methods: {
    getVideoTypePlayer () {
      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      const POSTER = 'http://cdn.shallwe.link/product/0/0/krill_oil_snapshot.jpg'
      const VIDEOSRC = 'https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/1706171e5dd6ad88/playlist.m3u8'

      // eslint-disable-next-line no-undef
      flowplayer('#player_container', {
        share: {
          link: true,
          facebook: true,
          twitter: false
        },
        type: 'application/x-mpegurl',
        autoplay: true,
        src: VIDEOSRC,
        poster: POSTER,
        token: TOKEN
      })
    }
  }
}
</script>

<style scoped>
.flowplayer {
  position: absolute;
  min-width: 360px;
  height: 100vh;
  z-index: -1;
  top: 0;
  left: 0;
}
#player_container {
    background-size: contain !important;
}
</style>
