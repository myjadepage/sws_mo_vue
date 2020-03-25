<template>
<div class="sws_login">
    <router-link to="/"><h1 class="logo"></h1></router-link>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">로그인</h2>
        <div class="wrap-input100" >
          <input  class="input100" type="text" name="id" placeholder="아이디를 입력해 주세요"
            v-model="id" required>
          <span class="focus-input100"></span>
        </div>
        <div class="wrap-input100">
          <input class="input100" type="password" name="password" placeholder="패스워드를 입력해 주세요"
            v-model="password" required>
          <span class="focus-input100"></span>
         </div>
         <ul class="form_item_wrap">
            <li>
              <div class="toggle-button toggle-button-save">
                <input id="toggleButtonId" type="checkbox"
                  v-model="onCheck"
                  :saveId="id">
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
         <button type="button" class="btn btn-block btn-main" @click="loginBtnClick">로그인</button>
         <ul class="form_item_wrap login_service">
            <li><a href="/Searchid">아이디 찾기</a></li>
            <li><a href="/Searchpw">패스워드 찾기</a></li>
            <li><a href="/RegStep00">회원가입</a></li>
          </ul>
            <button @click="noMemberBuyClick" v-if="$store.getters.getProduct.name" class="btn btn-block btn-sub">비회원으로 구매</button>
            <button @click="noMemeberOrderClick" v-if="!$store.getters.getProduct.name" class="btn btn-block btn-sub">비회원 주문조회</button>
          <!-- <div class="socialTitle">SNS 간편 로그인</div> -->
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
                <li>
                  <v-facebook-login app-id="2810824608956950" class="btn btn-circle sws_icon btn-fb"></v-facebook-login>
                  <span>페이스북</span>
                </li>
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
import VFacebookLogin from 'vue-facebook-login-component'
import { snsLogin } from '../../api'

export default {
  components: {
    KakaoLogin,
    NaverLogin,
    VFacebookLogin
  },
  data () {
    return {
      id: null,
      password: null,
      onCheck: false
    }
  },
  methods: {
    // 구글로그인
    handleClickGetAuth () {
      this.$gAuth.signIn()
        .then(GoogleUser => {
          console.log('GoogleUser', GoogleUser.uc.access_token)
          this.isSignIn = this.$gAuth.isAuthorized
          snsLogin(3, GoogleUser.uc.access_token)
            .then(res => {
              console.log('acees', res)
              let accessToken = res.data.jsonData.accessToken
              let refreshToken = res.data.jsonData.refreshToken
              sessionStorage.setItem('accessTokenGoogle', accessToken)
              sessionStorage.setItem('refreshTokenGoogle', refreshToken)
              this.$router.push({name: 'RegStep00', params: {key: 'sns'}})
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
    loginBtnClick () {
      let self = this
      this.$store.dispatch('login', {id: self.id, password: self.password})
      this.id = ''
      this.password = ''
    },

    // 카카오로그인 성공시
    onSuccess: function (data) {
      var vm = this
      console.log('success', data)

      snsLogin(1, data.access_token)
        .then(res => {
          console.log('accees', res)
          vm.$router.push('/RegStep00')
        })
        .catch(function (error) {
          console.log('ERROR', error)
        })
    },
    onFailure: (data) => {
      console.log('failure', data)
    },

    // 네이버로그인시 콜백함수
    callbackFunction: function (status) {
      alert('들어왔니')
    },

    noMemberBuyClick () {
      sessionStorage.setItem('product', JSON.stringify(this.$store.getters.getProduct))
      sessionStorage.setItem('selectedOptions', JSON.stringify(this.$store.getters.getSelectedOptions))
      this.$router.push('/BuyProduct')
    },
    noMemeberOrderClick () {
      this.$router.push('/nonMemberOrder')
    }

  }
}
</script>

<style scope>
#kakao-login-btn>img {
    display: none;
}

</style>
