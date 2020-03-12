<template>
  <div class="productOptionWrap" v-if="buyMode">
    <div class="selectSection">
    <select @change="optionSelected" v-for="(o,idx) in product.normalOptions" :key="idx" :name="o.name" :ref="'option'+idx">
      <option value="">{{o.name}}</option>
      <option v-for="(c, idx) in o.content" :key="idx" :value="c" >{{`0${idx+1}. ${c} ${o.price?formatPrice(o.price)+'원':''}`}}</option>
    </select>
    </div>
    <div class="text-center" v-if="$store.getters.getSelectedOptions">
      <div class="selectedOption" v-for="(item,idx) in $store.getters.getSelectedOptions" :key="idx">
        <span v-for="(o,i) in product.normalOptions" :key="i">
          {{o.name}} {{item[o.name]}}
        </span>
        <br>
        <div class="countBtnSection">
        <button class="countBtn" @click="countDecraese(idx)"><span class="ico_minus"></span></button><span class="count">{{item.count}}</span>
        <button class="countBtn" @click="countIncrease(idx)"><span class="ico_plus"></span></button>
        </div>
        <div class="optionPrice">{{calcPrice(idx)|makeComma}}<span class="won">원</span> <span @click="deleteOption(idx)"  class="ico_times"></span></div>
      </div>
    </div>

    <div  class="totalPrice">총 상품금액 <span class="price">{{calcTotalPrice|makeComma}}</span><span class="won">원</span></div>
    </div>
</template>

<script>
export default {
  props: ['buyMode'],
  data () {
    return {
      product: {'normalOptions': [
        {
          name: '사이즈',
          content: [90, 95, 100],
          price: 29900
        },
        {
          name: '색상',
          content: ['흰색', '핑크색', '노랑', '검정'],
          price: 0
        }
      ]}
    }
  },
  methods: {
    countDecraese (idx) {
      if (this.$store.getters.getOptionCnt(idx) !== 1) {
        this.$store.commit('decreaseOptionCnt', idx)
      }
    },
    countIncrease (idx) {
      this.$store.commit('increaseOptionCnt', idx)
    },
    optionSelected () {
      for (let i = 0; i < this.product.normalOptions.length; i++) {
        if (!this.$refs['option' + i][0].value) {
          return
        }
      }
      let item = {}
      item.price = 0
      for (let i = 0; i < this.product.normalOptions.length; i++) {
        item.price += this.product.normalOptions[i].price
        item[this.$refs['option' + i][0].name] = this.$refs['option' + i][0].value
      }

      item.count = 1

      this.$store.commit('addOption', item)

      for (let i = 0; i < this.product.normalOptions.length; i++) {
        this.$refs['option' + i][0].value = ''
      }
    },
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    calcPrice (idx) {
      return this.$store.getters.getOptionPrice(idx) * this.$store.getters.getOptionCnt(idx)
    },
    deleteOption (idx) {
      this.$store.commit('deleteOption', idx)
    }
  },
  computed: {
    isOptionSelected () {
      return this.$store.getters.getSelectedOptionsLength === this.product.normalOptions.length
    },
    calcTotalPrice () {
      let o = this.$store.getters.getSelectedOptions
      let val = 0
      for (const item of o) {
        val += (item.count * item.price)
      }

      return val + this.$store.getters.getProductPrice
    }
  }

}
</script>

<style>
.productOptionWrap{
    height: fit-content;
    text-align: center;
    user-select: none;
}

.productOptionWrap .text-center{
  text-align: center;
}
.productOptionWrap select{
  padding: 10px;
  border: 1px solid #eeeeee;
  width: 90%;
  margin-bottom: 10px;
}

.productOptionWrap .selectedOption{
  margin: 0 3% 10px;
  padding: 10px;
  background-color: #eeeeee;
  height: 65px;
  text-align: left;
}

.productOptionWrap .count{
  height: 100%;
  line-height: 30px;
  margin: 0 10px;
  text-align: center;
  font-weight: bold;
}

.productOptionWrap .selectSection{
  margin-top: 15px;
}

.productOptionWrap .optionPrice{
  float: right;
  font-size: 18px;
  font-weight: bold;
}

.productOptionWrap .won{
  font-size: 13px;
  font-weight: normal;
}

.productOptionWrap .totalPrice{
  padding: 0 29px 15px;
  text-align: right;
}

.productOptionWrap .totalPrice .price{
  font-size: 20px;
  color: #e61754;
  margin-left: 10px;
  font-weight: bold;
}

.productOptionWrap .totalPrice .won{
  color: #e61754;
  font-size: 13px;
}

.productOptionWrap .countBtnSection{
  display: inline-block;
  text-align: center;
  background-color: #fff;
  margin-top: 10px;
  width: 100px;
  height: 35px;
}

.productOptionWrap .countBtn{
  display: inline-block;
  text-align: center;
  height: 100%;
  width: 30%;
}

.productOptionWrap .ico_times{
  display: inline-block;
  background: url('../../../assets/img/ico/ico_times.png');
  background-size: 100%;
  cursor: pointer;
  width: 9px;
  height: 9px;
}
.productOptionWrap .ico_plus{
  display: inline-block;
  background: url('../../../assets/img/ico/ico_plus.png');
  background-size: 100%;
  width: 10px;
  height: 10px;

}
.productOptionWrap .ico_minus{
  display: inline-block;
  background: url('../../../assets/img/ico/ico_minus.png');
  background-size: 100%;
  position: relative;
  bottom: 3px;
  width: 10px;
  height: 2px;
}

</style>
