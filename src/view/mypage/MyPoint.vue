<template>
  <div class="mainPageWrap emptyHeight" >
  <Bar :val="title" />
  <LookUp @sendDate="setDate" />
  <PointList :lists="lists" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import LookUp from '@/components/mypage/Point/PointLookUp'
import PointList from '@/components/mypage/Point/PointList'
import { getPointInfo } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 마이포인트'
  },
  data () {
    return {
      title: '마이 포인트',
      todayStr: '',
      startDateStr: '',
      baskets: [],
      lists: []
    }
  },
  components: {
    Bar, LookUp, PointList
  },
  methods: {
    setDate (today, startDate) {
      this.todayStr = today.replace(/\./gi, '')
      this.startDateStr = startDate.replace(/\./gi, '')

      getPointInfo(sessionStorage.getItem('accessToken'), this.todayStr, this.startDateStr, 0)
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.lists = res.data.jsonData.pointHists
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
<style>

</style>
