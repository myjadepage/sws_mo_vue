<template>
  <div class="section_ITEM pbottom">
    <h4>Weekly Best</h4>
    <div class="box_best_item" v-for="item in items" :key="item.prdtSysId">
        <a :href="'/product/' + item.prdtSysId" class="link_goods">
            <img class="thumb_img" :src="item.bigImageUrl" alt="" style="border-top: 1px solid #efefef;border-bottom: 1px solid #efefef;">
        </a>
        <div class="goods_best">
            <a :href="'/product/' + item.prdtSysId" class="link_goods">
                <span class="tit_goods">{{ item.briefComment }}</span>
                <span class="txt_goods">{{ item.briefDescription }}</span>
            </a>
            <span class="condition_order">
                [{{ item.brandName }}] {{ item.name }}
            </span>
            <div class="item_price">
                <span class="discount">{{  (item.discountRate) * 100 }}%</span>
                <strong>{{ item.price | makeComma }}원</strong>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
import { getProductList } from '../api/index'
export default {
  name: 'WeeklyBest',
  data () {
    return {
      items: []
    }
  },
  created () {
    var vm = this
    getProductList()
      .then(function (res) {
        console.log('아이템리스트 맞어?', res.data.jsonData.products)
        vm.items = res.data.jsonData.products
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
