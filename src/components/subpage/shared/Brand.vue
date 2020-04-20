<template>
<section class="brandBlock subBlock">
  <h1>브랜드 기획전</h1>
  <div class="bgBox" style="background:url('/static/images/temp_sub_brand.png') 50% 50% /cover no-repeat;"></div>
  <div class="itemList">
    <h2>라이프썸</h2>
    <p>필수적인 기능, 합리적인 가격 그리고 보다 나은 디자인을 생각합니다.</p>
    <ul class="list">
      <li class="item noItem" v-if="products.length === 0">기획 상품이 없습니다.</li>
      <li class="item" v-for="product in products" :key="product.prdtSysId">
        <router-link :to="'/product/' + product.prdtSysId">
          <div class="imgBox mov" :style="{backgroundImage:'url('+product.smallImageUrl+')', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></div>
          <div class="txtBox">
            <p class="itemName">{{product.name}}</p>
            <p class="price">{{product.price}}원</p>
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
  name: 'BrandBlock',
  props: ['categorySysId1'],
  data () {
    return {
      startIndex: 0,
      products: []
    }
  },
  methods: {
    getList () {
      let getInfo = 'startIndex=' + this.startIndex + '&rowCount=3&categorySysId1=' + this.categorySysId1 + '&isPlanBrand=1'
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
