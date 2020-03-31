<template>
  <div class="mainPageWrap" :class="listCount === 0? 'emptyHeight': ''">
  <Bar :val="title" />
  <OptionBar />
  <MyInfo />
  <LookUp />
  <PointList @type="typeSwitch" :list="list" :listCount="listCount" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import OptionBar from '@/components/mypage/Main/MyOptionIconBar'
import MyInfo from '@/components/mypage/Main/MyInfo'
import LookUp from '@/components/mypage/Point/PointLookUp'
import PointList from '@/components/mypage/Point/PointList'

export default {
  data () {
    return {
      title: '마이 포인트',
      listCount: 3,
      list: {
        all: {
          count: 3,
          item: []
        },
        save: {
          count: 2,
          item: []
        },
        use: {
          count: 0,
          item: []
        }
      }
    }
  },
  components: {
    Bar, MyInfo, OptionBar, LookUp, PointList
  },
  methods: {
    typeSwitch (typeStr) {
      if (typeStr === 'all') {
        this.listCount = this.listCount
      } else if (typeStr === 'save') {
        this.listCount = this.list.save.count
      } else if (typeStr === 'use') {
        this.listCount = this.list.use.count
      }
    }
  }
}
</script>
<style>

</style>
