<template>
<div class="cartMainWrap">
    <Bar :val="'장바구니'" />
      <!-- <Loading
      :active.sync="isProductLoading"
      :is-full-page="false"
      :heigth="50"
      :width="50"
        /> -->
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
    @prdtPrice="calcPrdtPrice"
    :index="idx"
    :product="{...p}"
     />

    <PayInfo
    v-if="products.length > 0"
    @deliveryInfoBtnClick="DeliveryModalShow"
    @selectedItemBuy="selectedItemBuyClick"
    @allItemBuy="allItemBuyClick"
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
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import {getCartItem, getAccessToken, putCartItem, removeCartList} from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 장바구니'
  },
  created () {
    if (this.$store.state.isLogin) {
      // 장바구니 목록 가져와야함
      getCartItem(sessionStorage.getItem('accessToken'))
        .then(cartRes => {
          let cartList = cartRes.data.jsonData.baskets
          if (cartList) {
            this.cartSize = cartList.length
          }
          if (cartList) {
            cartList.forEach(c => {
              this.products.push({...c, isChecked: true})
            })
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
        this.cartSize = cartList.length
      }
      if (cartList) {
        for (let i = 0; i < cartList.length; i++) {
          const c = cartList[i]
          let item = {
            ...c,
            productOptions: [],
            isChecked: true
          }

          if (c.optionGroups) {
            for (const og of c.optionGroups) {
              for (const po of og.productOptions) {
                item.productOptions.push({
                  ...po, optionGroupId: og.optionGroupId, optionQty: og.optionQty, price: po.price
                })
              }
            }
          }

          this.products.push(item)
        }
        sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
      }
    }
  },
  beforeMount () {
    this.isProductLoading = !(this.cartSize === this.products.length)
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
      isProductLoading: true,
      cartSize: 0
    }
  },
  components: {
    Bar, EmptyCart, CartCount, Product, PayInfo, DeliveryModal, CartLimitModal, PrdtLimitModal, StockOutModal, DeleteModal, DeletedModal, Loading
  },
  methods: {
    calcPrdtPrice (info) {
      this.products[info[0]].totalPrice = info[1]
    },

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

        for (let i = 0; i < this.products.length; i++) {
          const p = this.products[i]
          if (p.basketSysId === info[0]) {
            cartItem.prdtSysId = p.prdtSysId
            cartItem.basketQty = Number(p.basketQty)
            cartItem.isOptionNormal = p.isOptionNormal
            cartItem.isAddingProduct = p.isAddingProduct

            if (p.isOptionNormal) {
              cartItem.optionGroups = []
              for (const o of p.productOptions) {
                cartItem.optionGroups.push({
                  procTypeCode: 3,
                  optionGroupId: o.optionGroupId,
                  optionQty: Number(o.optionQty)
                })
              }
            } else {
              this.products[i].basketQty = Number(info[1])
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
        for (let i = 0; i < this.products.length; i++) {
          if (info[0] === this.products[i].basketSysId && !this.products[i].isOptionNormal) {
            this.products[i].basketQty = Number(info[1])
          }
        }

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
      this.$forceUpdate()
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
              for (const o of p.productOptions) {
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
      this.$forceUpdate()
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
        let basketSysIds = []
        for (let i = this.products.length - 1; i >= 0; i--) {
          const p = this.products[i]
          if (p.isChecked) {
            basketSysIds.push(p.basketSysId)
          }
        }

        let item = {
          basketSysIds: basketSysIds.join()
        }

        removeCartList(sessionStorage.getItem('accessToken'), item)
          .then(res => {
            for (let i = this.products.length - 1; i >= 0; i--) {
              const p = this.products[i]
              if (basketSysIds.includes(p.basketSysId)) {
                this.products.splice(i, 1)
              }
            }

            this.DeleteModal = false
            this.DeletedModal = true
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

        for (let i = this.products.length - 1; i >= 0; i--) {
          const p = this.products[i]

          if (p.isChecked) {
            for (let j = cartList.length - 1; j >= 0; j--) {
              const c = cartList[j]
              if (c.basketSysId === p.basketSysId) {
                cartList.splice(j, 1)
              }
            }
            this.products.splice(i, 1)
          }
        }

        sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))

        this.DeleteModal = false
        this.DeletedModal = true
      }
    },

    deletedClose () {
      this.deleteIndex = null
      this.modalVisiblity = false
      this.DeletedModal = false
    },
    selectedItemBuyClick () {
      let list = []
      let op = []
      for (const p of this.products) {
        if (p.isChecked) {
          list.push(p)
          let map = new Map()

          if (p.isOptionNormal) {
            for (const o of p.productOptions) {
              if (!map.has(o.optionGroupId)) {
                map.set(o.optionGroupId, [])
              }
              map.get(o.optionGroupId).push(o)
            }
          }

          let x = []
          if (!p.isOptionNormal) {
            x = [{
              count: p.basketQty,
              price: p.price,
              contentName: '',
              contentGroup: [{
                name: p.name,
                prdtNormalOptionSysId: null,
                price: null
              }]
            }]
          }

          for (const m of map.values()) {
            let item = {
              count: 0,
              price: 0,
              contentName: '',
              contentGroup: []
            }

            for (const o of m) {
              item.count = o.optionQty
              item.price += o.price
              item.contentName += o.optionKeyName
              item.contentGroup.push({
                name: o.optionKeyName,
                prdtNormalOptionSysId: o.prdtNormalOptionSysId,
                price: o.price
              })
            }

            x.push(item)
          }
          op.push(x)
        }
      }

      sessionStorage.setItem('products', JSON.stringify(list))
      sessionStorage.setItem('selectedOptions', JSON.stringify(op))

      this.$router.push('/buyproduct')
    },
    allItemBuyClick () {
      let op = []
      for (const p of this.products) {
        let map = new Map()
        if (p.isOptionNormal) {
          for (const o of p.productOptions) {
            if (!map.has(o.optionGroupId)) {
              map.set(o.optionGroupId, [])
            }
            map.get(o.optionGroupId).push(o)
          }
        }

        let x = []
        if (!p.isOptionNormal) {
          x = [{
            count: p.basketQty,
            price: p.price,
            contentName: '',
            contentGroup: [{
              name: p.name,
              prdtNormalOptionSysId: null,
              price: null
            }]
          }]
        }

        for (const m of map.values()) {
          let item = {
            count: 0,
            price: 0,
            contentName: '',
            contentGroup: []
          }

          for (const o of m) {
            item.count = o.optionQty
            item.price += o.price
            item.contentName += o.optionKeyName
            item.contentGroup.push({
              name: o.optionKeyName,
              prdtNormalOptionSysId: o.prdtNormalOptionSysId,
              price: o.price
            })
          }

          x.push(item)
        }
        op.push(x)
      }

      sessionStorage.setItem('products', JSON.stringify(this.products))
      sessionStorage.setItem('selectedOptions', JSON.stringify(op))

      this.$router.push('/buyproduct')
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
  z-index: 101;
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
