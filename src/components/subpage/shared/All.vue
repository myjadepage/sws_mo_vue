<template>
  <div class="section_ITEM weekly_best_main" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="30" infinite-scroll-throttle-delay="1500">
    <h4>전체상품</h4>
    <ul class="box_best_item">
      <SaleEntity v-for="product in products" :key="product.prdtSysId" :product="product" :pickLists="pickLists" />
      <li class="item noItem" v-if="products.length === 0">상품이 없습니다.</li>
    </ul>
   </div>
</template>

<script>
import SaleEntity from './SaleEntity'
import {getProductLists} from '@/api/index.js'

export default {
  props: ['categorySysId1', 'pickLists'],
  components: {
    SaleEntity
  },
  data () {
    return {
      startIndex: 0,
      products: [],
      busy: false
    }
  },
  methods: {
    getList () {
      let getInfo = 'startIndex=' + this.startIndex + '&rowCount=10&categorySysId1=' + this.categorySysId1 + '&isSale=0&isPlanBrand=0&isPlanThema=0'
      getProductLists(getInfo)
        .then(res => {
          // console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            res.data.jsonData.products.map(x => this.products.push(x))
            this.startIndex = res.data.jsonData.startIndex
            if (res.data.jsonData.products.length < 10) {
              this.busy = true
            } else {
              this.busy = false
            }
          } else if (res.data.jsonData.resultCode === '0004') {
            this.products = []
            this.startIndex = 0
            this.busy = true
          }
        })
        .catch(err => {
          console.log(err)
          this.busy = false
        })
    },
    loadMore () {
      this.busy = true
      this.getList()
    }
  },
  watch: {
    categorySysId1: {
      handler (categorySysId1) {
        this.startIndex = 0
        this.getList()
      }
    }
  },

  name: 'All'
}
</script>

<style>
</style>
