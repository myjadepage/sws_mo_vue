<template>
  <div class="buyPrdtEntityWrap">
    <div class="prdImg"><img :src="product.smallImageUrl" alt=""></div>
    <div class="infobody">
    <div class="prdTitle">[{{product.brandName}}] {{product.name}}</div>
    <div class="prdOptions" v-if="option[0].contentName">
      <div>
        [옵션명1] <span v-for="(oo, i) in option[0].contentGroup" :key="i">{{oo.name==='선택없음'?'':oo.name}} </span>
      </div>
      <!-- <div v-for="(o,idx) in option" :key="idx">
        [옵션명{{idx+1}}] <span v-for="(oo, i) in o.contentGroup" :key="i">{{oo.name==='선택없음'?'':oo.name}} </span>
        </div> -->
    </div>
    <div class="prdPriceCnt">
      {{calcTotalPrice|makeComma}}원 / 수량{{countPrductNum}}개
    </div>
      <div v-if="option.length>1">
        <button @click="moreOption = !moreOption">더보기</button>
      </div>
        <div class="prdOptions" v-if="moreOption">
        <div v-for="x in option.length-1" :key="x">
          [옵션명{{x+1}}] <span v-for="(oo,idx) in option[x].contentGroup" :key="idx">{{oo.name}}</span>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['product', 'option'],

  computed: {
    calcTotalPrice () {
      if (this.option[0].contentName !== '') {
        let optionPrice = 0
        let oCnt = 0
        if (this.option) {
          for (const o of this.option) {
            oCnt += o.count
            optionPrice += (o.price * o.count) + this.product.price - (this.product.price * this.product.discountRate)
          }
        }
        if (optionPrice) {
          return optionPrice
        } else {
          return (this.product.price - (this.product.price * this.product.discountRate)) * oCnt
        }
      } else {
        return (this.product.price - (this.product.price * this.product.discountRate)) * this.option[0].count
      }
    },
    countPrductNum () {
      let val = 0
      if (this.option) {
        for (const i of this.option) {
          val += Number(i.count)
        }
      }
      return val
    }
  },
  data () {
    return {
      moreOption: false
    }
  }
}
</script>

<style>
.buyPrdtEntityWrap .prdImg img{
  float: left;
  width: 70px;
  height: 70px;
  margin-right: 10px;
}

.buyPrdtEntityWrap .infobody{
  margin-left: 80px;
}

.buyPrdtEntityWrap .infoHeader{
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}

.buyPrdtEntityWrap .prdOptions{
  margin: 5px 0;
  color: #666666;
  font-size: 14px;
}

.buyPrdtEntityWrap .prdPriceCnt{
  font-weight: 500;
}
</style>
