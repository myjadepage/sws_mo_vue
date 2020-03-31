<template>
  <div>
    <h2>자주 묻는 질문</h2>
    <div class="searchBox">
      <form action="/CustomerSearch">
        <input type="text" name="search" placeholder="궁금하신 내용을 검색해 보세요" v-model="keyword" />
        <button class="btn_search"><img src="../../assets/img/ico/search@3x.png" alt="검색하기" /></button>
      </form>
    </div>
  </div>

</template>

<script>

export default {
  props: ['keyword'],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
