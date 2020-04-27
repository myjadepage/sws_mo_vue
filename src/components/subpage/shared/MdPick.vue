<template>
  <div class="section_ITEM weekly_best_main">
    <h4>MD PICK</h4>
    <ul class="box_best_item">
      <SaleEntity v-for="product in products" :key="product.prdtSysId" :product="product" :pickLists="pickLists" />
      <li class="item noItem" v-if="products.length === 0">MD PICK 상품이 없습니다.</li>
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
      products: []
    }
  },
  methods: {
    getList () {
      let getInfo = 'startIndex=' + this.startIndex + '&rowCount=20&categorySysId1=' + this.categorySysId1
      // console.log(getInfo)
      getProductLists(getInfo)
        .then(res => {
          // console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.products = res.data.jsonData.products
            this.startIndex = res.data.jsonData.startIndex
          } else if (res.data.jsonData.resultCode === '0004') {
            this.products = []
            this.startIndex = 0
          }
        })
        .catch(err => {
          console.log(err)
        })
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

  name: 'MdPick'
}
</script>

<style>
</style>
