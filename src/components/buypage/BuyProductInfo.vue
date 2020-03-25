<template>
  <div class="buyPrdInfoWrap">
    <div class="infoHeader">주문상품 정보</div>
    <div class="prdImg"><img :src="product.smallImageUrl" alt=""></div>
    <div class="prdTitle">[{{product.brandName}}] {{product.name}}</div>
    <div class="prdOptions" v-if="options[0].contentName">
      <div v-for="(o,idx) in options" :key="idx">
        [옵션명{{idx+1}}] <span v-for="(oo, i) in o.contentGroup" :key="i">{{oo.name==='선택없음'?'':oo.name}} </span>
        </div>
    </div>
    <div class="prdPriceCnt">
      {{calcTotalPrice|makeComma}}원 / 수량{{countPrductNum}}개
    </div>
  </div>
</template>

<script>
export default {
  created () {
    this.product = JSON.parse(sessionStorage.getItem('product'))
    this.options = JSON.parse(sessionStorage.getItem('selectedOptions'))
  },
  data () {
    return {
      product: {},
      options: []
    }
  },
  computed: {
    calcTotalPrice () {
      if (this.options[0].contentName !== '') {
        let optionPrice = 0
        let oCnt = 0
        if (this.options) {
          for (const o of this.options) {
            oCnt += o.count
            optionPrice += (o.price * o.count)
          }
        }
        if (optionPrice) {
          return this.product.price - (this.product.price * this.product.discountRate) + optionPrice
        } else {
          return (this.product.price - (this.product.price * this.product.discountRate)) * oCnt
        }
      } else {
        return (this.product.price - (this.product.price * this.product.discountRate)) * this.options[0].count
      }
    },
    countPrductNum () {
      let val = 0
      if (this.options) {
        for (const i of this.options) {
          val += Number(i.count)
        }
      }
      return val
    }
  }
}
</script>

<style>

.buyPrdInfoWrap{
  margin-top: 5px;
  background-color: #fff;
  padding: 15px 12px;
  font-size: 15px;
}

.buyPrdInfoWrap .prdImg img{
  float: left;
  width: 70px;
  margin-right: 10px;
  height: 70px;
  margin-bottom: 30px;
}

.buyPrdInfoWrap .infoHeader{
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}

.buyPrdInfoWrap .prdOptions{
  margin: 5px 0;
  color: #666666;
  font-size: 14px;
}

.buyPrdInfoWrap .prdPriceCnt{
  font-weight: 500;
}
</style>
