<template>
  <div class="buyPrdtEntityWrap">
    <div class="prdImg"><img :src="product.smallImageUrl" alt=""></div>
    <div class="infobody">
    <div class="prdTitle">[{{product.brandName}}] {{product.name}}</div>
    <div class="prdOptions" v-if="option[0].contentName">
        [옵션명1] <div v-for="(c,idx) in option[0].contentGroup" :key="idx">{{c.name}}</div>
    </div>
    <div class="prdPriceCnt">
      {{calcTotalPrice|makeComma}}원 / 수량{{calcCnt}}개
      <span v-if="option.length>1 || addPrdts.length">
        <button class="moreBtn" @click="moreOption = !moreOption">{{moreOption?"접기":"더 보기"}}</button>
      </span>
    </div>
    </div>

        <div class="prdOptions" v-if="moreOption">
          <div class="subOptions" v-for="x in option.length-1" :key="x">
            [옵션명{{x+1}}] <div v-for="(c,idx) in option[x].contentGroup" :key="idx">{{c.name}}</div>
          </div>
        </div>

        <div class="prdOptions" v-if="moreOption">
          <div class="subOptions" v-for="(ap,idx) in addPrdts" :key="idx">
            [추가상품{{idx+1}}] {{ap.item}} +{{ap.price|makeComma}}원 {{ap.addingQty}}개</div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['product', 'option', 'addPrdts'],

  computed: {
    calcTotalPrice () {
      let apPrice = 0
      if (this.addPrdts) {
        for (const ap of this.addPrdts) {
          apPrice += ap.price * ap.addingQty
        }
      }

      if (this.option[0].contentName !== '') {
        let val = 0
        for (const o of this.option) {
          let optionPrice = 0
          if (o.contentGroup) {
            for (const oo of o.contentGroup) {
              optionPrice += oo.price
            }
            val += (optionPrice + this.product.price - (this.product.price * this.product.discountRate)) * o.count
          }
        }
        return val + apPrice
      } else {
        return (this.product.price - (this.product.price * this.product.discountRate)) * this.option[0].count + apPrice
      }
    },

    calcCnt () {
      let val = 0
      for (const o of this.option) {
        val += o.count
      }

      for (const ap of this.addPrdts) {
        val += Number(ap.addingQty)
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
.buyPrdtEntityWrap{
  background-color: #fff;
  padding: 12px 15px;
  min-height: 90px;
  margin-bottom: 1px;
}

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

.buyPrdtEntityWrap .subOptions{
margin-top: 5px;
background-color: #f9f9f9;
padding: 5px;
border-radius: 2px;
margin-left: 80px;
}

.buyPrdtEntityWrap .moreBtn{
  width: 40px;
  font-size: 9px;
  border: 1px solid black;
  border-radius: 2px;
  padding: 0 2px;
}

</style>
