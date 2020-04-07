<template>
  <div class="BuyCompleteInfoWrap">
    <div class="payInfoHeader">
      결제정보
    </div>
    <table>
      <tr>
        <th>상품금액</th>
        <td>{{info.payInfo.prdtPrice|makeComma}}원</td>
      </tr>
      <tr>
        <th>배송비</th>
        <td>{{deliveryPrice?formatPrice(deliveryPrice)+'원':'무료배송'}}</td>
      </tr>
      <tr v-if="info.payInfo.discount">
        <th>할인금액</th>
        <td>-{{info.payInfo.discount|makeComma}}원</td>
      </tr>
      <tr>
        <th>결제금액</th>
        <td class="totalPrice">{{totalPrice|makeComma}}원</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['info'],
  methods: {
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  computed: {
    deliveryPrice () {
      return this.info.payInfo.addDeliveryCost + this.info.payInfo.deliveryPrice
    },

    totalPrice () {
      return this.info.payInfo.prdtPrice + this.deliveryPrice - this.info.payInfo.discount
    }
  }

}
</script>

<style>

.BuyCompleteInfoWrap{
  background-color: #fff;
  margin:5px 0;
  padding: 15px 12px 14px 16px;
}

.BuyCompleteInfoWrap .payInfoHeader{
  font-size: 18px;
  font-weight: 500;
  margin: 0 0 15px;
}

.BuyCompleteInfoWrap table{
  width: 100%;
}

.BuyCompleteInfoWrap table th{
font-size: 15px;
font-weight: normal;
text-align: left;
padding: 0 0 10px;
}
.BuyCompleteInfoWrap table td{
  text-align: right;
  font-size: 15px;
}

.BuyCompleteInfoWrap .totalPrice{
  color:#e61754;
  font-size: 18px;
  font-weight: bold;
}
</style>
