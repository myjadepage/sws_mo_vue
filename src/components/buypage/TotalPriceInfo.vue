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
              <th>배송비<span @click="deliveryInfoClick" class="deliveryInfo">?</span></th>
              <td>{{deliveryPrice?formatPrice(deliveryPrice)+'원':'무료배송'}}</td>
          </tr>
          <tr v-if="addDeliveryCost">
              <th>추가배송비</th>
              <td>{{addDeliveryCost|makeComma}}원</td>
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
    this.products = JSON.parse(sessionStorage.getItem('products'))
    this.options = JSON.parse(sessionStorage.getItem('selectedOptions'))
  },
  data () {
    return {
      products: [],
      options: []
    }
  },
  methods: {
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    deliveryInfoClick () {
      this.$emit('infoBtncilik')
    }
  },
  computed: {
    prdPrice () {
      let price = 0
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i]
        const option = this.options[i]

        if (option.contentName !== '') {
          let val = 0
          for (const o of option) {
            let optionPrice = 0
            if (o.contentGroup) {
              for (const oo of o.contentGroup) {
                optionPrice += oo.price
              }
              val += (optionPrice + product.price - (product.price * product.discountRate)) * o.count
            }
          }
          price += val
        } else {
          price += (product.price - (product.price * product.discountRate)) * option.count
        }
      }

      this.$store.commit('updatePayPriceInfo', {name: 'prdtPrice', price: price})
      return price
    },
    deliveryPrice () {
      let price = 0
      for (const product of this.products) {
        switch (product.deliveryPriceTypeCode) {
          case 1: price += 0
            break
          case 2: price += this.product.debitAmount
            break
          case 3: price += this.product.prepaymentAmount
            break
          case 4: price += 2500
            break
          case 5: price += 2500
            break
          default: price += 2500
            break
        }
      }
      this.$store.commit('updatePayPriceInfo', {name: 'deliveryPrice', price: price})
      return price
    },

    addDeliveryCost () {
      return this.$store.getters.getPayPriceInfo.addDeliveryCost
    },
    payFinalPrice () {
      this.$emit('finalPrice', this.prdPrice + this.deliveryPrice + this.addDeliveryCost - this.discount)
      this.$store.commit('updatePayPriceInfo', {name: 'discount', price: this.discount})
      return this.prdPrice + this.deliveryPrice + this.addDeliveryCost - this.discount
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

.totalPriceWrap .deliveryInfo{
    position: relative;
    user-select: none;
    cursor: pointer;
    bottom: 10px;
    left: 2px;
    display: inline-block;
    text-align: center;
    width: 12px;
    height: 12px;
    line-height: 12px;
    font-size: 10px;
    background-color: #666666;
    border-radius: 20px;
    color: white;
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
