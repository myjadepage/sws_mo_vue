<template>
  <div class="searchPageWrap">
      <SearchHeader @clickSearch="search"  @inputOutFoucsed="isInputFocus=false" @inputFoucsed="isInputFocus=true" />
      <SearchCategory v-if="!isInputFocus" />
      <div v-if="!isInputFocus">
        <SearchProduct  v-for="p in products" :key="p.prdtSysId" :product="p" />
      </div>
  </div>
</template>

<script>
import SearchHeader from '@/components/search/SearchHeader'
import SearchCategory from '@/components/search/SearchCategory'
import SearchProduct from '@/components/search/SearchProduct'

export default {
  components: {
    SearchHeader, SearchCategory, SearchProduct
  },
  data () {
    return {
      isInputFocus: false,
      products: {}
    }
  },
  methods: {
    search (p) {
      this.products = p
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
</style>
