<template>
  <div :class="[products.length > 0 ? 'bgGray' : 'exchange' ]">
  <Bar :val="title" />
  <EmptyBlock :param="emptyMessage" v-if="products.length === 0"  />
  <ExchangeList v-bind:pageType="pageType" v-if="products.length > 0"  />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ExchangeList from '@/components/mypage/Exchange/ExchangeDetailList'
import EmptyBlock from '@/components/shared/EmptyBlock'

export default {
  metaInfo: {
    title: 'Shall We Shop - 취소/교환/반품'
  },
  data () {
    return {
      title: '취소/교환/반품',
      emptyMessage: '취소/교환/반품이 없습니다',
      pageType: 'exchange',
      products: [
        'a', 'b'
      ]
    }
  },
  components: {
    Bar, ExchangeList, EmptyBlock
  }
}
</script>
<style>

</style>
