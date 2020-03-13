<template>
  <div class="totalPriceWrap">
      <div class="infoHeader">
          결제금액
      </div>
      <table>
          <tr>
              <th>상품금액</th>
              <td>{{prdPrice|makeComma}}원</td>
          </tr>
          <tr>
              <th>배송비</th>
              <td>{{deliveryPrice?formatPrice(deliveryPrice)+'원':무료배송}}</td>
          </tr>
          <tr v-if="discount">
              <th>할인금액</th>
              <td>-{{discount|makeComma}}원</td>
          </tr>
          <tr>
              <th>결제금액</th>
              <td class="totalPrice">{{payFinalPrice|makeComma}}원</td>
          </tr>
      </table>
  </div>
</template>

<script>
export default {
  props: ['discount'],
  created () {
    this.product = this.$store.getters.getProduct.price
  },
  data () {
    return {
      product: {}
    }
  },
  methods: {
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  updated () {
    this.$store.state.finalPrice = this.payFinalPrice
  },
  computed: {
    prdPrice () {
      return this.$store.getters.getOptionAddedPrice
    },
    deliveryPrice () {
      switch (this.product.deliveryPriceTypeCode) {
        case 1: return 0
        case 2: return this.product.debitAmount
        case 3: return this.product.prepaymentAmount
        case 4: return 2500
        case 5: return 2500
        default: return 2500
      }
    },
    payFinalPrice () {
      return this.prdPrice + this.deliveryPrice - this.discount
    }
  }

}
</script>

<style>
.totalPriceWrap{
  background-color: #fff;
  margin-top: 5px;
 padding: 15px 12px;
  margin-bottom: 20px;
}

.totalPriceWrap .infoHeader{
    font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}

.totalPriceWrap table{
    width: 100%;

}

.totalPriceWrap th{
 font-size: 15px;
 padding-bottom: 10px;
 font-weight: normal;
 text-align: left;
}
.totalPriceWrap td{
 font-size: 15px;
 font-weight: normal;
 text-align: right;
}

.totalPriceWrap .totalPrice{
    font-size: 18px;
    font-weight: bold;
    color: #e61754;
}
</style>
