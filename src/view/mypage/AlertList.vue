<template>
  <div class="wrap">
    <Bar :val="title" />
    <blockList :pageType="pageType" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import blockList from '@/components/mypage/AlertSet/BlockList'

export default {
  metaInfo: {
    title: 'Shall We Shop - 알림'
  },
  data () {
    return {
      title: '알림',
      pageType: 'alert',
      bgFlag: false
    }
  },
  components: {
    Bar, blockList
  }
}
</script>
<style>

</style>
