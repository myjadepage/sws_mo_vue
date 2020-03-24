<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <ExchangeEmpty :param="title" v-if="products.length === 0"  />
  <ExchangeList v-bind:pageType="pageType" v-if="products.length > 0"  />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'
import ExchangeEmpty from '@/components/mypage/Exchange/ExchangeEmpty'

export default {
  data () {
    return {
      title: '구매 내역',
      pageType: 'history',
      products: [
        'a', 'b'
      ]
    }
  },
  components: {
    Bar, ExchangeList, ExchangeEmpty
  }
}
</script>
<style>

</style>
