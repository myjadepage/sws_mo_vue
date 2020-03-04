<template>
  <div class="trackingDetailWrap">
      <Bar :val="title"/>
      <Order/>
      <Destination/>
      <Payment/>
  </div>
</template>

<script>
import Bar from '@/components/mypage/shared/Bar'
import Order from '@/components/mypage/TrackingDetail/DetailOrder'
import Destination from '@/components/mypage/TrackingDetail/DetailDestination'
import Payment from '@/components/mypage/TrackingDetail/DetailPayment'

export default {
  data () {
    return {
      title: '상세정보'
    }
  },
  components: {
    Bar, Order, Destination, Payment
  }
}
</script>

<style>
.trackingDetailWrap{
    max-width: 360px;
    height: 720px;
    background-color: #f3f3f3;
}
</style>
