<template>
  <div class="searchHeaderWrap">
      <span @click="goBack" class="ico_back_arr"></span>
      <input type="text" placeholder="검색어를 입력해주세요.">
      <span class="ico_search_btn"></span>
  </div>
</template>

<script>

export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
.searchHeaderWrap{
    height: 65px;
    line-height: 65px;
    padding: 0 22px 0 16px;
    border-bottom: 1px solid black;
}

.searchHeaderWrap .ico_back_arr{
    position: relative;
    top: 25px;
}

.searchHeaderWrap input{
    all: unset;
    margin-left: 10px;
    font-size: 15px;
    width: 80%;
    display: inline-block;
}

.searchHeaderWrap input::placeholder{
    color: #cccccc;
}

.searchHeaderWrap .ico_search_btn{
    position: relative;
    float: right;
    background: url('../../assets/img/ico/search@3x.png');
    background-size: 100%;
    width: 21px;
    height: 16px;
    top: 25px;
}
</style>
