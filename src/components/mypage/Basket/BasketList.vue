<template>
  <div class="itemList recent modifyMode" >
    <div class="listHead" :class="{'fixed': scrolled}" >
      <div class="modi">
        <input type="checkbox" class="btn_all" id="btn_all" v-model="allChecked" @click="allChk" />
        <label for="btn_all">전체선택 (<span>{{selectedProducts.length > 0? selectedProducts.length:'0'}}</span>/{{items.length}}개)</label>
      </div>

      <!-- btnsWrap은 전체선택 체크상태에서만 보이도록 -->
      <div class="btnsWrap">
        <div class="modi">
          <button class="remove" @click="removeSelect">선택삭제</button>
        </div>
      </div>
    </div>
    <ul>
      <li class="item" v-for="product in items" :key="product.prdtSysId">
        <div class="itemBody">
          <div class="imgBox" :style="{backgroundImage:'url('+ product.smallImageUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}">
            <input type="checkbox" :name="product.prdtSysId" :id="product.prdtSysId" @click="toggleChk(product.prdtSysId)" :checked="product.checked" />
            <label :for="product.prdtSysId"></label>
          </div>
          <router-link :to="`/product/${product.prdtSysId}`" class="txtBox">
            <h2 class="itemTitle">[{{product.brandName}}] {{product.name}}</h2>
          </router-link>
          <div class="itemAmount" >
            <p class="sale" v-if="product.discountRate > 0" >{{product.discountRate * 100}}%</p>
            <p class="price">{{product.price}}원<span class="orgPrice" >{{product.margetPrice}}</span></p>
          </div>
          <dl class="itemScore row" >
            <dt><img src="../../../assets/img/ico/rates.png" alt="별점" /></dt>
            <dd>{{product.prdtStarPoint?product.prdtStarPoint:0}}</dd>
            <dt><img src="../../../assets/img/ico/like.png" alt="좋아요 갯수" /></dt>
            <dd>{{product.prdtPickCnt}}</dd>
            <dt><img src="../../../assets/img/ico/comment.png" alt="댓글 갯수" /></dt>
            <dd>{{product.prdtReviewCnt}}</dd>
          </dl>
          <div class="fullRow" >
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
import { delPicksList, postCartItem, removeCartItem, getCartItem, delPicksLists } from '@/api/index.js'

export default {
  props: ['products'],
  data () {
    return {
      modifyMode: true,
      allChecked: false,
      scrolled: false,
      items: this.products,
      selectedProducts: []
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
    toggleChk (prdtSysId) {
      if (!this.selectedProducts.find(obj => obj.prdtSysId === prdtSysId)) {
        this.selectedProducts.push({
          'prdtSysId': prdtSysId
        })
      } else {
        let el = this.selectedProducts.find(obj => obj.prdtSysId === prdtSysId)
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
      delPicksList(sessionStorage.getItem('accessToken'), product.prdtPickSysId)
        .then(res => {
          if (res.data.jsonData.resultCode === '0001') {
            let i = this.items.findIndex(obj => obj.prdtSysId === product.prdtSysId)
            this.items.splice(i, 1)
            this.$emit('lists', this.items)
          }
        })
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
      if (this.selectedProducts.length > 1) {
        let listStr = ''
        this.selectedProducts.forEach(obj => {
          if (listStr.length !== 0) {
            listStr += ','
          }
          listStr += obj.prdtPickSysId
        })
        delPicksLists(sessionStorage.getItem('accessToken'), {'prdtPickSysIds': listStr})
          .then(res => {
            console.log(res)
            if (res.data.jsonData.resultCode === '0001') {
              this.items = []
              this.selectedProducts = []
              this.$emit('lists', this.items)
            }
          })
      } else if (this.selectedProducts.length === 1) {
        let delItem = this.items.find(obj => obj.prdtSysId === this.selectedProducts[0].prdtSysId).prdtPickSysId
        delPicksList(sessionStorage.getItem('accessToken'), delItem)
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              let i = this.items.findIndex(obj => obj.prdtSysId === this.selectedProducts[0].prdtSysId)
              this.items.splice(i, 1)
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

    this.items.forEach(obj => {
      obj.pickFlag = 1
    })
    this.items = [...this.items]

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
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollY)
  }
}
</script>

<style>

</style>
