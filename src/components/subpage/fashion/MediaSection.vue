<template>
  <div class="mediaSectionWrap">
      <div class="titleSection">
          <div class="label">Hot Beauty</div>
          <span class="title">주목해야 하는 핫한 영상</span>
          <span ref="pSort" @click="popularSort" class="popluarBtn">인기순</span>
          <span  class="delimeter">|</span>
          <span ref="lSort" @click="latestSort" class="latestBtn selected">최신순</span>
      </div>
      <Media v-for="(p,idx) in products" :key="idx" :props="p" />
  </div>
</template>

<script>
import Media from './FashionMedia'
import {getProductList} from '@/api/index.js'

export default {
  components: {
    Media
  },
  data () {
    return {
      products: [],
      sort: 0
    }
  },
  methods: {
    popularSort () {
      if (this.sort === 0) {
        this.sort = 1
        this.$refs.pSort.classList.add('selected')
        this.$refs.lSort.classList.remove('selected')
      }
    },
    latestSort () {
      if (this.sort === 1) {
        this.sort = 0
        this.$refs.lSort.classList.add('selected')
        this.$refs.pSort.classList.remove('selected')
      }
    }
  },
  created () {
    getProductList()
      .then((res) => {
        this.products = res.data.jsonData.products
      })
      .catch(e => console.log(e))
  }
}
</script>

<style>
.mediaSectionWrap .titleSection{
    padding: 0 12px;
    margin: 40px 0 10px;
}

.mediaSectionWrap .label{
    font-family: Roboto;
    color: #e61754;
    font-size: 15px;
    font-weight: 500;
}

.mediaSectionWrap .title{
font-size: 20px;
font-weight: 500;
}

.mediaSectionWrap .latestBtn, .mediaSectionWrap .delimeter, .mediaSectionWrap .popluarBtn{
    color: #999999;
    float: right;
    line-height: 30px;
}

.mediaSectionWrap .latestBtn,.mediaSectionWrap .popluarBtn{
    cursor: pointer;
}
.mediaSectionWrap .latestBtn.selected ,.mediaSectionWrap .popluarBtn.selected{
color: black;
}

.mediaSectionWrap .delimeter{
    height: 1px;
    font-size: 1px;
    margin: 0 8px;
}
</style>
