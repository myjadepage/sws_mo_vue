<template>
<div class="calendarBlock" :class="list.length === 0? 'emptyHeight': ''">
    <Bar :val="title" />
    <EmptyBlock :param="emptyMessage" v-if="list.length === 0"  />
    <liveList v-else :mode="mode" :list="list" @recall="getBroadCast" />

</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import liveList from '@/components/Calendar/LiveList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import { getReservateBroadCast } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - Live 시청 예약 내역'
  },
  created () {
    window.scrollTo(0, 0)
    let date = new Date()
    this.today = date.getFullYear() + (String(date.getMonth() + 1).length < 2 ? '0' + (date.getMonth() + 1) : String(date.getMonth() + 1)) + (String(date.getDate()).length < 2 ? '0' + date.getDate() : String(date.getDate()))

    this.getBroadCast()
  },
  methods: {
    getBroadCast () {
      let str = `?startIndex=${this.sIndex}&rowCount=10&startDate=${this.today}`
      getReservateBroadCast(sessionStorage.getItem('accessToken'), str)
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.list = res.data.jsonData.broadcasts
            this.sIndex = res.data.jsonData.startIndex
          } else if (res.data.jsonData.resultCode === '0004') {
            this.list = []
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  data () {
    return {
      title: '시청 예약 내역',
      mode: 'my',
      sIndex: 0,
      today: '',
      list: [],
      emptyMessage: '시청 예약 내역이 없습니다.'
    }
  },
  components: {
    Bar, liveList, EmptyBlock
  }
}
</script>
