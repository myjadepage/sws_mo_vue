<template>
  <div class="noticeWrap">
      <Bar :val="title" />
      <hr>
      <ul>
          <li v-for="notice in noticeList" :key="notice.idx"><NoticeList :notice="notice" /><hr id="listHr"></li>
      </ul>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import NoticeList from '@/components/mypage/Notice/NoticeList'
import { getNoticeList } from '@/api/index.js'

export default {
  created () {
    getNoticeList(this.startIndex, 10)
      .then(res => {
        // console.log(res)
        this.noticeList = [...res.data.jsonData.notices]
        this.startIndex = res.data.jsonData.startIndex
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      title: '공지사항',
      startIndex: 0,
      noticeList: []
    }
  },
  components: {
    Bar, NoticeList
  }
}
</script>

<style>

</style>
