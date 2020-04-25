<template>
  <div class="section_ITEM weekly_best_main">
    <h4>WEEKLY BEST</h4>
    <ul class="box_best_item">
      <!-- 임시주석 -->
      <Entity v-for="(i,idx) in products" :key="idx" :product="i" :pickLists="pickLists" />
      <li class="item noItem" v-if="products.length === 0"><p>그랜드 오픈 상품이 없습니다.</p></li>

    </ul>
   </div>
</template>

<script>
import { getProductLists } from '@/api/index'
import Entity from '@/components/mainpage/WeeklyBestEntity'
export default {
  props: ['pickLists'],
  components: {
    Entity
  },
  name: 'WeeklyBest',
  data () {
    return {
      startIndex: 0,
      products: []
    }
  },
  created () {
    this.getList()
  },
  methods: {
    getList () {
      let getInfo = 'startIndex=' + this.startIndex + '&isWeekly=1'
      // console.log(getInfo)
      getProductLists(getInfo)
        .then(res => {
          console.log(res)
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
  }
}
</script>

<style>
</style>
