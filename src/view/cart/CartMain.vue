<template>
<div class="cartMainWrap">
    <Bar :val="'장바구니'" />
    <EmptyCart v-if="products.length===0" />
    <CartCount v-if="products.length > 0" :propsdata="[selectedProductCnt,products.length]" />
    <Product @salesLimitOver="PrdtLimitModalShow" @soldOut="StockOutModalShow" v-for="(p,idx) in products" :key="idx" @remove="removeItem" :index="idx" :product="p" />
    <PayInfo @deliveryInfoBtnClick="DeliveryModalShow" v-if="products.length > 0" :products="products" />

    <div v-if="modalVisiblity" class="modalSection">
        <div class="darkFilter"></div>
        <DeliveryModal v-if="DeliveryModal" @deliveryClose="DeliveryModalClose" />
        <CartLimitModal v-if="CartLimitModal" @CartLimitClose="CartLimitModalClose" />
        <PrdtLimitModal v-if="PrdtLimitModal" @prdtLimitClose="PrdtLimitModalClose" />
        <StockOutModal v-if="StockOutModal" @StockOutClose="StockOutModalClose" />
    </div>

</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import EmptyCart from '@/components/cartpage/EmptyCart'
import CartCount from '@/components/cartpage/CartCount'
import Product from '@/components/cartpage/ProductEntity'
import PayInfo from '@/components/cartpage/PaymentInfo'
import DeliveryModal from '@/components/cartpage/Modal/DeliveryModal'
import CartLimitModal from '@/components/cartpage/Modal/CartLimitOver'
import PrdtLimitModal from '@/components/cartpage/Modal/PrdtLimitOver'
import StockOutModal from '@/components/cartpage/Modal/StockOut'
import {getProductList} from '@/api/index.js'

export default {
  created () {
    getProductList()
      .then(res => {
        this.products = res.data.jsonData.products
        console.log(this.products)
      })
      .catch(err => {
        console.log(err)
      })
  },
  data () {
    return {
      products: [],
      selectedProductCnt: 0,
      modalVisiblity: false,
      DeliveryModal: false,
      CartLimitModal: false,
      PrdtLimitModal: false,
      StockOutModal: false
    }
  },
  components: {
    Bar, EmptyCart, CartCount, Product, PayInfo, DeliveryModal, CartLimitModal, PrdtLimitModal, StockOutModal
  },
  methods: {
    removeItem (idx) {
      this.products.splice(idx, 1)
    },

    DeliveryModalShow () {
      this.modalVisiblity = true
      this.DeliveryModal = true
    },
    DeliveryModalClose () {
      this.modalVisiblity = false
      this.DeliveryModal = false
    },
    CartLimitModalShow () {
      this.modalVisiblity = true
      this.CartLimitModal = true
    },
    CartLimitModalClose () {
      this.modalVisiblity = false
      this.CartLimitModal = false
    },
    PrdtLimitModalShow () {
      this.modalVisiblity = true
      this.PrdtLimitModal = true
    },
    PrdtLimitModalClose () {
      this.modalVisiblity = false
      this.PrdtLimitModal = false
    },
    StockOutModalShow () {
      this.modalVisiblity = true
      this.StockOutModal = true
    },
    StockOutModalClose () {
      this.modalVisiblity = false
      this.StockOutModal = false
    }
  }
}
</script>

<style>
.cartMainWrap{
    background-color: #f3f3f3;
}

.cartMainWrap .darkFilter{
   position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: black;
  opacity: 50%;
  width: 100%;
  height: 100%;
}
</style>
