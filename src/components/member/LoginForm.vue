<template>
<div class="sws_login">
    <h1 class="logo"></h1>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">로그인</h2>
        <form action="">
                <div class="wrap-input100 validate-input" data-validate="아이디를 입력해 주세요">
                <!-- <span class="label-input100">아이디</span> -->
                <input class="input100" type="text" v-model="id" name="id" placeholder="아이디를 입력해 주세요">
                <span class="focus-input100"></span>
                </div>

                <div class="wrap-input100 validate-input" data-validate="패스워드를 입력해 주세요">
                <!-- <span class="label-input100">패스워드</span> -->
                <input class="input100" type="password" v-model="password" name="password" placeholder="패스워드를 입력해 주세요">
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

                <button type="button" class="btn btn-block btn-main" @click="login">로그인</button>

                <ul class="form_item_wrap login_service">
                    <li><a href="/Searchid">아이디 찾기</a></li>
                    <li><a href="/Searchpw">패스워드 찾기</a></li>
                    <li><a href="/RegStep00">회원가입</a></li>
                </ul>
        </form>
    </div>
    <div class="member_foot">
        <!-- 소셜로그인 -->
        <div class="social">
            <!-- <h2 class="title">SNS 간편로그인</h2> -->
            <ul>
                <li>
                    <a class="btn btn-circle sws_icon btn-google" @click="handleClickGetAuth"></a>
                    <span>구글</span>
                </li>
                <li>
                    <KakaoLogin
                    api-key="78eed5dbee80e670a64a4e79c08ed7a9"
                    :on-success=onSuccess
                    :on-failure=onFailure
                    class="btn btn-circle sws_icon btn-cacao"
                    />
                    <span>카카오</span>
                    <!-- <a href="/" class="btn btn-circle sws_icon btn-cacao" @click="kakaoLogin"></a>
                    <span>카카오</span> -->
                </li>
                <!-- <li>
                    <a href="/" class="btn btn-circle sws_icon btn-fb" @click="facebookLogin"></a>
                    <span>페이스북</span>
                </li>
                <li>
                    <a href="/" class="btn btn-circle sws_icon btn-naver" @clcik="naverLogin"></a>
                    <span>네이버</span>
                </li> -->
            </ul>
        </div>

    </div>
</div>
</template>

<script>
import KakaoLogin from 'vue-kakao-login'

export default {
  components: {
    KakaoLogin
  },
  data () {
    return {
      id: null,
      password: null
    }
  },
  methods: {
    handleClickGetAuth () {
      this.$gAuth.getAuthCode()
        .then(authCode => {
          console.log('authCode', authCode)
        // return this.$http.post('http://your-backend-server.com/auth/google', { code: authCode, redirect_uri: 'postmessage' })
        })
        .then(response => {
          console.log('response', response)
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    onSuccess: function (data) {
      console.log(data)
      console.log('success')
    },
    onFailure: function (data) {
      console.log(data)
      console.log('failure')
    },
    login () {
    //   let selectedUser = null
    //   this.allUsers.forEach(user => {
    //     if (user.id === this.id) {
    //       selectedUser = user
    //     }
    //   })
    //   if (selectedUser === null) {
    //     alert('입력하신 아이디가 없습니다.')
    //   } else {
    //     if (user.password !== this.password) {
    //       alert('입력하신 아이디와 패스워드가 일치하지 않습니다.')
    //     }
    //   }
      console.log(this.id, this.password)
    }
  }
}
</script>

<style scope>
#kakao-login-btn>img {
    display: none;
}

</style>
