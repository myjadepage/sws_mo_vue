<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <RegisterCheckNaver></RegisterCheckNaver>
  </div>
</template>

<script>
import Bar from '@/components/member/Bar'
import RegisterCheckNaver from '@/components/member/RegisterCheckNaver'
export default {
  components: {
    Bar,
    RegisterCheckNaver
  },
  data () {
    return {
      title: '회원가입'
    }
  }
}
</script>

<style>

</style>
