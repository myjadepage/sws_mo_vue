<template>
<div class="memberWrap">
    <Bar :val="title"></Bar>
    <SearchFormPwSet></SearchFormPwSet>
</div>
</template>

<script>
import SearchFormPwSet from '@/components/member/SearchFormPwSet'
import Bar from '@/components/member/Bar'

export default {
  metaInfo: {
    title: 'Shall We Shop - 비밀번호찾기'
  },
  components: {
    SearchFormPwSet,
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
