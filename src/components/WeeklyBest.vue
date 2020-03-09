<template>
  <div class="section_ITEM pbottom">
    <h4>Weekly Best</h4>
    <div class="box_best_item" v-for="item in items" :key="item.prdtSysId">
        <a :href="'/product/' + item.prdtSysId" class="link_goods">
            <img class="thumb_img" :src="item.bigImageUrl" alt="">
        </a>
        <div class="goods_best">
            <a :href="'/product/' + item.prdtSysId" class="link_goods">
                <span class="tit_goods">깨지지 않는 아이 컬러 팔레트</span>
                <span class="txt_goods">당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디숍을 만나보세요.</span>
            </a>
            <span class="condition_order">
                [{{ item.categoryName5 }}] {{ item.name }}
            </span>
            <div class="item_price">
                <span class="discount">{{ item.marketPrice}}%</span>
                <strong>{{ item.marketPrice }}원</strong>
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
