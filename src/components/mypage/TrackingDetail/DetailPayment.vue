<template>
  <div class="detailPayWrap">
    <div class="payHeader">결제정보</div>
    <div class="payBody">
      <table>
        <tr>
          <th >상품금액</th>
            <td class="boldPrice">{{formatPrice(paymentInfo.pro_price)}}원</td>
        </tr>
        <tr class="underline">
          <th>배송비</th>
            <td>{{formatPrice(paymentInfo.shippingPrice)}}원</td>
        </tr>

       <tbody v-if="paymentInfo.discount.coupon.length || paymentInfo.discount.point">
        <tr >
            <th>총 할인금액</th>
            <td>-{{formatPrice(totalDiscount)}}원</td>
        </tr>
      </tbody>
        <tbody class="underline" v-if="paymentInfo.discount.coupon.length">
        <tr  v-for="(c,index) in paymentInfo.discount.coupon" :key="index">
            <th>할인쿠폰</th>
            <td>-{{formatPrice(c)}}원</td>
          </tr>
          </tbody>
          <tbody v-if="paymentInfo.discount.point">
        <tr class="underlineBlack">
          <th>포인트사용</th>
            <td>-{{formatPrice(paymentInfo.discount.point)}}원</td>
        </tr>
        </tbody>
        <tr>
            <th class="thTotalPrice">총 결제 금액</th>
          <td class="tdTotalPrice">{{formatPrice(totalPrice)}}원</td>
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
          coupon: [600, 500, 4000],
          point: 2300
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

      if (this.paymentInfo.discount.coupon.length) {
        for (const item of this.paymentInfo.discount.coupon) {
          value += item
        }
      }
      let p = this.paymentInfo.discount.point ? this.paymentInfo.discount.point : 0

      value += p

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
