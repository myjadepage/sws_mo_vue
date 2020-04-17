<template>
<div class="memberWrap">
  <Bar :val="title"></Bar>
  <LoginForm></LoginForm>
</div>
</template>

<script>
import LoginForm from '@/components/member/LoginForm'
import Bar from '@/components/member/Bar'
export default {
  metaInfo: {
    title: 'Shall We Shop - 로그인'
  },
  name: 'Login',
  components: {
    LoginForm,
    Bar
  },
  data () {
    return {
      title: ' '
    }
  }
}
</script>

<style>

</style>
