<template>
<div class="sws_login">
    <h1 class="logo"></h1>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">로그인</h2>
        <div class="wrap-input100" >
          <input class="input100" type="text" v-model="id" name="id" placeholder="아이디를 입력해 주세요">
          <span class="focus-input100"></span>
        </div>
         <div class="wrap-input100">
            <!-- <span class="label-input100">패스워드</span> -->
            <input class="input100" type="password" v-model="password" name="password" placeholder="패스워드를 입력해 주세요">
            <span class="focus-input100"></span>
            </div>
         <ul class="form_item_wrap">
            <li>
              <div class="toggle-button toggle-button-save">
                <input id="toggleButtonId" type="checkbox" :idSaveCheck="false">
                <label for="toggleButtonId"></label>
                <div class="toggle-button__icon"></div>
              </div>
              <label style="color:#666">아이디 저장</label>
            </li>
            <li>
              <div class="toggle-button toggle-button-save">
                <input id="toggleButtonAutoId" type="checkbox">
                <label for="toggleButtonAutoId"></label>
                <div class="toggle-button__icon"></div>
              </div>
              <label style="color:#666">자동 로그인</label>
            </li>
         </ul>
         <button type="button" class="btn btn-block btn-main" @click="$store.dispatch('login({id, password})')">로그인</button>
         <ul class="form_item_wrap login_service">
            <li><a href="/Searchid">아이디 찾기</a></li>
            <li><a href="/Searchpw">패스워드 찾기</a></li>
            <li><a href="/RegStep00">회원가입</a></li>
          </ul>

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
                </li>
                <!-- <li>
                    <a href="/" class="btn btn-circle sws_icon btn-fb" @click="facebookLogin"></a>
                    <span>페이스북</span>
                </li>-->
                <li>
                  <NaverLogin
                  client-id="wot76zDwHaETcFxP4xEM"
                  callback-url="http://localhost:8080/RegStep00Naver"
                  :callback-function=callbackFunction
                  class="btn btn-circle sws_icon btn-naver"
                  />
                  <span>네이버</span>
                </li>
            </ul>
        </div>

    </div>
</div>
</template>

<script>
import KakaoLogin from 'vue-kakao-login'
import NaverLogin from 'vue-naver-login'
import { snsLogin } from '../../api'

export default {
  components: {
    KakaoLogin,
    NaverLogin
  },
  data () {
    return {
      id: null,
      password: null,
      idSaveCheck: false
    }
  },
  methods: {
    // login () {
    //   userLogin(this.id, this.password)
    //     .then(res => {
    //       if (res.data.jsonData.resultCode === '0001') {
    //         console.log('로그인성공?', res)
    //         localStorage.setItem('accessToken', res.data.jsonData.accessToken)
    //         localStorage.setItem('refreshToken', res.data.jsonData.accessToken)
    //         localStorage.setItem('userSysId', res.data.jsonData.userSysId)
    //         this.$router.push('/')
    //       }
    //     })
    //     .catch(function (error) {
    //       console.log('ERROR', error)
    //     })
    //   console.log(this.id, this.password)
    // },

    // 구글로그인
    handleClickGetAuth () {
      this.$gAuth.signIn()
        .then(GoogleUser => {
          console.log('GoogleUser', GoogleUser.uc.access_token)
          this.isSignIn = this.$gAuth.isAuthorized
          snsLogin(3, GoogleUser.uc.access_token)
            .then(res => {
              console.log('acees', res)
              this.$router.push('/RegStep00')
            })
            .catch(function (error) {
              console.log('ERROR', error)
            })
        })
        .then(response => {
          console.log('response', response)
        })
        .catch(error => {
          console.log('error', error)
        })
    },

    // 카카오로그인 성공시
    onSuccess: function (data) {
      var vm = this
      console.log('success')
      snsLogin(1, data.access_token)
        .then(res => {
          console.log('acees', res)
          vm.$router.push('/RegStep00')
        })
        .catch(function (error) {
          console.log('ERROR', error)
        })
    },
    onFailure: (data) => {
      console.log(data)
      console.log('failure')
    },

    // 네이버로그인시 콜백함수
    callbackFunction: function (status) {
      alert('들어왔니')
    }
  }
}
</script>

<style scope>
#kakao-login-btn>img {
    display: none;
}

</style>
