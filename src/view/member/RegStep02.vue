<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import Bar from '@/components/member/Bar'
import RegisterForm from '@/components/member/RegisterForm'
export default {
  components: {
    Bar,
    RegisterForm
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
