<template>
  <div class="trackingDetailWrap">
      <Bar :val="title"/>
      <Order/>
      <Destination/>
      <Payment/>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Order from '@/components/mypage/TrackingDetail/DetailOrder'
import Destination from '@/components/mypage/TrackingDetail/DetailDestination'
import Payment from '@/components/mypage/TrackingDetail/DetailPayment'

export default {
  metaInfo: {
    title: 'Shall We Shop - 배송조회 상세정보'
  },
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

</style>
