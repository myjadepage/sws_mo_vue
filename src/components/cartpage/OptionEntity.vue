<template>
  <div class="optionEntityWrap">
       <div v-for="(o,idx) in option[1]" :key="idx">
       [옵션명 {{idx+1}}] {{o.optionKeyName}}
      </div>
        <select @change="cntChange" :value="option[1][0].optionQty">
          <option v-for="x in 99" :value="x" :key="x">{{x}}</option>
        </select>
        <span class="price">{{totalPrice|makeComma}}원</span> <span v-if="product.discountRate" class="prdPrice">{{product.marketPrice|makeComma}}</span>
  </div>
</template>

<script>
export default {
  props: ['option', 'product'],
  computed:
    {
      totalPrice () {
        let prdtPrice = this.product.price
        let val = 0
        for (const o of this.option[1]) {
          val += o.price
        }
        return (prdtPrice + val) * this.option[1][0].optionQty
      }
    },
  methods: {
    cntChange (x) {
      for (let i = 0; i < this.option[1].length; i++) {
        this.option[1][i].optionQty = Number(x.target.value)
      }
      this.$emit('optionCntChange', [this.option[0], x.target.value])
    }
  }
}
</script>

<style>
.optionEntityWrap{
    border-top: 1px solid #eeeeee;
    padding: 10px 12px 10px 80px;
}
</style>
