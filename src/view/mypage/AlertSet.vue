<template>
  <div>
  <Bar :val="title" />
  <Alert />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Alert from '@/components/mypage/AlertSet/AlertSet'

export default {
  metaInfo: {
    title: 'Shall We Shop - 알림 설정'
  },
  data () {
    return {
      title: '알림 설정'
    }
  },
  components: {
    Bar, Alert
  }
}
</script>
<style>

</style>
