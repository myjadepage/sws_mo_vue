<template>
  <div class="bgGray">
  <Bar :val="title" />
  <ExchangeRequest @sent="finishModalOpen" />

  <section v-if="modalVisiblity" class="modalBg">
    <FinishModal v-if="finishModal" @close="closeFinish" />
  </section>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeRequest from '@/components/mypage/Exchange/ExchangeReq'
import FinishModal from '@/components/mypage/Exchange/Modal/RequestFinish'

export default {
  metaInfo: {
    title: 'Shall We Shop - 교환 요청'
  },
  data () {
    return {
      title: '교환요청',
      modalVisiblity: false,
      finishModal: false
    }
  },
  components: {
    Bar, ExchangeRequest, FinishModal
  },
  methods: {
    finishModalOpen () {
      this.modalVisiblity = true
      this.finishModal = true
    },
    closeFinish () {
      this.modalVisiblity = false
      this.finishModal = false
      this.$router.push('/BuyHistory')
    }
  }
}
</script>
<style>

</style>
