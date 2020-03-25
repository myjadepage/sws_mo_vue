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
