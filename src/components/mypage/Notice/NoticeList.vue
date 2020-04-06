<template>
  <div class="noticeListWrap" @click="dropDownNotice">
      <div class="notice_date">{{dateFormat(notice.createdAt)}}</div>
      <div class="notice_title">{{notice.title}}</div>
      <div ref="content" class="notice_content hidden" v-html="notice.content"></div>
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
    },
    dateFormat (date) {
      return date.substr(0, 4) + '.' + date.substr(4, 2) + '.' + date.substr(6, 2)
    }
  }
}
</script>

<style>

</style>
