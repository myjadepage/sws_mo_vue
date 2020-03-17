<template>
  <div class="productEntityWrap">
    <img :src="product.smallImageUrl">
    <div class="title">{{product.name}}</div>
    <div class="option" v-for="(o,idx) in options" :key="idx">{{o.name}}</div>
    <select @change="prdtQtyCheck" name="" id="">
        <option value="0">0</option>
        <option v-for="x in cnt" :value="x" :key="x">{{x}}</option>
    </select>
    <span class="price">{{totalPrice|makeComma}}원</span> <span class="prdPrice">{{product.price|makeComma}}</span>
    <span @click="removeBtnClick" class="ico_times removeBtn"></span>
  </div>
</template>

<script>
export default {
  props: ['product', 'index'],
  data () {
    return {
      options: [{name: '[옵션명1] LRS200007G 작은원석 [원석 컬러] 06월 라벤더', price: 25000}],
      cnt: 25
    }
  },
  computed: {
    totalPrice () {
      let optionPrice = 0
      for (const o of this.options) {
        optionPrice += o.price
      }
      return this.product.price - (this.product.price * this.product.discountRate) - this.product.discount + optionPrice
    }
  },
  methods: {
    removeBtnClick () {
      this.$emit('remove', this.index)
    },

    prdtQtyCheck (x) {
      if (this.product.isSoldout) {
        this.$emit('soldOut')
        x.target.value = '0'
      } else if (x.target.value > this.product.salesQty) {
        this.$emit('salesLimitOver')
        x.target.value = '0'
      }
    }
  }
}
</script>

<style>

.productEntityWrap{
    /* height: 135px; */
    background-color: #fff;
    margin-bottom: 1px;
    padding: 15px 12px;
}

.productEntityWrap img{
float: left;
 width: 70px;
 height: 70px;
 margin-right: 10px;
}

.productEntityWrap .option{
    margin: 5px 0 10px;
    color: #666666;
}

.productEntityWrap .price{
    font-weight: 500;
}

.productEntityWrap .prdPrice{
    font-size: 13px;
    color: #999999;
    text-decoration: line-through;
}

.productEntityWrap select{
    margin-right: 13px;
    border-radius: 2px;
    line-height: 30px;
    padding-left: 10px;
    border: 1px solid #cccccc;
    height: 30px;
    width: 50px;
}

.ico_times{
    float: right;
    background: url('../../assets/img/ico/ico_times.png');
    background-size: 100%;
    width: 11px;
    height: 11px;
}

.ico_times.removeBtn{
  position: relative;
  top: 12px;
}

</style>
