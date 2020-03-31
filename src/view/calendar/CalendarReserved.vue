<template>
<div class="calendarBlock" :class="list.length === 0? 'emptyHeight': ''">
    <Bar :val="title" />
    <EmptyBlock :param="emptyMessage" v-if="list.length === 0"  />
    <liveList v-else :mode="mode" :list="list" />

</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import liveList from '@/components/Calendar/LiveList'
import EmptyBlock from '@/components/shared/EmptyBlock'

export default {
  data () {
    return {
      title: '시청 예약 내역',
      mode: 'my',
      list: [
        {alarm: true},
        {alarm: true},
        {alarm: false},
        {alarm: false},
        {alarm: true},
        {alarm: true},
        {alarm: true}
      ],
      emptyMessage: '시청 예약 내역이 없습니다.'
    }
  },
  components: {
    Bar, liveList, EmptyBlock
  }
}
</script>
