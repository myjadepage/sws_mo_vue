<template>
  <div class="itemList recent modifyMode" >
    <div class="listHead" :class="{'fixed': scrolled}" >
      <div class="modi">
        <input type="checkbox" class="btn_all" id="btn_all" v-model="allChecked" @click="allChk" />
        <label for="btn_all">전체선택 (<span>2</span>/50개)</label>
      </div>

      <!-- btnsWrap은 전체선택 체크상태에서만 보이도록 -->
      <div class="btnsWrap">
        <div class="modi">
          <button class="remove" >선택삭제</button>
        </div>
      </div>
    </div>
    <ul>
      <li class="item">
        <div class="itemBody">
          <div class="imgBox">
            <input type="checkbox" name="item_0" id="item_0" v-model="products.a.checked" />
            <label for="item_0"></label>
          </div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
          </router-link>
          <div class="itemAmount" >
            <p class="sale" >25</p>
            <p class="price">32,500원<span class="orgPrice" >132,500</span></p>
          </div>
          <dl class="itemScore row" >
            <dt><img src="../../../assets/img/ico/rates.png" alt="별점" /></dt>
            <dd>4.5</dd>
            <dt><img src="../../../assets/img/ico/like.png" alt="좋아요 갯수" /></dt>
            <dd>2</dd>
            <dt><img src="../../../assets/img/ico/comment.png" alt="댓글 갯수" /></dt>
            <dd>232</dd>
          </dl>
          <div class="fullRow" >
            <div class="tags">
              <p class="btn_them border">무료배송</p>
              <p class="btn_them border gray">5%적립</p>
            </div>
            <div class="recentBtns">
              <button class="btn_like" :class="[ products.a.like ? 'on' :'' ]"><span>좋아요 누르기</span></button>
              <button class="btn_cart" :class="[ products.a.basket ? 'on' :'' ]"><span>장바구니에 담기</span></button>
            </div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="itemBody">
          <div class="imgBox">
            <input type="checkbox" name="item_1" id="item_1" v-model="products.b.checked"  />
            <label for="item_1"></label>
          </div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
          </router-link>
          <div class="itemAmount" >
            <p class="price">32,500원</p>
          </div>
          <dl class="itemScore row" >
            <dt><img src="../../../assets/img/ico/rates.png" alt="별점" /></dt>
            <dd>4.5</dd>
            <dt><img src="../../../assets/img/ico/like.png" alt="좋아요 갯수" /></dt>
            <dd>2</dd>
            <dt><img src="../../../assets/img/ico/comment.png" alt="댓글 갯수" /></dt>
            <dd>232</dd>
          </dl>
          <div class="fullRow">
            <div class="tags">
              <p class="btn_them border">무료배송</p>
            </div>
            <div class="recentBtns">
              <button class="btn_like" :class="[ products.b.like ? 'on' :'' ]"><span>좋아요 누르기</span></button>
              <button class="btn_cart" :class="[ products.b.basket ? 'on' :'' ]"><span>장바구니에 담기</span></button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  props: ['pageType', 'tabState'],
  data () {
    return {
      type: this.pageType,
      modifyMode: true,
      allChecked: false,
      scrolled: false,
      products: {
        'a': {
          checked: false,
          like: true,
          basket: false
        },
        'b': {
          checked: false,
          like: false,
          basket: true
        },
        'c': {
          checked: false,
          like: false,
          basket: true
        }
      }
    }
  },
  create () {
    this.windowScrollY()
  },
  methods: {
    allChk () {
      for (let product in this.products) {
        this.products[product].checked = !this.allChecked
      }
    },
    exchangeReqOpen () {
      this.$emit('exchangeReqOpen')
    },
    windowScrollY () {
      this.scrolled = window.scrollY > 50
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
