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
  metaInfo: {
    title: 'Shall We Shop - 회원정보수정'
  },
  data () {
    return {
      title: '회원정보수정'
    }
  },
  components: {
    Bar, Modify
  }
}
</script>
<style>

</style>
