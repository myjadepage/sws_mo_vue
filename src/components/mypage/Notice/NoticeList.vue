<template>
  <div class="noticeListWrap" @click="dropDownNotice">
      <div class="notice_date">{{notice.date}}</div>
      <div class="notice_title">{{notice.title}}</div>
      <div ref="content" class="notice_content hidden"> <br>{{notice.content}}</div>
  </div>
</template>

<script>
export default {
  props: ['notice'],
  methods: {
    dropDownNotice () {
      if (this.$refs.content.className.includes('hidden')) {
        this.$refs.content.className = this.$refs.content.className.replace('hidden', '')
      } else {
        this.$refs.content.className += 'hidden'
      }
    }
  }
}
</script>

<style>

</style>
