<template>
<div class="cartMainWrap">
    <Bar :val="'장바구니'" />
    <EmptyCart v-if="products.length===0" />
    <CartCount @cartSelectAll="selectAll" @cartDeSelectAll="deSelectAll" v-if="products.length > 0" :cntInfo="[selectedItem,products.length,isCheckAll]" />
    <Product
    v-for="(p,idx) in products"
    :key="idx"
    @removeItem="removeItem"
    @selectItem="selectItem"
    @salesLimitOver="PrdtLimitModalShow"
    @soldOut="StockOutModalShow"
    @prdtCntChange="prdtCntChange"
    :index="idx"
    :product="p"
    :cartItem="cartList[idx]"
    :isChecked="selectedItem[idx]"
     />

    <PayInfo @deliveryInfoBtnClick="DeliveryModalShow" v-if="products.length > 0" :products="products" :cartList="cartList" :selectedItem="[...selectedItem]" />

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
import {getProduct, getCartItem, getAccessToken, removeCartItem} from '@/api/index.js'

export default {
  created () {
    if (this.$store.state.isLogin) {
      // 장바구니 목록 가져와야함
      getCartItem(sessionStorage.getItem('accessToken'))
        .then(cartRes => {
          let baskets = cartRes.data.jsonData.baskets
          if (baskets) {
            for (const c of baskets) {
              this.selectedItem.push(true)
              getProduct(c.prdtSysId)
                .then(res => {
                  let item = {...res.data.jsonData.product, optioninfo: res.data.jsonData.normalOptions, productOptions: c.productOptions, basketSysId: c.basketSysId, cnt: 0}
                  if (c.basketQty === 0) {
                    for (const o of c.productOptions) {
                      item.cnt += o.optionQty
                    }
                  } else {
                    item.cnt = c.basketQty
                  }

                  this.products.push(item)
                })
                .catch(err => {
                  console.log(err)
                })
            }
          }
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
    } else {
      let cartList = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
      this.cartList = cartList
      if (cartList) {
        for (const c of cartList) {
          this.selectedItem.push(true)
          getProduct(c.prdtSysId)
            .then(res => {
              this.products.push({...res.data.jsonData.product, normalOptions: res.data.jsonData.normalOptions})
            })
            .catch(err => {
              console.log(err)
            })
        }
      }
    }
  },
  data () {
    return {
      optionPrices: [],
      products: [],
      cartList: [],
      selectedItem: [],
      modalVisiblity: false,
      DeliveryModal: false,
      CartLimitModal: false,
      PrdtLimitModal: false,
      StockOutModal: false,
      isCheckAll: true
    }
  },
  components: {
    Bar, EmptyCart, CartCount, Product, PayInfo, DeliveryModal, CartLimitModal, PrdtLimitModal, StockOutModal
  },
  methods: {
    removeItem (idx) {
      let basketSysId = this.products[idx].basketSysId
      this.products.splice(idx, 1)
      this.selectedItem.splice(idx, 1)

      if (this.$store.state.isLogin) {
        removeCartItem(sessionStorage.getItem('accessToken'), basketSysId)
          .then(res => {
          })
          .catch(err => {
            if (err.response.status === 401) {
              this.$store.dispatch('logOut')
              this.$router.push('/Login')
            }
          })
      } else {
        let cartList = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
        console.log(sessionStorage.getItem('nonMemberCartList'))
        cartList.splice(idx, 1)
        if (cartList.length > 0) {
          sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
        } else {
          sessionStorage.removeItem('nonMemberCartList')
        }
      }
    },

    selectItem (idx) {
      if (this.isCheckAll === true) {
        this.isCheckAll = false
      }

      this.selectedItem[idx] = !this.selectedItem[idx]

      if (!this.selectedItem.includes(false)) {
        this.isCheckAll = true
      }

      this.$forceUpdate()
    },

    selectAll (status) {
      for (let i = 0; i < this.selectedItem.length; i++) {
        this.selectedItem[i] = true
      }
      this.isCheckAll = status
      this.$forceUpdate()
    },

    deSelectAll (status) {
      for (let i = 0; i < this.selectedItem.length; i++) {
        this.selectedItem[i] = false
      }
      this.isCheckAll = status
      this.$forceUpdate()
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
    PrdtLimitModalShow (idx) {
      this.modalVisiblity = true
      this.PrdtLimitModal = true
    },
    PrdtLimitModalClose () {
      this.modalVisiblity = false
      this.PrdtLimitModal = false
    },
    StockOutModalShow (idx) {
      this.modalVisiblity = true
      this.StockOutModal = true
    },
    StockOutModalClose () {
      this.modalVisiblity = false
      this.StockOutModal = false
    },
    prdtCntChange (info) {
      if (this.$store.state.isLogin) { // 회원인 경우

      } else { // 비회원인 경우
        let list = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
        if (list[info[0]].basketQty) { // 옵션이 없을경우
          list[info[0]].basketQty = info[1]
          sessionStorage.setItem('nonMemberCartList', JSON.stringify(list))
        } else { // 옵션이 있을경우

        }
      }
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
  opacity: 0.5;
  width: 100%;
  height: 100%;
}
</style>
