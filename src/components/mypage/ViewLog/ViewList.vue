<template>
  <div class="itemList recent modifyMode" >
    <div class="listHead" :class="{'fixed': scrolled}">
      <div class="modi">
        <input type="checkbox" class="btn_all" id="btn_all" v-model="allChecked" @click="allChk" />
        <label for="btn_all">전체선택 (<span>{{selectedProducts.length > 0? selectedProducts.length:'0'}}</span>/{{items.length}}개)</label>
      </div>

      <div class="btnsWrap">
        <div class="nor">
          <button class="cancle" @click="modifyMode = true">편집</button>
        </div>
        <div class="modi">
          <button class="remove" @click="removeSelect" >선택삭제</button>
          <!-- <button class="cancle" @click="modifyMode = false">취소</button> -->
        </div>
      </div>

    </div>
    <ul>
      <li class="item" v-for="product in items" :key="product.prdtSysId">
        <div class="itemBody">
          <div class="imgBox" :style="{backgroundImage:'url('+ product.smallImageUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}">
            <input type="checkbox" :name="product.prdtSysId" :id="product.prdtSysId" @click="toggleChk(product)" :checked="product.checked" />
            <label :for="product.prdtSysId" ></label>
          </div>
          <router-link :to="`/product/${product.prdtSysId}`" class="txtBox">
            <h2 class="itemTitle">[{{product.brandName}}] {{product.name}}</h2>
          </router-link>
          <div class="itemAmount" >
            <p class="sale" v-if="product.discountRate > 0">{{product.discountRate * 100}}%</p>
            <p class="price">{{product.price}}원<span class="orgPrice">{{product.margetPrice}}</span></p>
          </div>
          <dl class="itemScore row">
            <dt><img src="../../../assets/img/ico/rates.png" alt="별점" /></dt>
            <dd>{{product.prdtStarPoint?product.prdtStarPoint:0}}</dd>
            <dt><img src="../../../assets/img/ico/like.png" alt="좋아요 갯수" /></dt>
            <dd>{{product.prdtPickCnt}}</dd>
            <dt><img src="../../../assets/img/ico/comment.png" alt="댓글 갯수" /></dt>
            <dd>{{product.prdtReviewCnt}}</dd>
          </dl>
          <div class="fullRow">
            <div class="tags">
              <p class="btn_them border" v-if="product.deliveryPriceTypeCode === 1">무료배송</p>
              <p class="btn_them border gray" v-if="product.pointRate > 0">{{product.pointRate}}%적립</p>
            </div>
            <div class="recentBtns">
              <button class="btn_like" :class="{'on':product.pickFlag===1}" @click="btnPcik(product, product.pickFlag===0 ? true : false)"><span>좋아요 누르기</span></button>
              <button class="btn_cart" :class="{'on':product.basketFlag===1}" @click="btnCart(product, product.basketFlag===0 ? true : false)"><span>장바구니에 담기</span></button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
import {setPicksList, delPicksList, getPicksList, postCartItem, removeCartItem, getCartItem, delRecentViewList} from '@/api/index'

export default {
  props: ['products'],
  data () {
    return {
      modifyMode: true,
      allChecked: false,
      selectedProducts: [],
      items: this.products,
      scrolled: false,
      pickStartIndex: 0
    }
  },
  create () {
    this.windowScrollY()
  },
  methods: {
    allChk () {
      if (this.allChecked) {
        this.selectedProducts = []
        this.items.forEach(el => {
          el.checked = false
        })
      } else {
        this.selectedProducts = [...this.products]
        this.items.forEach(el => {
          el.checked = true
        })
      }
    },
    toggleChk (product) {
      if (!this.selectedProducts.find(obj => obj.prdtSysId === product.prdtSysId)) {
        this.selectedProducts.push({
          'prdtSysId': product.prdtSysId,
          'prdtViewHistSysId': product.prdtViewHistSysId
        })
      } else {
        let el = this.selectedProducts.find(obj => obj.prdtSysId === product.prdtSysId)
        let st = this.selectedProducts.indexOf(el)
        this.selectedProducts.splice(st, 1)
      }
    },
    exchangeReqOpen () {
      this.$emit('exchangeReqOpen')
    },
    windowScrollY () {
      this.scrolled = window.scrollY > 50
    },
    btnPcik (product, boolean) {
      if (boolean) {
        setPicksList(sessionStorage.getItem('accessToken'), {'prdtSysId': product.prdtSysId})
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).pickFlag = 1
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).prdtPickCnt++
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).prdtPickSysId = res.data.jsonData.res.prdtPickSysId
            }
          })
      } else {
        delPicksList(sessionStorage.getItem('accessToken'), product.prdtPickSysId)
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).pickFlag = 0
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).prdtPickCnt--
            }
          })
      }
    },
    btnCart (product, boolean) {
      if (boolean) {
        postCartItem(sessionStorage.getItem('accessToken'), {'prdtSysId': product.prdtSysId, 'basketQty': 1, 'isOptionNormal': 0, 'isAddingProduct': 0})
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).basketFlag = 1
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).basketSysId = res.data.jsonData.res.basketSysId
            }
          })
      } else {
        removeCartItem(sessionStorage.getItem('accessToken'), product.basketSysId)
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              this.items.find(obj => obj.prdtSysId === product.prdtSysId).basketFlag = 0
            }
          })
      }
    },
    removeSelect () {
      if (this.selectedProducts.length > 0) {
        let viewStr = ''
        this.selectedProducts.forEach(obj => {
          if (viewStr.length !== 0) {
            viewStr += ','
          }
          viewStr += obj.prdtViewHistSysId
        })
        delRecentViewList(sessionStorage.getItem('accessToken'), {'prdtViewHistSysIds': viewStr})
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              for (let i = 0; i < this.selectedProducts.length; i++) {
                let el = this.items.find(obj => obj.prdtSysId === this.selectedProducts[i].prdtSysId)
                let idx = this.items.indexOf(el)
                this.items.splice(idx, 1)
              }

              this.selectedProducts = []
              this.$emit('lists', this.items)
            }
          })
      }
    }
  },
  watch: {
    selectedProducts: function () {
      if (this.selectedProducts.length === this.items.length) {
        this.allChecked = true
      } else {
        this.allChecked = false
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.windowScrollY)
    if (this.items.length > 0) {
      let pickStr = `?startIndex=${this.pickStartIndex}&rowCount=20`
      getPicksList(sessionStorage.getItem('accessToken'), pickStr)
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            let picksList = res.data.jsonData.prdtPicks
            this.pickStartIndex = res.data.jsonData.startIndex
            this.items.forEach(obj => {
              for (let i = 0; i < picksList.length; i++) {
                if (obj.prdtSysId === picksList[i].prdtSysId) {
                  obj.prdtPickSysId = picksList[i].prdtPickSysId
                }
              }
            })
          }
        })
      getCartItem(sessionStorage.getItem('accessToken'))
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            let basketsList = res.data.jsonData.baskets
            this.items.forEach(obj => {
              for (let i = 0; i < basketsList.length; i++) {
                if (obj.prdtSysId === basketsList[i].prdtSysId) {
                  obj.basketSysId = basketsList[i].basketSysId
                }
              }
            })
          }
        })
    }
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollY)
  }
}
</script>

<style>

</style>
