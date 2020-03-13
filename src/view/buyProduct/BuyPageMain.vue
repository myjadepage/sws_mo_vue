<template>
<div class="buyPageMainWrap">
    <Bar :val="title" />
    <ProductInfo/>
    <Delivery/>
    <Discount/>
    <Coupon/>
    <PayMethods/>
</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ProductInfo from '@/components/buypage/BuyProductInfo'
import Delivery from '@/components/buypage/BuyDelivery'
import Discount from '@/components/buypage/BuyDiscount'
import Coupon from '@/components/buypage/BuyCoupon'
import PayMethods from '@/components/buypage/PayMethods'

export default {
  components: {
    Bar, ProductInfo, Delivery, Discount, Coupon, PayMethods
  },
  data () {
    return {
      title: '상품구매'
    }
  }
}
</script>

<style>

</style>
