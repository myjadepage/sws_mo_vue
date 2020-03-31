<template>
  <div class="prList">
    <input type="radio" name="prdTab" value="영상" id="btn_movie" v-model="selectedTab" />
    <label for="btn_movie">영상</label>
    <input type="radio" name="prdTab" value="상품" id="btn_prd" v-model="selectedTab" />
    <label for="btn_prd">상품</label>

    <div class="tabCont cont_movie">
      <EmptyBlock v-if="list.movie.length===0" :param="selectedTab+'이 없습니다.'" />
      <div class="list_wrap" v-else>
        <div class="listTop">
          <p class="count">총 231개</p>
          <div class="sortWrap">
            <button class="recent on">최신순</button>
            <button class="likes">인기순</button>
          </div>
        </div>
        <ul class="list">
          <li class="item">
            <router-link to="" class="imgBox" :style="{backgroundImage:'url(/static/images/temp_brand_3.png)', backgroundSize:'cover', backgroundPosition:'50%',backgroundRepeat:'no-repeat'}"></router-link>
            <div class="txtBox">
              <p class="title">아리엘 립스틱 BGATS</p>
              <p class="description">메이크업 촬영 필수템만 들어있는 씬님의 '촬영카트</p>
              <ul class="hashTags">
                <li>해시태그</li>
                <li>3개까지</li>
                <li>메이크업촬영필수템</li>
              </ul>
              <div class="infoBox">
                <p class="price c_them">36,900원</p>
                <div class="stateBox">
                  <p class="likes">58</p>
                  <p class="views">325</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <router-link to="" class="imgBox" :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize:'cover', backgroundPosition:'50%',backgroundRepeat:'no-repeat'}"></router-link>
            <div class="txtBox">
              <p class="title">아리엘 립스틱 BGATS</p>
              <p class="description">메이크업 촬영 필수템만 들어있는 씬님의 '촬영카트</p>
              <ul class="hashTags">
                <li>해시태그</li>
                <li>3개까지</li>
                <li>메이크업촬영필수템</li>
              </ul>
              <div class="infoBox">
                <p class="price c_them">36,900원</p>
                <div class="stateBox">
                  <p class="likes">58</p>
                  <p class="views">325</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <router-link to="" class="imgBox" :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize:'cover', backgroundPosition:'50%',backgroundRepeat:'no-repeat'}"></router-link>
            <div class="txtBox">
              <p class="title">아리엘 립스틱 BGATS</p>
              <p class="description">메이크업 촬영 필수템만 들어있는 씬님의 '촬영카트</p>
              <ul class="hashTags">
                <li>해시태그</li>
                <li>3개까지</li>
                <li>메이크업촬영필수템</li>
              </ul>
              <div class="infoBox">
                <p class="price c_them">36,900원</p>
                <div class="stateBox">
                  <p class="likes">58</p>
                  <p class="views">325</p>
                </div>
              </div>
            </div>
          </li>
          <li class="item">
            <router-link to="" class="imgBox" :style="{backgroundImage:'url(/static/images/temp_brand_1.png)', backgroundSize:'cover', backgroundPosition:'50%',backgroundRepeat:'no-repeat'}"></router-link>
            <div class="txtBox">
              <p class="title">아리엘 립스틱 BGATS</p>
              <p class="description">메이크업 촬영 필수템만 들어있는 씬님의 '촬영카트</p>
              <ul class="hashTags">
                <li>해시태그</li>
                <li>3개까지</li>
                <li>메이크업촬영필수템</li>
              </ul>
              <div class="infoBox">
                <p class="price c_them">36,900원</p>
                <div class="stateBox">
                  <p class="likes">58</p>
                  <p class="views">325</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="tabCont cont_product">
      <EmptyBlock v-if="list.product.length===0" :param="selectedTab+'이 없습니다.'" />
      <div class="list_wrap" v-else>
        <div class="listTop">
          <p class="count">총 231개</p>
          <div class="sortWrap">
            <button class="recent on">최신순</button>
            <button class="likes">인기순</button>
          </div>
        </div>
        <ItemList v-bind:pageType="pageType" />

      </div>
    </div>

  </div>
</template>

<script>
import EmptyBlock from '@/components/shared/EmptyBlock'
import ItemList from '@/components/mypage/BrandProfile/ItemList'

export default {
  props: ['list'],
  data () {
    return {
      pageType: 'brand',
      selectedTab: '영상'
    }
  },
  components: {
    EmptyBlock, ItemList
  }
}
</script>

<style>

</style>
