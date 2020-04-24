<template>
  <div>
  <Bar :val="title" :exit="true" />
  <ChangePw />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ChangePw from '@/components/mypage/ChangePw/ChangePw'

export default {
  metaInfo: {
    title: 'Shall We Shop - 비밀번호 변경'
  },
  data () {
    return {
      title: '비밀번호 변경'
    }
  },
  components: {
    Bar, ChangePw
  }
}
</script>
<style>

</style>
