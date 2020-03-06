<template>
  <div class="member_headbar">
      <h1>{{ val }}</h1>
      <span class="sws_icon icon_close" @click="close"></span>
  </div>
</template>

<script>
export default {
  methods: {
    close: function () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
      /// 클로즈 버튼 클릭시 이벤트 처리 해야함
    }
  },
  props: ['val']
}
</script>
<style>
</style>
