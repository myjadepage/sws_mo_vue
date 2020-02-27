<template>
  <div id="swsLogin">
      <h1 class="logo"></h1>

      <!-- 일반로그인 -->
      <div class="sws_login">
        <h2 class="title">로그인</h2>
        <form action="">
            <div class="wrap-input100 validate-input" data-validate="아이디를 입력해 주세요">
              <!-- <span class="label-input100">아이디</span> -->
              <input class="input100" type="text" name="id" placeholder="아이디를 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <div class="wrap-input100 validate-input" data-validate="패스워드를 입력해 주세요">
              <!-- <span class="label-input100">패스워드</span> -->
              <input class="input100" type="password" name="password" placeholder="패스워드를 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <ul class="form_item_wrap">
                <li>
                    <div class="toggle-button toggle-button-save">
                        <input id="toggleButtonId" type="checkbox">
                        <label for="toggleButtonId"></label>
                        <div class="toggle-button__icon"></div>
                    </div>
                    <label>아이디 저장</label>
                </li>
                <li>
                    <div class="toggle-button toggle-button-save">
                        <input id="toggleButtonAutoId" type="checkbox">
                        <label for="toggleButtonAutoId"></label>
                        <div class="toggle-button__icon"></div>
                    </div>
                    <label>자동 로그인</label>
                </li>
            </ul>

            <button class="btn btn-block btn-main">로그인</button>

            <ul class="form_item_wrap login_service">
                <li><a href="/Id">아이디 찾기</a></li>
                <li><a href="/Password">패스워드 찾기</a></li>
                <li><a href="/Register">회원가입</a></li>
            </ul>
        </form>
      </div>
      <!-- 소셜로그인 -->
      <div class="social">
          <!-- <h2 class="title">SNS 간편로그인</h2> -->
          <ul class="form_item_wrap">
            <li>
              <a href="/" class="btn btn-circle sws_icon btn-google"></a>
              <span>구글</span>
            </li>
            <li>
              <a href="/" class="btn btn-circle sws_icon btn-cacao"></a>
              <span>카카오</span>
            </li>
            <li>
              <a href="/" class="btn btn-circle sws_icon btn-fb"></a>
              <span>페이스북</span>
            </li>
            <li>
              <a href="/" class="btn btn-circle sws_icon btn-naver"></a>
              <span>네이버</span>
            </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
