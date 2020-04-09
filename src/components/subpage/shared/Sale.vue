<template>
  <div class="section_ITEM weekly_best_main">
    <h4>Sale</h4>
    <ul class="box_best_item">
      <SaleEntity v-for="product in products" :key="product.prdtSysId" :product="product" />
      <li class="item noItem" v-if="products.length === 0">세일 상품이 없습니다.</li>
      <!-- <li class="item">
        <button class="like"><span class="ir">좋아요 버튼</span></button>
        <router-link to=""  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url(/static/images/temp_weekly_01.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <h5>매일매일, 싱그러움을 입다</h5>
              <p>당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디솝을 만나보세요.</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[삭스어필] INAP artist</dt>
              <dd>12,500원<span class="c_them">25%</span></dd>
            </dl>
          </div>
        </router-link>
      </li>
      <li class="item">
        <button class="like"><span class="ir">좋아요 버튼</span></button>
        <router-link to=""  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <h5>감성을 깨우는 컬러로 일상을 특별한 SCENE으로</h5>
              <p>당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디솝을 만나보세요.</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[웨이크메이크] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</dt>
              <dd>32,500원<span class="c_them">25%</span></dd>
            </dl>
          </div>
        </router-link>
      </li>
      <li class="item">
        <button class="like"><span class="ir">좋아요 버튼</span></button>
        <router-link to=""  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url(/static/images/temp_weekly_03.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <h5>사계절을 그대로 담은</h5>
              <p>당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디솝을 만나보세요.</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[하루노유키] 겹겹이 구워낸 바움쿠헨 피크닉</dt>
              <dd>12,500원<span class="c_them">25%</span></dd>
            </dl>
          </div>
        </router-link>
      </li>
      <li class="item">
        <button class="like on"><span class="ir">좋아요 버튼</span></button>
        <router-link to=""  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url(/static/images/temp_weekly_04.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <h5>역사가 담긴 빈티지함</h5>
              <p>프랑스를 대표하는 토탈 라이프스타일 브랜드 '벤시몽'<br/>그 컬러풀한 패션&amp;홈데코 아이템에 반하다.</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[벤시몽] B LOGO OVER MTM (UNISEX) - VIOLET</dt>
              <dd>12,500원<span class="c_them">25%</span></dd>
            </dl>
          </div>
        </router-link>
      </li>
      <li class="item">
        <button class="like"><span class="ir">좋아요 버튼</span></button>
        <router-link to=""  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url(/static/images/temp_weekly_05.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <h5>감성을 깨우는 컬러로 일상을 특별한 SCENE으로</h5>
              <p>당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디솝을 만나보세요.</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[웨이크메이크] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</dt>
              <dd>32,500원<span class="c_them">25%</span></dd>
            </dl>
          </div>
        </router-link>
      </li>
      <li class="item">
        <button class="like"><span class="ir">좋아요 버튼</span></button>
        <router-link to=""  class="link_goods">
          <div class="img_box" :style="{backgroundImage:'url(/static/images/temp_weekly_06.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
            <div class="txtBox">
              <div class="btn_movie">
                <img src="../../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <h5>시그니처 네일_시럽하트</h5>
              <p>당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디솝을 만나보세요.</p>
            </div>
          </div>
          <div class="txtBox">
            <dl>
              <dt>[시럽하트] 시그니처 네일</dt>
              <dd>12,500원<span class="c_them">25%</span></dd>
            </dl>
          </div>
        </router-link>
      </li> -->
    </ul>
   </div>
</template>

<script>
import SaleEntity from './SaleEntity'
import {getSaleProduct} from '@/api/index.js'

export default {
  created () {
    getSaleProduct()
      .then(res => {
        this.products = res.data.jsonData.products
      })
      .catch(err => {
        console.log(err)
      })
  },
  components: {
    SaleEntity
  },
  data () {
    return {
      products: []
    }
  },

  name: 'Sale'
}
</script>

<style>
</style>
