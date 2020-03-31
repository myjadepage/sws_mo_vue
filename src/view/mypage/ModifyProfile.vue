<template>
  <div class="mainPageWrap">
  <Bar :val="title" />
  <Modify />
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Modify from '@/components/mypage/Modify/Profile'

export default {
  data () {
    return {
      title: '내 정보 관리'
    }
  },
  components: {
    Bar, Modify
  }
}
</script>
<style>

</style>
