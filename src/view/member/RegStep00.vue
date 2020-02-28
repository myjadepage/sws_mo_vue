<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <RegisterCheck></RegisterCheck>
  </div>
</template>

<script>
import Bar from '@/components/member/Bar'
import RegisterCheck from '@/components/member/RegisterCheck'
export default {
  components: {
    Bar,
    RegisterCheck
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
