<template>
  <div>
  <Bar :val="title" />
  <VersionChk />

  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import VersionChk from '@/components/mypage/VersionChk/VersionChk'

export default {
  data () {
    return {
      title: '버전 정보'
    }
  },
  components: {
    Bar, VersionChk
  }
}
</script>
<style>

</style>
