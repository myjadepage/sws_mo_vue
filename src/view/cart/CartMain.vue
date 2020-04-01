<template>
<div class="cartMainWrap">
    <Bar :val="'장바구니'" />
    <EmptyCart v-if="products.length===0" />
    <CartCount @cartSelectAll="selectAll" @cartDeSelectAll="deSelectAll" @selectedDelete="selectedDelete" v-if="products.length > 0" :cntInfo="[selectedItem,products.length,isCheckAll]" />
    <Product
    v-for="(p,idx) in products"
    :key="idx"
    @removeItem="removeItem"
    @selectItem="selectItem"
    @salesLimitOver="PrdtLimitModalShow"
    @soldOut="StockOutModalShow"
    @prdtCntChange="prdtCntChange"
    @prdtPrice="prdtPrices"
    :index="idx"
    :product="p"
    :isChecked="selectedItem[idx]"
     />

    <PayInfo @deliveryInfoBtnClick="DeliveryModalShow" v-if="products.length > 0" :prices="[...prices]" :products="[...products]" :selectedItem="[...selectedItem]" />

    <div v-if="modalVisiblity" class="modalSection">
        <div class="darkFilter"></div>
        <DeliveryModal v-if="DeliveryModal" @deliveryClose="DeliveryModalClose" />
        <CartLimitModal v-if="CartLimitModal" @CartLimitClose="CartLimitModalClose" />
        <PrdtLimitModal v-if="PrdtLimitModal" @prdtLimitClose="PrdtLimitModalClose" />
        <StockOutModal v-if="StockOutModal" @StockOutClose="StockOutModalClose" />
        <DeleteModal :title="'상품삭제'" :deleteIndex="deleteIndex" v-if="DeleteModal" @deleteClose="deleteClose" @deleteConfirm="deleteConfirm" @indexedDeleteConfirm="indexedDeleteConfirm" />
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

import {getProduct, getCartItem, getAccessToken, removeCartItem, putCartItem} from '@/api/index.js'

export default {
  created () {
    if (this.$store.state.isLogin) {
      // 장바구니 목록 가져와야함
      getCartItem(sessionStorage.getItem('accessToken'))
        .then(cartRes => {
          let cartList = cartRes.data.jsonData.baskets
          this.cartList = cartList
          console.log(cartList)

          if (cartList) {
            for (const c of cartList) {
              for (const po of c.productOptions) {
                getProduct(c.prdtSysId)
                  .then(res => {
                    let isSameGroup = false
                    for (const p of this.products) {
                      isSameGroup = p.optionGroupId === po.optionGroupId
                    }
                    if (isSameGroup) {

                    } else {
                      this.selectedItem.push(true)
                      this.products.push({
                        ...res.data.jsonData.product,
                        normalOptions: res.data.jsonData.normalOptions,
                        isAddingProduct: c.isAddingProduct,
                        isOptionNormal: c.isOptionNormal,
                        optionInfo: c.productOptions,
                        basketSysId: c.basketSysId,
                        optionGroupId: po.optionGroupId
                      }
                      )
                    }
                  })
                  .catch(err => {
                    console.log(err)
                  })
              }
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
      prices: [],
      products: [],
      cartList: [],
      selectedItem: [],
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
    removeItem (idx) {
      this.deleteIndex = idx
      this.modalVisiblity = true
      this.DeleteModal = true
    },

    indexedDeleteConfirm () {
      // if (this.$store.state.isLogin) {
      //   removeCartItem(sessionStorage.getItem('accessToken'), this.products[this.deleteIndex].basketSysId)
      //     .then(res => {
      //       this.products.splice(this.deleteIndex, 1)
      //       this.selectedItem.splice(this.deleteIndex, 1)
      //     })
      //     .catch(err => {
      //       if (err.response.status === 401) {
      //         getAccessToken(sessionStorage.getItem('refreshToken'))
      //           .then(res => {
      //             sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
      //           })
      //           .catch(err => {
      //             if (err.response.status === 401) {
      //               this.$store.dispatch('logOut')
      //               this.$router.push('/Login')
      //             }
      //           })
      //       }
      //     })
      // } else {
      //   if (this.selectedItem[this.deleteIndex]) {
      //     this.cartList.splice(this.deleteIndex, 1)
      //     this.products.splice(this.deleteIndex, 1)
      //     this.selectedItem.splice(this.deleteIndex, 1)
      //   }

      //   if (this.cartList.length > 0) {
      //     sessionStorage.setItem('nonMemberCartList', JSON.stringify(this.cartList))
      //   } else {
      //     this.selectedItem = []
      //     sessionStorage.removeItem('nonMemberCartList')
      //   }
      // }

      // this.DeleteModal = false
      // this.DeletedModal = true
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
        let cartItem = { // 빈 장바구니 아이템 객체
          prdtSysId: this.products[info[1]].prdtSysId,
          basketQty: 0,
          isOptionNormal: this.products[info[1]].isOptionNormal,
          isAddingProduct: this.products[info[1]].isAddingProduct
          // optionGroups: []
          // addingProducts: []
        }

        if (cartItem.isOptionNormal) { // 옵션이 있는 경우
          cartItem.optionGroups = []

          for (let i = 0; i < this.products[info[1]].optionInfo.length; i++) {
            const o = this.products[info[1]].optionInfo[i]

            let option = {
              optionGroupId: o.optionGroupId,
              optionQty: o.optionQty,
              procTypeCode: 1
            }
            if (info[3] === o.optionGroupId) {
              option.optionQty = info[2]
              option.procTypeCode = 3
              this.products[info[1]].optionInfo[i].optionQty = info[2]
            }

            cartItem.optionGroups.push(option)
          }
        } else { // 옵션이 없는 경우
          cartItem.basketQty = info[2]
          this.products[info[1]].basketQty = info[2]
        }

        console.log(cartItem)

        // putCartItem(sessionStorage.getItem('accessToken'), info[0], cartItem)
        //   .then(res => {
        //     console.log(res)
        //   })
        //   .catch(err => {
        //     if (err.response.status === 401) {
        //       getAccessToken(sessionStorage.getItem('refreshToken'))
        //         .then(res => {
        //           sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
        //         })
        //         .catch(err => {
        //           if (err.response.status === 401) {
        //             this.$store.dispatch('logOut')
        //             this.$router.push('/Login')
        //           }
        //         })
        //     }
        //   })
      } else { // 비회원인 경우
        let list = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
        if (list[info[0]].basketQty) { // 옵션이 없을경우
          list[info[0]].basketQty = info[1]
          this.cartList = list
          sessionStorage.setItem('nonMemberCartList', JSON.stringify(list))
        } else { // 옵션이 있을경우

        }
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
      let x = [...this.selectedItem]
      for (let i = this.selectedItem.length - 1; i >= 0; i--) {
        if (this.selectedItem[i]) {
          let basketSysId = this.products[i].basketSysId
          removeCartItem(sessionStorage.getItem('accessToken'), basketSysId)
            .then(res => {
              console.log(res)
            })
            .catch(err => {
              console.log(err)
            })

          // let cartItem = { // 빈 장바구니 아이템 객체
          //   prdtSysId: this.products[i].prdtSysId,
          //   basketQty: 0,
          //   isOptionNormal: this.products[i].isOptionNormal,
          //   isAddingProduct: this.products[i].isAddingProduct
          // // optionGroups: []
          // // addingProducts: []
          // }

          // if (cartItem.isOptionNormal) { // 옵션이 있는 경우
          //   cartItem.optionGroups = []

          //   for (let j = 0; j < this.products[i].optionInfo.length; j++) {
          //     const o = this.products[i].optionInfo[j]

          //     let option = {
          //       optionGroupId: o.optionGroupId,
          //       optionQty: o.optionQty,
          //       procTypeCode: 1
          //     }
          //     if (this.products[i].optionGroupId === o.optionGroupId) {
          //       option.procTypeCode = 4
          //     } else {
          //       continue
          //     }

          //     cartItem.optionGroups.push(option)
          //   }
          // } else { // 옵션이 없는 경우
          // }

          // putCartItem(sessionStorage.getItem('accessToken'), this.products[i].basketSysId, cartItem)
          //   .then(res => {
          //     console.log(res)
          //     this.products.splice(i, 1)
          //     this.prices.splice(i, 1)
          //     x.splice(i, 1)
          //   })
          //   .catch(err => {
          //     if (err.response.status === 401) {
          //       getAccessToken(sessionStorage.getItem('refreshToken'))
          //         .then(res => {
          //           sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
          //         })
          //         .catch(err => {
          //           if (err.response.status === 401) {
          //             this.$store.dispatch('logOut')
          //             this.$router.push('/Login')
          //           }
          //         })
          //     }
          //   })

          // console.log(cartItem)
        }
      }
      this.selectedItem = x

      if (this.$store.state.isLogin) {

      } else {

      }

      this.DeleteModal = false
      this.DeletedModal = true
    },

    deletedClose () {
      this.deleteIndex = null
      this.modalVisiblity = false
      this.DeletedModal = false
    },
    prdtPrices (info) {
      this.prices[info[0]] = info[1]
      this.$forceUpdate()
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
