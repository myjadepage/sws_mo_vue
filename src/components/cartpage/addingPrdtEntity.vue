<template>
   <div class="addingPrdtWrap">
       [추가상품{{index+1}}] {{addPrdt.item}}
        <select @change="cntChange" :value="addPrdt.addingQty">
          <option v-for="x in 99" :value="x" :key="x">{{x}}</option>
        </select>
        <span class="price">{{totalPrice|makeComma}}원</span> <span v-if="product.discountRate" class="prdPrice">{{product.price|makeComma}}</span>
  </div>
</template>

<script>
export default {
  props: ['addPrdt', 'product', 'index'],
  computed:
    {
      totalPrice () {
        return this.addPrdt.price * this.addPrdt.addingQty
      }
    },
  methods: {
    cntChange (x) {
      this.addPrdt.addingQty = Number(x.target.value)
      this.$emit('addPrdtCntChange', [this.addPrdt.prdtAddingProductDetailSysId, x.target.value])
    }
  }
}
</script>

<style>
.addingPrdtWrap{
    border-top: 1px solid #eeeeee;
    padding: 10px 12px 10px 80px;
}
</style>
