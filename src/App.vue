<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'App',
  computed: {
    ...mapState(['isLogin'])
  },
  mounted: function () { // flowplayer 스크립트 넣기
    const flowplayer = document.createElement('script')
    flowplayer.setAttribute('src', '/static/js/flowplayer.min.js')
    document.head.appendChild(flowplayer)
    const hls = document.createElement('script')
    hls.setAttribute('src', '/static/js/hls.min.js')
    document.head.appendChild(hls)
    const scroll = document.createElement('script')
    scroll.setAttribute('src', '/static/js/float-on-scroll.min.js')
    document.head.appendChild(scroll)
  }
}
</script>

<style lang="css" src="@/assets/css/common.css"></style>
<style lang="css" src="@/assets/css/swsmo.css"></style>
