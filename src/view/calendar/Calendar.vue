<template>
<div class="calendarBlock" :class="list.length === 0? 'emptyHeight': ''">
    <Header />
    <datePicker />
    <EmptyBlock :param="emptyMessage" v-if="list.length === 0"  />
    <liveList v-else :mode="mode" :list="list" />
    <liveFloatingBtn />
</div>
</template>

<script>
import Header from '@/components/shared/Header'
import datePicker from '@/components/Calendar/DatePicker'
import liveList from '@/components/Calendar/LiveList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import liveFloatingBtn from '@/components/Calendar/LiveFloatingBtn'
import {getBroadcastSchedules} from '@/api/index.js'

export default {
  data () {
    return {
      mode: 'all',
      list: [
        {alarm: true},
        {alarm: false},
        {alarm: true}
      ],
      emptyMessage: '오늘 등록된 편성표가 없습니다.'
    }
  },
  components: {
    Header, datePicker, liveList, liveFloatingBtn, EmptyBlock
  },
  created () {
    window.scrollTo(0, 0)
    // getBroadcastSchedules()
  }
}
</script>
