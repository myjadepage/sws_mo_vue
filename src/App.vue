<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  mounted: function () { // flowplayer 스크립트 넣기
    let aa = document.createElement('script')
    aa.setAttribute('src', '/static/js/flowplayer.min.js')
    document.head.appendChild(aa)
    let aaa = document.createElement('script')
    aaa.setAttribute('src', '/static/js/hls.min.js')
    document.head.appendChild(aaa)
    let aaaa = document.createElement('script')
    aaaa.setAttribute('src', '/static/js/float-on-scroll.min.js')
    document.head.appendChild(aaaa)
  }
}
</script>

<style lang="css" src="@/assets/css/common.css"></style>
<style lang="css" src="@/assets/css/swsmo.css"></style>
