<template>
  <div class="itemList" >
    <ul>
      <li class="item" v-for="(item, index) in list" :key="index">
        <div class="itemBody">
          <div class="imgBox" :style="{backgroundImage:'url('+ item.smallImageUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
          <router-link to="/ExchangeDetail" class="txtBox">
            <h2 class="itemTitle">[{{item.brandName}}] {{item.name}}</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더 임시</p>
          </router-link>
          <div class="row ibBtns"  v-if="!tabState">
            <router-link :to="'/ReviewWrite/' + item.prdtSysId" class="btn_them border col1 btn-first">리뷰작성</router-link>
          </div>
          <div class="reviewBox" v-if="tabState">
            <div class="stars" v-if="item.starPoint">
              <img src="../../../assets/img/ico/ico_star_full.png" alt="1점" v-for="n in item.starPoint" :key="'full'+n" />
              <img src="../../../assets/img/ico/ico_star_none.png" alt="0점" v-for="m in (5 - item.starPoint)" :key="'empty'+m" />
            </div>
            <p class="reviewPara">{{item.content ? item.content : item.oneLine}}</p>
            <div class="icos">
              <div class="goodBox">
                <p class="good">추천 {{item.recommendCnt}}</p>
                <p class="bad">비추천 {{item.deprecatedCnt}}</p>
              </div>
              <div class="meadiaBox">
                <p class="mov" v-if="item.mediaCnt"><span>영상</span>+{{item.mediaCnt}}</p>
                <p class="pic" v-if="item.photoCnt"><span>이미지</span>+{{item.photoCnt}}</p>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <div class="fNotiBox" v-if="!tabState && list.length > 0">
      <p>최근 6개월 이내 구매내역 중 리뷰가 작성되지 않은 상품내역을 확인하실 수 있습니다.<br/>판매종료/중지된 상품내역은 노출되지 않습니다.</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list', 'tabState']
}
</script>
