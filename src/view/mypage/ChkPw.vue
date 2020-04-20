<template>
  <div>
  <Bar :val="title" />
  <ChkPw />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ChkPw from '@/components/mypage/ChkPw/ChkPw'

export default {
  metaInfo: {
    title: 'Shall We Shop - 비밀번호 재확인'
  },
  data () {
    return {
      title: '비밀번호 재확인'
    }
  },
  components: {
    Bar, ChkPw
  }
}
</script>
<style>

</style>
