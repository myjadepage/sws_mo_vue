<template>
  <div class="buyPrdInfoWrap">
    <div class="infoHeader">주문상품 정보</div>
    <Entity v-for="(p,idx) in products" :key="idx" :product="p" :option="options[idx]" />
  </div>
</template>

<script>
import Entity from './PrdtInfoEntity'
export default {
  components: {
    Entity
  },

  created () {
    this.products = JSON.parse(sessionStorage.getItem('products'))
    this.options = JSON.parse(sessionStorage.getItem('selectedOptions'))
  },
  data () {
    return {
      product: {},
      options: []
    }
  }

}
</script>

<style>

.buyPrdInfoWrap{
  margin-top: 5px;
  font-size: 15px;
}

.buyPrdInfoWrap .infoHeader{
  padding: 15px 12px 0;
  background-color: #fff;
}

</style>
