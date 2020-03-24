<template>
  <div class="versionBox">
    <img src="../../../assets/img/sws-bi-black@3x.png" alt="SWS 로고"  class="logo"/>

    <p class="btn_them border gray">현재버전 {{version.now}}</p>
    <a href="" class="btn_them border update" v-if="version.new > version.now">최신버전 {{version.new}} 업데이트</a>
    <p v-else>최신 버전입니다.</p>

  </div>
</template>

<script>
export default {
  data () {
    return {
      version: {
        now: 3.2,
        new: 3.3
      }
    }
  }
}
</script>

<style>

</style>
