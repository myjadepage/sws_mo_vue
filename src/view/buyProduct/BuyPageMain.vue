<template>
<div class="buyPageMainWrap">
  <div @click="allModalClose" v-if="addrModalVisibility || infoModalVisibility" class="darkFilter"></div>
    <Bar :val="title" />
    <ProductInfo/>
    <Orderer :user="user" />
    <Delivery :addresses="addresses" @deliveryBtnClick="addrModalShow" />
    <Coupon  @couponBtnClick="couponMode=!couponMode" :couponCnt="coupons.length" :coupon="discountCoupon" :point="discountPoint" />
    <CouponDetail :user="user"  v-if="couponMode" :coupons=coupons @discountByCoupon="discountByCoupon" @discountByPoint="discountByPoint" />
    <PayMethods/>
    <Term/>
    <TotalPriceInfo @infoBtncilik="infoModalShow" @finalPrice="getfinalPrice" :discount="discountPoint+discountCoupon" />
    <BuyFooter :addresses="addresses" :coupon="discountCoupon" :point="discountPoint" :finalPrice="finalPrice" />

    <AddrModal :addresses="addresses" @modalClose="addrModalVisibility = false" @addrModalClose="addrModalClose" v-if="addrModalVisibility" />
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
import {getMemberAddrList, getAccessToken, getUserInfo} from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 구매하기'
  },
  created () {
    if (this.$store.state.isLogin) {
      getUserInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
          this.user = res.data.jsonData
        })
        .catch(err => {
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              })
              .catch(err => {
                if (err.response.status === 401) {
                  this.$store.dispatch('logOut')
                  this.$router.push('/Login')
                }
              })
          }
        })
    }

    if (sessionStorage.getItem('accessToken')) {
      getMemberAddrList(sessionStorage.getItem('accessToken'))
        .then(res => {
          this.addresses = res.data.jsonData.addresses
        })
        .catch(err => {
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              })
              .catch(err => {
                if (err.response.status === 401) {
                  this.$store.dispatch('logOut')
                  this.$router.push('/Login')
                }
              })
          }
        })
    }
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
      coupons: [],
      couponMode: false,
      finalPrice: 0,
      addrModalVisibility: false,
      infoModalVisibility: false,
      addresses: [],
      user: {}
    }
  },
  methods: {
    addrModalShow () {
      this.addrModalVisibility = true
    },
    addrModalClose () {
      if (sessionStorage.getItem('accessToken')) {
        getMemberAddrList(sessionStorage.getItem('accessToken'))
          .then(res => { this.addresses = res.data.jsonData.addresses })
          .catch(err => {
            if (err.response.status === 401) {
              getAccessToken(sessionStorage.getItem('refreshToken'))
                .then(res => {
                  sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                })
                .catch(err => {
                  if (err.response.status === 401) {
                    this.$store.dispatch('logOut')
                    this.$router.push('/Login')
                  }
                })
            }
          })
      }
      this.addrModalVisibility = false
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
