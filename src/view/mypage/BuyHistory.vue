<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <EmptyBlock :param="emptyMessage" v-if="products.length === 0"  />
  <ExchangeList v-bind:pageType="pageType" v-if="products.length > 0" @exchangeReqOpen="exchangeReqOpen"  />

  <section v-if="modalVisiblity" class="modalBg">
    <ExchangeInfo v-if="exchangeRequest" @closeRequest="closeRequest" />
  </section>

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import ExchangeInfo from '@/components/mypage/Exchange/Modal/ExchangeRequest'

export default {
  data () {
    return {
      title: '구매 내역',
      pageType: 'history',
      emptyMessage: '구매 내역이 없습니다.',
      products: [
        'a', 'b'
      ],
      modalVisiblity: false,
      exchangeRequest: false
    }
  },
  components: {
    Bar, ExchangeList, EmptyBlock, ExchangeInfo
  },
  methods: {
    closeRequest () {
      this.modalVisiblity = false
      this.exchangeRequest = false
    },
    exchangeReqOpen () {
      this.modalVisiblity = true
      this.exchangeRequest = true
    }
  }
}
</script>
<style>

</style>
