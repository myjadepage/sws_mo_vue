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
          <button class="remove" >선택삭제</button>
          <!-- <button class="cancle" @click="modifyMode = false">취소</button> -->
        </div>
      </div>

    </div>
    <ul>
      <li class="item" v-for="product in items" :key="product.prdtSysId">
        <div class="itemBody">
          <div class="imgBox" :style="{backgroundImage:'url('+ product.smallImageUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}">
            <input type="checkbox" :name="product.prdtSysId" :id="product.prdtSysId" @click="toggleChk(product.prdtSysId)" :checked="product.checked" />
            <label :for="product.prdtSysId" ></label>
          </div>
          <router-link :to="`/product/${product.prdtSysId}`" class="txtBox">
            <h2 class="itemTitle">[{{product.brandName}}] {{product.name}}</h2>
          </router-link>
          <div class="itemAmount" >
            <p class="sale">{{product.discountRate * 100}}</p>
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
              <button class="btn_like" :class="{'on':product.pickFlag===1}" ><span>좋아요 누르기</span></button>
              <button class="btn_cart" :class="{'on':product.basketFlag===1}"><span>장바구니에 담기</span></button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: ['products'],
  data () {
    return {
      modifyMode: true,
      allChecked: false,
      selectedProducts: [],
      items: this.products,
      scrolled: false
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
        // for (let product in this.items) {
        //   product.checked = 'checked'
        // }
      }
      // for (let product in this.products) {
      //   this.products[product].checked = !this.allChecked
      // }
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
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollY)
  }
}
</script>

<style>

</style>
