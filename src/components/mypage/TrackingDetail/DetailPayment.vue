<template>
  <div class="detailPayWrap">
    <div class="payHeader">결제정보</div>
    <div class="payBody">
      <div class="payPrice">
        <table class="mainPrice">
          <tr>
            <th >상품금액</th>
            <td>{{formatPrice(paymentInfo.pro_price)}}원</td>
          </tr>
          <tr>
            <th>배송비</th>
            <td>{{formatPrice(paymentInfo.shippingPrice)}}원</td>
          </tr>
        </table>
      </div>
      <div v-if="paymentInfo.discount" class="discountPrice">
        <table class="discountSection">
          <tr>
            <th>총 할인금액</th>
            <td>-{{formatPrice(totalDiscount)}}원</td>
          </tr>
          <tr v-for="(c,index) in paymentInfo.discount.coupon" :key="index">
            <th>할인쿠폰</th>
            <td>-{{formatPrice(c)}}원</td>
          </tr>
          <tr class="pointCell">
            <th>포인트사용</th>
            <td>-{{formatPrice(paymentInfo.discount.point)}}원</td>
          </tr>
        </table>
      </div>
    </div>
    <div class="payFooter">
      <table>
        <tr>
          <th>총 결제 금액</th>
          <td>{{formatPrice(totalPrice)}}원</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      paymentInfo: {
        pro_price: 39900,
        shippingPrice: 3000,
        discount: {
          coupon: [3000, 3000],
          point: 1000
        }
      }
    }
  },
  methods: {
    formatPrice (money) {
      return money.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  computed: {
    totalDiscount () {
      let value = 0

      if (this.paymentInfo.discount.coupon) {
        for (const item of this.paymentInfo.discount.coupon) {
          value += item
        }
      }

      value += this.paymentInfo.discount.point

      return value
    },
    totalPrice () {
      let value = this.paymentInfo.pro_price + this.paymentInfo.shippingPrice - this.totalDiscount

      return value
    }

  }
}
</script>

<style>
.detailPayWrap{
  font-family: "Noto Sans KR";
  margin-top: 5px;
  background-color: white;
  padding:15px 12px 20px;
}

.detailPayWrap .payHeader{
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 1px solid #eeeeee;
}

.detailPayWrap .payPrice{
  margin: 15px 0 7px 0;
  border-bottom: 1px solid #eeeeee;
}

.detailPayWrap .discountPrice{
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 8px;
}

.detailPayWrap .pointCell{
  border-top: 1px solid #eeeeee;
}

.detailPayWrap .pointCell th{
  padding-top: 8px;
}

.detailPayWrap .mainPrice th{
  padding-bottom: 8px;
}

.detailPayWrap .payPrice th, .discountPrice th{
  font-weight: normal;
  width: 91px;
  text-align: left;
  font-size: 14px;
}
.detailPayWrap .payPrice td, .discountPrice td{
  font-size: 14px;
  width: 245px;
  text-align: right;
}

.detailPayWrap .payFooter th{
  font-size: 18px;
  font-weight: 500;
   width: 94px;
  text-align: left;
  color: #e61754;
}

.detailPayWrap .payFooter td{
  font-size: 18px;
  font-weight: 500;
  width: 245px;
  text-align: right;
  color: #e61754;
}

.detailPayWrap .discountSection th{
  padding-bottom: 5px;
}

</style>
