<template>
  <div>
    <h2>자주 묻는 질문</h2>
    <div class="searchBox">
      <form action="/CustomerSearch">
        <input type="text" name="search" placeholder="궁금하신 내용을 검색해 보세요" v-model="keyIpt" @keyup.enter="goSearch($event)" />
        <button class="btn_search" @click="goSearch($event)"><img src="../../assets/img/ico/search@3x.png" alt="검색하기" /></button>
      </form>
    </div>
  </div>

</template>

<script>

export default {
  props: ['keyword'],
  data () {
    return {
      keyIpt: this.keyword
    }
  },
  methods: {
    goSearch (e) {
      e.preventDefault()
      this.$emit('search', this.keyIpt)
    }
  }
}
</script>

<style>

</style>
