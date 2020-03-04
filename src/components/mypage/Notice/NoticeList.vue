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
.noticeListWrap{
  padding: 10px;
  height: 100%;
}

.noticeListWrap:hover{
  background: #F9F9F9;
}

.notice_date{
  font-family: Roboto;
 font-size: 13px;
 color: #666666;
}

.notice_title,.notice_content{
  font-family: "Noto Sans KR";
  font-size: 14px;
}

.noticeListWrap .hidden{
  display: none;
}

</style>
