<template>
  <div>
  <Bar :val="title" />
  <BlackListComp class="setting" />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import BlackListComp from '@/components/mypage/Setting/BlackList'

export default {
  metaInfo: {
    title: 'Shall We Shop - 차단목록'
  },
  name: 'BlackListPage',
  data () {
    return {
      title: '차단목록'
    }
  },
  components: {
    Bar, BlackListComp
  }
}
</script>
<style>

</style>
