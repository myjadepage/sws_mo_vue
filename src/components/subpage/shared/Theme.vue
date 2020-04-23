<template>
<section class="brandBlock subBlock">
  <h1>테마 기획전</h1>
  <div class="bgBox" style="background:url('/static/images/temp_sub_them.png') 50% 50% /cover no-repeat;"></div>
  <div class="itemList">
    <h2>면역력 챙기셨어요?</h2>
    <p>외출 전 마스크와 면역력을 챙기세요!</p>
    <ul class="list">
      <li class="item noItem" v-if="products.length === 0">기획 상품이 없습니다.</li>
      <li class="item" v-for="product in products" :key="product.prdtSysId">
        <router-link :to="'/product/' + product.prdtSysId">
          <div class="imgBox mov" :style="{backgroundImage:'url('+product.bigImageUrl+')', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></div>
          <div class="txtBox">
            <p class="itemName">{{product.name}}</p>
            <p class="price">{{product.price|makeComma}}원</p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</section>
</template>

<script>
import {getProductLists} from '@/api/index.js'

export default {
  name: 'theme',
  props: ['categorySysId1'],
  data () {
    return {
      startIndex: 0,
      products: []
    }
  },
  methods: {
    getList () {
      let getInfo = 'startIndex=' + this.startIndex + '&rowCount=3&categorySysId1=' + this.categorySysId1 + '&isPlanThema=1'
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
  }
}
</script>
