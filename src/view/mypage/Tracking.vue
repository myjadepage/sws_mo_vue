<template>
<div class="trackingWrap">
<Bar :val="title"/>
<Status :mode="orderMode" />
<div v-if="orderMode===0" class="orderSection">
<Orders v-for="t in data[0]" :key="t" :mode="orderMode" />
</div>
<div v-if="orderMode===1" class="orderSection">
<Orders v-for="t in data[1]" :key="t" :mode="orderMode" />
</div>
<div v-if="orderMode===2" class="orderSection">
<Orders v-for="t in data[2]" :key="t" :mode="orderMode" />
</div>
<div v-if="orderMode===3" class="orderSection">
<Orders v-for="t in data[3]" :key="t" :mode="orderMode" />
</div>
</div>
</template>

<script>
import Bar from '@/components/mypage/shared/Bar'
import Status from '@/components/mypage/Tracking/TrackingStatus'
import Orders from '@/components/mypage/Tracking/TrackingOrder'

export default {
  data () {
    return {
      title: '배송조회',
      orderMode: 0,
      data: [5, 2, 2, 35]
    }
  },
  components: {
    Bar, Status, Orders
  }

}
</script>

<style>

</style>
