<template>
<div class="memberWrap">
    <Bar :val="title"></Bar>
    <SearchForm></SearchForm>
</div>
</template>

<script>
import SearchForm from '@/components/member/SearchForm'
import Bar from '@/components/member/Bar'

export default {
  metaInfo: {
    title: 'Shall We Shop - 아이디찾기'
  },
  components: {
    SearchForm,
    Bar
  },
  data () {
    return {
      title: '아이디 찾기'
    }
  }
}
</script>

<style>

</style>
