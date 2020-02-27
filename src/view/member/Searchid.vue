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
