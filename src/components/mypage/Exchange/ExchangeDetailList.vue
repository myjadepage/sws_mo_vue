<template>
  <div class="itemList" :class="{'recent': type==='basket' || type==='brand', 'modifyMode':modifyMode}" >
    <div class="listHead" v-if="type!=='history'" >
      <div class="nor">
        <p>전체 (50개)</p>
      </div>
      <div class="modi">
        <input type="checkbox" class="btn_all" id="btn_all" v-model="allChecked" @click="allChk" />
        <label for="btn_all">전체선택 (<span>2</span>/50개)</label>
      </div>

      <!-- btnsWrap은 전체선택 체크상태에서만 보이도록 -->
      <div class="btnsWrap">
        <div class="nor">
          <button class="cancle" @click="modifyMode = true">편집</button>
        </div>
        <div class="modi">
          <button class="remove" >삭제</button>
          <!-- <button class="cancle" @click="modifyMode = false">취소</button> -->
        </div>
      </div>
    </div>
    <ul>
      <li class="item">
        <div class="itemHead" v-if="type!='basket'">
          <p class="date">2019.03.15 18:43</p>
          <p class="state c_them" v-if="type==='history'">배송중</p>
          <p class="state c_them" v-if="type==='exchange'">취소완료</p>
          <p class="state c_them" v-if="type==='review' && !tabState">배송완료</p>
        </div>
        <div class="itemBody">
          <div class="imgBox">
            <input type="checkbox" name="item_0" id="item_0" v-model="products.a.checked" />
            <label for="item_0" v-if="type!=='history'"></label>
          </div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
            <p class="itemOption" v-if="type!='basket'">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </router-link>
          <div class="itemAmount"  v-if="type!='exchange' && type!='review'">
            <p class="sale" v-if="type==='basket'">25</p>
            <p class="price">32,500원<span class="orgPrice" v-if="type==='basket'">132,500</span></p>
          </div>
          <div class="row ibBtns"  v-if="type==='history'">
            <router-link to="/tracking/detail" class="btn_them border col3 btn-first">배송조회</router-link>
          </div>
          <dl class="itemScore row" v-if="type==='basket'">
            <dt><img src="../../../assets/img/ico/rates.png" alt="별점" /></dt>
            <dd>4.5</dd>
            <dt><img src="../../../assets/img/ico/like.png" alt="좋아요 갯수" /></dt>
            <dd>2</dd>
            <dt><img src="../../../assets/img/ico/comment.png" alt="댓글 갯수" /></dt>
            <dd>232</dd>
          </dl>
          <div class="fullRow" v-if="type==='basket'">
            <div class="tags">
              <p class="btn_them border">무료배송</p>
              <p class="btn_them border gray">5%적립</p>
            </div>
            <div class="recentBtns">
              <button class="btn_like" :class="[ products.a.like ? 'on' :'' ]"><span>좋아요 누르기</span></button>
              <button class="btn_cart" :class="[ products.a.basket ? 'on' :'' ]"><span>장바구니에 담기</span></button>
            </div>
          </div>
          <div class="row ibBtns"  v-if="type==='review' && !tabState">
            <router-link to="/ReviewWrite" class="btn_them border col1 btn-first">리뷰작성</router-link>
          </div>
          <div class="reviewBox" v-if="type==='review' && tabState">
            <div class="stars">
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="" />
            </div>
            <p class="reviewPara">웜톤이라 21호가 맞을까 고민했는데, 다행히 제 피부에 잘~ 맞네요~ 역시 믿고 쓰는 블리블리 역시 믿고 쓰는 블리블리</p>
            <div class="icos">
              <div class="goodBox">
                <p class="good">추천 9</p>
                <p class="bad">비추천 9</p>
              </div>
              <div class="meadiaBox">
                <p class="pic"><span>이미지</span>+4</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="item">
        <div class="itemHead" v-if="type!='basket'">
          <p class="date">2019.03.15 18:43</p>
          <p class="state" v-if="type==='history'">배송완료</p>
          <p class="state c_them" v-if="type==='exchange'">환불완료</p>
          <p class="state c_them" v-if="type==='review' && !tabState">배송완료</p>
        </div>
        <div class="itemBody">
          <div class="imgBox">
            <input type="checkbox" name="item_1" id="item_1" v-model="products.b.checked"  />
            <label for="item_1" v-if="type!=='history'"></label>
          </div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
            <p class="itemOption" v-if="type!='basket'">[옵션명1] LRS200007G 작은원석</p>
          </router-link>
          <div class="itemAmount"  v-if="type!='exchange' && type!='review'">
            <p class="price">32,500원</p>
          </div>
          <div class="row ibBtns"  v-if="type==='history'">
            <router-link to="/tracking/detail" class="btn_them border col3 btn-first">배송조회</router-link>
            <button class="btn_them border col3 gray" @click="exchangeReqOpen">교환요청</button>
            <button class="btn_them border col3 btn-last gray">반품요청</button>
            <router-link to="" class="btn_them border col2 btn-first gray">받았습니다</router-link>
            <router-link to="/ReviewWrite" class="btn_them border col2 btn-last gray">리뷰작성</router-link>
          </div>
          <dl class="itemScore row" v-if="type==='basket'">
            <dt><img src="../../../assets/img/ico/rates.png" alt="별점" /></dt>
            <dd>4.5</dd>
            <dt><img src="../../../assets/img/ico/like.png" alt="좋아요 갯수" /></dt>
            <dd>2</dd>
            <dt><img src="../../../assets/img/ico/comment.png" alt="댓글 갯수" /></dt>
            <dd>232</dd>
          </dl>
          <div class="fullRow" v-if="type==='basket'">
            <div class="tags">
              <p class="btn_them border">무료배송</p>
            </div>
            <div class="recentBtns">
              <button class="btn_like" :class="[ products.b.like ? 'on' :'' ]"><span>좋아요 누르기</span></button>
              <button class="btn_cart" :class="[ products.b.basket ? 'on' :'' ]"><span>장바구니에 담기</span></button>
            </div>
          </div>
          <div class="row ibBtns"  v-if="type==='review' && !tabState">
            <router-link to="/ReviewWrite" class="btn_them border col1 btn-first">리뷰작성</router-link>
          </div>
          <div class="reviewBox" v-if="type==='review' && tabState">
            <div class="stars">
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="" />
            </div>
            <p class="reviewPara">좋습니다!</p>
            <div class="icos">
              <div class="goodBox">
                <p class="good">추천 9</p>
                <p class="bad">비추천 9</p>
              </div>
              <div class="meadiaBox">
                <p class="mov"><span>영상</span>+1</p>
                <p class="pic"><span>이미지</span>+4</p>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="item" v-if="type!='basket'">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state" v-if="type==='history'">환불완료</p>
          <p class="state c_them" v-if="type==='exchange'">교환완료</p>
          <p class="state c_them" v-if="type==='review' && !tabState">배송완료</p>
        </div>
        <div class="itemBody">
          <div class="imgBox">
            <input type="checkbox" name="item_2" id="item_2" v-model="products.c.checked"  />
            <label for="item_2" v-if="type!=='history'"></label>
          </div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석</p>
          </router-link>
          <div class="itemAmount" v-if="type==='history'">
            <p class="price">32,500원 / 1개</p>
          </div>
          <div class="row ibBtns"  v-if="type==='review' && !tabState">
            <router-link to="/ReviewWrite" class="btn_them border col1 btn-first">리뷰작성</router-link>
          </div>
          <div class="reviewBox" v-if="type==='review' && tabState">
            <div class="stars">
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_full.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="" />
            </div>
            <div class="icos">
              <div class="goodBox">
                <p class="good">추천 9</p>
                <p class="bad">비추천 9</p>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="item"  v-if="type==='history'">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state">배송 준비중</p>
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </router-link>
          <div class="itemAmount">
            <p class="price">32,500원 / 1개</p>
          </div>
          <div class="row ibBtns">
            <router-link to="" class="btn_them border col3 btn-first gray">구매취소</router-link>
          </div>
        </div>
      </li>
    </ul>
    <div class="fNotiBox" v-if="type==='review' && !tabState">
      <p>최근 6개월 이내 구매내역 중 리뷰가 작성되지 않은 상품내역을 확인하실 수 있습니다.<br/>판매종료/중지된 상품내역은 노출되지 않습니다.</p>
    </div>
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
  methods: {
    allChk () {
      for (let product in this.products) {
        this.products[product].checked = !this.allChecked
      }
    },
    exchangeReqOpen () {
      this.$emit('exchangeReqOpen')
    }
  }
}
</script>

<style>

</style>
