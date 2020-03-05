<template>
<div class="trackingWrap">
<Bar :val="title"/>
<Status :mode="orderMode" />
<Orders :mode="orderMode" />
<Orders :mode="orderMode" />
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
      orderMode: 0
    }
  },
  components: {
    Bar, Status, Orders
  }

}
</script>

<style>

</style>
