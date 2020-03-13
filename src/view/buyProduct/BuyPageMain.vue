<template>
<div class="buyPageMainWrap">
    <Bar :val="title" />
    <ProductInfo/>
    <Delivery/>
    <Coupon @couponBtnClick="couponMode=!couponMode" :couponCnt="coupons.length" :coupon="discountCoupon" :point="discountPoint" />
    <CouponDetail  v-if="couponMode" :coupons=coupons @discountByCoupon="discountByCoupon" @discountByPoint="discountByPoint" />
    <PayMethods/>
    <Term/>
    <TotalPriceInfo :discount="discountPoint+discountCoupon" />
    <BuyFooter/>
</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ProductInfo from '@/components/buypage/BuyProductInfo'
import Delivery from '@/components/buypage/BuyDelivery'
import Coupon from '@/components/buypage/BuyCoupon'
import CouponDetail from '@/components/buypage/CouponDetail/CouponDetail'
import Term from '@/components/buypage/BuyTerm'
import PayMethods from '@/components/buypage/PayMethods'
import TotalPriceInfo from '@/components/buypage/TotalPriceInfo'
import BuyFooter from '@/components/buypage/BuyFooter'

export default {
  components: {
    Bar, ProductInfo, Delivery, Coupon, PayMethods, CouponDetail, Term, TotalPriceInfo, BuyFooter
  },
  data () {
    return {
      title: '상품구매',
      discountPoint: 0,
      discountCoupon: 0,
      coupons: [
        {brand: 'SWS', name: '가입 축하 쿠폰(2020.03.23 까지)', price: 3000, condition: '주문 상품 금액 최고 10,000원 이상'},
        {brand: 'SWS', name: '가입 축하 쿠폰(2020.03.23 까지)', price: 3000, condition: '주문 상품 금액 최고 10,000원 이상'},
        {brand: 'SWS', name: '가입 축하 쿠폰(2020.03.23 까지)', price: 3000, condition: '주문 상품 금액 최고 10,000원 이상'}],
      couponMode: false
    }
  },
  methods: {
    discountByPoint (point) {
      this.discountPoint = point
    },
    discountByCoupon (coupon) {
      this.discountCoupon = coupon
    }
  }
}
</script>

<style>
.buyPageMainWrap{
  background-color: #f3f3f3;
}
</style>
