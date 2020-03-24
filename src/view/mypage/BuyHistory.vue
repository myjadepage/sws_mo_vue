<template>
  <div class="bgGray">
  <Bar :val="title" />
  <ExchangeList v-bind:pageType="pageType" />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'

export default {
  data () {
    return {
      title: '구매 내역',
      pageType: 'history'
    }
  },
  components: {
    Bar, ExchangeList
  }
}
</script>
<style>

</style>
