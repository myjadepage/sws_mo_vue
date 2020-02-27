<template>
  <div class="member_headbar">
      <h1>{{ val }}</h1>
      <span class="sws_icon icon_close" v:click="close"></span>
  </div>
</template>

<script>
export default {
  methods: {
    close: function () {
      history.back()/// 클로즈 버튼 클릭시 이벤트 처리 해야함
    }
  },
  props: ['val']
}
</script>

<style>

</style>
