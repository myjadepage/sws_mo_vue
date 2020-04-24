<template>
  <div class="memberWrap">
    <Bar :val="title"></Bar>
      <RegisterPhone></RegisterPhone>
  </div>
</template>

<script>
import Bar from '@/components/member/Bar'
import RegisterPhone from '@/components/member/RegisterPhoneSns'
export default {
  metaInfo: {
    title: 'Shall We Shop - 회원가입'
  },
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
