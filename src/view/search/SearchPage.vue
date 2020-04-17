<template>
  <div class="searchPageWrap">
      <SearchHeader :cat="cat" @clickSearch="search"  @inputOutFoucsed="isInputFocus=false" @inputFoucsed="isInputFocus=true" />
      <SearchCategory @catChange="catChange" :cat="cat" v-if="!isInputFocus" />
      <div v-if="!isInputFocus&&cat===0">
        <SearchProduct  v-for="(r,idx) in searchResults" :key="idx" :product="r" />
      </div>
      <div v-if="!isInputFocus&&cat===1">
        <SearchBrand  v-for="(r,idx) in searchResults" :key="idx" :brand="r" />
      </div>
      <div v-if="!isInputFocus&&cat===2">
        <SearchBroadcast  v-for="(r,idx) in searchResults" :key="idx" :broadcast="r" />
      </div>
      <p class="emptyBox" v-if="searchResults.length === 0">검색 결과가 없습니다.</p>
  </div>
</template>

<script>
import SearchHeader from '@/components/search/SearchHeader'
import SearchCategory from '@/components/search/SearchCategory'
import SearchProduct from '@/components/search/SearchProduct'
import SearchBrand from '@/components/search/SearchBrand'
import SearchBroadcast from '@/components/search/SearchBroadcast'

export default {
  metaInfo: {
    title: 'Shall We Shop - 검색'
  },
  components: {
    SearchHeader, SearchCategory, SearchProduct, SearchBrand, SearchBroadcast
  },
  data () {
    return {
      isInputFocus: false,
      searchResults: [],
      cat: 0
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
  .emptyBox{
    margin-top:80px;
    text-align: center;
    color:#666;
  }
</style>
