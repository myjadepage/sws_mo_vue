<template>
  <div class="mySettingsWrap">
    <div class="setting_block">
      <h4>쇼핑정보</h4>
      <ul>
        <li><router-link to="/BuyHistory">구매내역</router-link></li>
        <li><router-link to="/Exchange">취소/환불/교환 내역</router-link></li>
        <li><router-link to="/ViewLog">최근 본 상품</router-link></li>
        <li><router-link to="/Basket">찜한 상품</router-link></li>
      </ul>
    </div>
    <div class="setting_block">
      <h4>나의 계정</h4>
      <ul>
        <li><router-link to="/MyReview">마이 리뷰</router-link></li>
        <li><router-link to="/modifyProfile">회원정보 수정</router-link></li>
        <li><router-link to="/AlertSet">알림 설정</router-link></li>
      </ul>
    </div>
    <div class="setting_block">
      <h4>고객센터</h4>
      <ul>
        <li><router-link to="">일반문의</router-link></li>
        <li><router-link to="">구매상품문의</router-link></li>
        <li><router-link to="">나의문의내역</router-link></li>
        <li><router-link to="/CustomerMain">고객센터</router-link></li>
      </ul>
    </div>
    <div class="setting_block">
      <ul>
        <li><router-link to="/notice">공지사항</router-link></li>
      </ul>
    </div>
    <button class="logout_btn" @click="$store.dispatch('logOut')">로그아웃</button>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
