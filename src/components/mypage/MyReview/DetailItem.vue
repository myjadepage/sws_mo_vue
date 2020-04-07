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

  <div class="itemList">
    <ul>
      <li class="item">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state c_them">배송완료</p>
        </div>
        <div class="itemMeta">
          <p class="orderNum">주문번호:12345678</p>
          <!-- <p class="metaDate">취소요청일:2019.12.31 21:40</p> -->
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <!-- 환불완료시 txtBox에 .chngFin 붙여주면 됨 -->
          <router-link to="/tracking/detail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </router-link>
          <!-- <div class="itemAmount">
            <p class="price">32,500원</p>
          </div> -->
          <div class="row ibBtns" >
            <router-link to="/Tracking" class="btn_them border col3 btn-first">배송조회</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  props: ['type', 'tabState'],
  name: 'DetailItem',
  data () {
    return {
      product: {}
    }
  }
}
</script>

<style>

</style>
