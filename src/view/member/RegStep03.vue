<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <RegisterPhone></RegisterPhone>
  </div>
</template>

<script>
import Bar from '@/components/member/Bar'
import RegisterPhone from '@/components/member/RegisterPhone'
export default {
  components: {
    Bar,
    RegisterPhone
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
