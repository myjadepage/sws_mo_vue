<template>
  <div class="mySettingsWrap">
     <ul>

      <router-link to="/ChangePw"><li><span class="ico_password"></span>비밀번호 변경</li></router-link>
      <router-link to="/notice"><li><span class="ico_notice"></span>공지사항</li></router-link>
      <router-link to="/AlertSet"><li><span class="ico_alert"></span>알림 설정</li></router-link>
      <hr>
      <router-link to=""><li><span class="ico_clock"></span>최근 본 상품</li></router-link>
      <router-link to=""><li><span class="ico_heart"></span>찜한 상품</li></router-link>
      <hr>
      <router-link to=""><li><span class="ico_review"></span>마이 리뷰(일반/포토/동영상)</li></router-link>
      <hr>
      <router-link to="/VersionChk"><li><span class="ico_info"></span>앱 버전 정보</li></router-link>
      <hr>
      <router-link to=""><li><span class="ico_message"></span>메세지</li></router-link>
      <hr>
      <button type="button" @click="$store.dispatch('logOut')"><li><span class="ico_signout"></span>로그아웃</li></button>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
