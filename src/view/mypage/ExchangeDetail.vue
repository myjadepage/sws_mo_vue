<template>
  <div class="bgGray">
    <Bar :val="title" />
    <DetailItem />
    <!-- <DeliveryComponent /> -->
    <!-- <PaymentComponent /> -->
    <PaymentDetailComponent />
    <div class="fNotiBox">
      <p>* 결제수단에 따라 결제취소(입금)까지 약 1일~2주가 소요될 수 있습니다.</p>
    </div>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import DetailItem from '@/components/mypage/Exchange/DetailItem'
import DeliveryComponent from '@/components/mypage/Exchange/DeliveryComponent'
import PaymentComponent from '@/components/mypage/Exchange/PaymentComponent'
import PaymentDetailComponent from '@/components/mypage/Exchange/PaymentDetailComponent'

export default {
  metaInfo: {
    title: 'Shall We Shop - 상세정보'
  },
  data () {
    return {
      title: '상세정보'
    }
  },
  components: {
    Bar, DetailItem, DeliveryComponent, PaymentComponent, PaymentDetailComponent
  }
}
</script>
<style>

</style>
