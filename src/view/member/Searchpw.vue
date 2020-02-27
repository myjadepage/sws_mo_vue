<template>
<div class="memberWrap">
    <Bar :val="title"></Bar>
    <SearchFormPw></SearchFormPw>
</div>
</template>

<script>
import SearchFormPw from '@/components/member/SearchFormPw'
import Bar from '@/components/member/Bar'

export default {
  components: {
    SearchFormPw,
    Bar
  },
  data () {
    return {
      title: '비밀번호 찾기'
    }
  }
}
</script>

<style>

</style>
