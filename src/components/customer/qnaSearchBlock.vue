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
      let spc = /[~!@#$%^&*()_+|<>?:{}]/
      let space = /[\s]/g
      if (spc.test(this.keyIpt)) {
        alert('특수문자를 입력 할 수 없습니다.')
      } else if (space.test(this.keyIpt) || this.keyIpt === '') {
        alert('검색어를 입력해 주세요.')
      } else {
        this.$emit('search', this.keyIpt)
      }
      e.preventDefault()
    }
  }
}
</script>

<style>

</style>
