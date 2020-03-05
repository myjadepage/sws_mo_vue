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

</style>
