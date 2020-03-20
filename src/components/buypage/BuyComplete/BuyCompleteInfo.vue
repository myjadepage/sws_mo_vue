<template>
  <div class="BuyCompleteInfoWrap">
    <div class="payInfoHeader">
      결제정보
    </div>
    <table>
      <tr>
        <th>상품금액</th>
        <td>{{payInfo.prdtPrice|makeComma}}원</td>
      </tr>
      <tr>
        <th>배송비</th>
        <td>{{payInfo.deliveryPrice|makeComma}}원</td>
      </tr>
      <tr>
        <th>할인금액</th>
        <td>-{{payInfo.discount|makeComma}}원</td>
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
  created () {
    this.payInfo = this.$store.getters.getPayPriceInfo
  },
  props: ['info'],
  data () {
    return {
      payInfo: {}
    }
  },
  computed: {
    totalPrice () {
      return this.payInfo.prdtPrice + this.payInfo.deliveryPrice - this.payInfo.discount
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
