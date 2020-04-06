<template>
<div class="cartMainWrap">
    <Bar :val="'장바구니'" />
    <EmptyCart v-if="products.length===0" />
    <CartCount @cartSelectAll="selectAll" @cartDeSelectAll="deSelectAll" @selectedDelete="selectedDelete" v-if="products.length > 0" :cntInfo="[products,isCheckAll]" />
    <Product
    v-for="(p,idx) in products"
    :key="idx"
    @selectItem="selectItem"
    @salesLimitOver="PrdtLimitModalShow"
    @soldOut="StockOutModalShow"
    @sigleItemCntChange="singleItemChange"
    @multiOptionCntChange="multiItemChange"
    :index="idx"
    :product="{...p}"
     />

    <PayInfo @deliveryInfoBtnClick="DeliveryModalShow" v-if="products.length > 0"
      :products="[...products]"
      />

    <div v-if="modalVisiblity" class="modalSection">
        <div class="darkFilter"></div>
        <DeliveryModal v-if="DeliveryModal" @deliveryClose="DeliveryModalClose" />
        <CartLimitModal v-if="CartLimitModal" @CartLimitClose="CartLimitModalClose" />
        <PrdtLimitModal v-if="PrdtLimitModal" @prdtLimitClose="PrdtLimitModalClose" />
        <StockOutModal v-if="StockOutModal" @StockOutClose="StockOutModalClose" />
        <DeleteModal :title="'상품삭제'"  v-if="DeleteModal" @deleteClose="deleteClose" @deleteConfirm="deleteConfirm" />
        <DeletedModal :title="'삭제완료'" v-if="DeletedModal" @deletedClose="deletedClose" />
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
import DeleteModal from '@/components/cartpage/Modal/BasketDeleteModal'
import DeletedModal from '@/components/cartpage/Modal/BasketDeleted'

import {getProduct, getCartItem, getAccessToken, putCartItem} from '@/api/index.js'

export default {
  created () {
    if (this.$store.state.isLogin) {
      // 장바구니 목록 가져와야함
      getCartItem(sessionStorage.getItem('accessToken'))
        .then(cartRes => {
          let cartList = cartRes.data.jsonData.baskets

          if (cartList) {
            for (const c of cartList) {
              getProduct(c.prdtSysId)
                .then(res => {
                  let item = {
                    ...res.data.jsonData.product,
                    normalOptions: res.data.jsonData.normalOptions,
                    isAddingProduct: c.isAddingProduct,
                    isOptionNormal: c.isOptionNormal,
                    optionInfo: [],
                    basketSysId: c.basketSysId,
                    basketQty: c.basketQty,
                    isChecked: true
                  }

                  if (c.productOptions) {
                    item.optionInfo = c.productOptions
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

      if (cartList) {
        for (let i = 0; i < cartList.length; i++) {
          const c = cartList[i]

          cartList[i].basketSysId = 999 - i

          let item = {
            isAddingProduct: c.isAddingProduct,
            isOptionNormal: c.isOptionNormal,
            optionInfo: [],
            basketSysId: c.basketSysId,
            basketQty: c.basketQty,
            isChecked: true

          }

          if (c.optionGroups) {
            for (const og of c.optionGroups) {
              for (const po of og.productOptions) {
                item.optionInfo.push({
                  ...po, optionGroupId: og.optionGroupId, optionQty: og.optionQty, price: po.price
                })
              }
            }
          }

          getProduct(c.prdtSysId)
            .then(res => {
              item = {
                ...item,
                ...res.data.jsonData.product
              }

              this.products.push(item)
            })
            .catch(err => {
              console.log(err)
            })
        }
        sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
      }
    }
  },
  data () {
    return {
      products: [],
      modalVisiblity: false,
      DeliveryModal: false,
      CartLimitModal: false,
      PrdtLimitModal: false,
      StockOutModal: false,
      DeleteModal: false,
      DeletedModal: false,
      isCheckAll: true,
      deleteIndex: null
    }
  },
  components: {
    Bar, EmptyCart, CartCount, Product, PayInfo, DeliveryModal, CartLimitModal, PrdtLimitModal, StockOutModal, DeleteModal, DeletedModal
  },
  methods: {
    selectItem (idx) {
      if (this.isCheckAll === true) {
        this.isCheckAll = false
      }

      this.products[idx].isChecked = !this.products[idx].isChecked

      let isAllSelect = true
      for (const p of this.products) {
        if (p.isChecked === false) {
          isAllSelect = false
        }
      }

      if (isAllSelect) {
        this.isCheckAll = true
      }

      this.$forceUpdate()
    },

    selectAll (status) {
      for (let i = 0; i < this.products.length; i++) {
        this.products[i].isChecked = true
      }
      this.isCheckAll = status
      this.$forceUpdate()
    },

    deSelectAll (status) {
      for (let i = 0; i < this.products.length; i++) {
        this.products[i].isChecked = false
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
    singleItemChange (info) {
      if (this.$store.state.isLogin) { // 회원인 경우
        let cartItem = {}

        for (const p of this.products) {
          if (p.basketSysId === info[0]) {
            cartItem.prdtSysId = p.prdtSysId
            cartItem.basketQty = Number(p.basketQty)
            cartItem.isOptionNormal = p.isOptionNormal
            cartItem.isAddingProduct = p.isAddingProduct

            if (p.isOptionNormal) {
              cartItem.optionGroups = []
              for (const o of p.optionInfo) {
                cartItem.optionGroups.push({
                  procTypeCode: 3,
                  optionGroupId: o.optionGroupId,
                  optionQty: Number(o.optionQty)
                })
              }
            } else {
              cartItem.basketQty = Number(info[1])
            }
          }
        }

        putCartItem(sessionStorage.getItem('accessToken'), info[0], cartItem)
          .then(res => {
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
      } else { // 비회원인 경우
        let cartList = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
        let targetIdx = 0
        for (let i = 0; i < cartList.length; i++) {
          if (info[0] === cartList[i].basketSysId) {
            targetIdx = i
          }
        }
        if (cartList[targetIdx].isOptionNormal) {
          for (let i = 0; i < cartList[targetIdx].optionGroups.length; i++) {
            cartList[targetIdx].optionGroups[i].optionQty = Number(info[1])
          }
        } else {
          cartList[targetIdx].basketQty = Number(info[1])
        }

        sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
      }
    },
    multiItemChange (info) {
      if (this.$store.state.isLogin) { // 회원인 경우
        let cartItem = {}

        for (const p of this.products) {
          if (p.basketSysId === info[0]) {
            cartItem.prdtSysId = p.prdtSysId
            cartItem.basketQty = Number(p.basketQty)
            cartItem.isOptionNormal = p.isOptionNormal
            cartItem.isAddingProduct = p.isAddingProduct

            if (p.isOptionNormal) {
              cartItem.optionGroups = []
              for (const o of p.optionInfo) {
                cartItem.optionGroups.push({
                  procTypeCode: 3,
                  optionGroupId: o.optionGroupId,
                  optionQty: Number(o.optionQty)
                })
              }
            } else {
              cartItem.basketQty = Number(info[1])
            }
          }
        }

        putCartItem(sessionStorage.getItem('accessToken'), info[0], cartItem)
          .then(res => {
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
      } else { // 비회원인 경우
        let cartList = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
        let targetIdx = 0
        for (let i = 0; i < cartList.length; i++) {
          if (info[0] === cartList[i].basketSysId) {
            targetIdx = i
          }
        }
        for (let i = 0; i < cartList[targetIdx].optionGroups.length; i++) {
          const o = cartList[targetIdx].optionGroups[i]
          if (o.optionGroupId === info[1][0]) {
            cartList[targetIdx].optionGroups[i].optionQty = Number(info[1][1])
          }
        }

        sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
      }
    },

    selectedDelete () {
      this.modalVisiblity = true
      this.DeleteModal = true
    },

    deleteClose () {
      this.modalVisiblity = false
      this.DeleteModal = false
    },
    deleteConfirm () {
      if (this.$store.state.isLogin) {
      } else {
        this.DeleteModal = false
        this.DeletedModal = true
      }
    },

    deletedClose () {
      this.deleteIndex = null
      this.modalVisiblity = false
      this.DeletedModal = false

      // location.reload()
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

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5ms;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
