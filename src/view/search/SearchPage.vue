<template>
  <div class="searchPageWrap">
    <div v-if="copyModalShow" class="darkFilter"></div>
      <SearchHeader :cat="cat" @clickSearch="search"  @inputOutFoucsed="isInputFocus=false" @inputFoucsed="isInputFocus=true" />
      <SearchCategory :cat="cat" @catChange="catChange" v-if="!isInputFocus" />
      <div v-if="!isInputFocus&&cat===0">
        <SearchProduct  v-for="(r,idx) in searchResults" :key="idx" :product="r" />
      </div>
      <div v-if="!isInputFocus&&cat===1">
        <SearchBrand  v-for="(r,idx) in searchResults" :key="idx" :brand="r" />
      </div>
      <div v-if="!isInputFocus&&cat===2">
        <SearchBroadcast @copy="copy"  v-for="(r,idx) in searchResults" :key="idx" :broadcast="r" />
      </div>
      <p class="emptyBox" v-if="searchResults.length === 0">검색 결과가 없습니다.</p>
      <CopyModal @btnClick="copyModalShow = false" v-if="copyModalShow" :url="copiedUrl"  />
  </div>
</template>

<script>
import SearchHeader from '@/components/search/SearchHeader'
import SearchCategory from '@/components/search/SearchCategory'
import SearchProduct from '@/components/search/SearchProduct'
import SearchBrand from '@/components/search/SearchBrand'
import SearchBroadcast from '@/components/search/SearchBroadcast'
import CopyModal from '@/components/search/Modal/CopyModal'

export default {
  components: {
    SearchHeader, SearchCategory, SearchProduct, SearchBrand, SearchBroadcast, CopyModal
  },
  data () {
    return {
      isInputFocus: false,
      searchResults: [],
      cat: 0,
      copyModalShow: false,
      copiedUrl: ''
    }
  },
  watch: {
    cat () {
      this.searchResults = []
    }
  },
  methods: {
    search (p) {
      this.searchResults = p
    },
    catChange (x) {
      this.cat = x
    },
    copy (url) {
      this.copiedUrl = url
      this.copyModalShow = true
    }
  }
}
</script>

<style>
  .searchPageWrap{
    background-color: #f3f3f3;
    min-height: 640px;
    height: 100%;
  }

  .searchPageWrap .darkFilter{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  }

  .emptyBox{
    margin-top:80px;
    text-align: center;
    color:#666;
  }
</style>
