<template>
  <div class="wrap">
    <Bar :val="title" />
    <BlockList :pageType="pageType" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import BlockList from '@/components/mypage/AlertSet/BlockList'

export default {
  metaInfo: {
    title: 'Shall We Shop - 쿠폰'
  },
  data () {
    return {
      title: '쿠폰',
      pageType: 'coupon',
      bgFlag: false
    }
  },
  components: {
    Bar, BlockList
  }
}
</script>
<style>

</style>
