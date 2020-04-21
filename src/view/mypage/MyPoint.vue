<template>
  <div class="mainPageWrap" >
  <Bar :val="title" />
  <LookUp />
  <PointList :lists="lists" :treatFlag="treatFlag" @tab="tab" />

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
      startIndex: 0,
      treatFlag: 0,
      lists: []
    }
  },
  components: {
    Bar, LookUp, PointList
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let str = `?startIndex=${this.startIndex}&treatFlag=${this.treatFlag}`
      getPointInfo(sessionStorage.getItem('accessToken'), str)
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.lists = res.data.jsonData.pointHists
            this.startIndex = res.data.jsonData.startIndex
          } else if (res.data.jsonData.resultCode === '0004') {
            this.lists = []
            this.startIndex = 0
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
    tab (num) {
      this.treatFlag = num
    }
  },
  watch: {
    treatFlag: {
      handler () {
        this.startIndex = 0
        this.getList()
      }
    }
  }
}
</script>
<style>

</style>
