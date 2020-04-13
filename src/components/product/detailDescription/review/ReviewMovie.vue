<template>
  <div id="player_container">
  </div>
</template>

<script>

export default {
  props: ['review'],
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    getVideoTypePlayer () {
      const TOKEN = 'eyJraWQiOiJYZWhNQUszd2JGSHAiLCJ0eXAiOiJKV1QiLCJhbGciOiJFUzI1NiJ9.eyJjIjoie1wiYWNsXCI6NCxcImlkXCI6XCJYZWhNQUszd2JGSHBcIn0iLCJpc3MiOiJGbG93cGxheWVyIn0.kiejCp7cRQqdfbz_TOMiXirRIuu0MCNWnAHjGmR3M7RuhiTp3qFxohwzImU9hVXbrJdaVDo_wwkHQbxeJ23t-A'
      const POSTER = 'http://cdn.shallwe.link/product/0/0/krill_oil_snapshot.jpg'
      const VIDEOSRC = 'https://hls.midibus.kinxcdn.com/hls/ch_16fc4988/1706171e5dd6ad88/playlist.m3u8'

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
        preload: 'auto'
      })
    }
  }
}
</script>
