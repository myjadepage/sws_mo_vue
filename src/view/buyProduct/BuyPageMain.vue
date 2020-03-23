<template>
<div class="buyPageMainWrap">
  <div @click="allModalClose" v-if="addrModalVisibility || infoModalVisibility" class="darkFilter"></div>
    <Bar :val="title" />
    <ProductInfo/>
    <Orderer :member=member />
    <Delivery :member=member @deliveryBtnClick="addrModalShow" />
    <Coupon @couponBtnClick="couponMode=!couponMode" :couponCnt="coupons.length" :coupon="discountCoupon" :point="discountPoint" />
    <CouponDetail  v-if="couponMode" :coupons=coupons @discountByCoupon="discountByCoupon" @discountByPoint="discountByPoint" />
    <PayMethods/>
    <Term/>
    <TotalPriceInfo @infoBtncilik="infoModalShow" @finalPrice="getfinalPrice" :discount="discountPoint+discountCoupon" />
    <BuyFooter :coupon="discountCoupon" :finalPrice="finalPrice" />

    <AddrModal @modalClose="addrModalVisibility = false" @addrModalClose="addrModalClose" v-if="addrModalVisibility" />
    <InfoModal @modalClose="infoModalVisibility = false" v-if="infoModalVisibility" />

</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import ProductInfo from '@/components/buypage/BuyProductInfo'
import Orderer from '@/components/buypage/OrdererInfo'
import Delivery from '@/components/buypage/BuyDelivery'
import Coupon from '@/components/buypage/BuyCoupon'
import CouponDetail from '@/components/buypage/CouponDetail/CouponDetail'
import Term from '@/components/buypage/BuyTerm'
import PayMethods from '@/components/buypage/PayMethods'
import TotalPriceInfo from '@/components/buypage/TotalPriceInfo'
import BuyFooter from '@/components/buypage/BuyFooter'
import InfoModal from '@/components/buypage/Modal/DeliveryInfoModal'
import AddrModal from '@/components/buypage/Modal/DeliveryAddressModal'

export default {
  created () {
    let m = JSON.parse(sessionStorage.getItem('memberInfo'))
    this.member = m
    window.scrollTo(0, 0)
  },
  components: {
    Bar, ProductInfo, Orderer, Delivery, Coupon, PayMethods, CouponDetail, Term, TotalPriceInfo, BuyFooter, AddrModal, InfoModal
  },
  data () {
    return {
      title: '상품구매',
      discountPoint: 0,
      discountCoupon: 0,
      coupons: [
        {brand: 'SWS', name: '가입 축하 쿠폰(2020.03.23 까지)', price: 3000, condition: '주문 상품 금액 최고 10,000원 이상'},
        {brand: 'SWS', name: '가입 축하 쿠폰(2020.03.23 까지)', price: 2000, condition: '주문 상품 금액 최고 10,000원 이상'},
        {brand: 'SWS', name: '가입 축하 쿠폰(2020.03.23 까지)', price: 10000, condition: '주문 상품 금액 최고 10,000원 이상'}
      ],
      couponMode: false,
      finalPrice: 0,
      addrModalVisibility: false,
      infoModalVisibility: false,
      member: {
      }
    }
  },
  methods: {
    addrModalShow () {
      this.addrModalVisibility = true
    },

    addrModalClose () {
      this.addrModalVisibility = false
      this.member.addr = this.$store.getters.getPostCode.address + ' ' + this.$store.getters.getPostCode.detail
    },
    infoModalShow () {
      this.infoModalVisibility = true
    },
    infoModalClose () {
      this.infoModalVisibility = false
    },
    allModalClose () {
      this.infoModalVisibility = false
      this.addrModalVisibility = false
    },
    discountByPoint (point) {
      this.discountPoint = point
    },
    discountByCoupon (coupon) {
      this.discountCoupon = coupon
    },
    getfinalPrice (price) {
      this.finalPrice = price
    }
  }
}
</script>

<style>
.buyPageMainWrap{
  background-color: #f3f3f3;
}

.buyPageMainWrap .darkFilter{
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
</style>
