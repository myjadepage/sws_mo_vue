<template>
<div class="sws_login">
    <router-link to="/"><h1 class="logo"></h1></router-link>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">로그인</h2>
        <div class="wrap-input100" >
          <input  class="input100" type="text" name="id" placeholder="이메일를 입력해 주세요"
            v-model="id" required>
          <span class="focus-input100"></span>
        </div>

        <div class="wrap-input100">
          <input @keypress.enter="loginBtnClick" class="input100" type="password" name="password" placeholder="패스워드를 입력해 주세요"
            v-model="password" required>
          <span class="focus-input100"></span>
         </div>

         <ul class="form_item_wrap" style="text-align:right">
            <li>
              <div class="toggle-button toggle-button-save">
                <input id="toggleButtonId" type="checkbox"
                  v-model="checkedId" @change="checkSaveId($event)">
                <label for="toggleButtonId"></label>
                <div class="toggle-button__icon"></div>
              </div>
              <label for="toggleButtonId" style="color:#666">아이디 저장</label>
            </li>
            <!-- <li>
              <div class="toggle-button toggle-button-save">
                <input id="toggleButtonAutoId" type="checkbox"
                  v-model="checkedAuto" @change="checkAutoLogin($event)">
                <label for="toggleButtonAutoId"></label>
                <div class="toggle-button__icon"></div>
              </div>
              <label style="color:#666">자동 로그인</label>
            </li> -->
         </ul>
         <button type="button" class="btn btn-block btn-main" @click="loginBtnClick">로그인</button>
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
                <li>
                  <v-facebook-login
                    app-id="2810824608956950"
                    :options = fboption
                    class="btn btn-circle sws_icon btn-fb"/>
                  <span>페이스북</span>
                </li>
                <li>
                  <NaverLogin
                    client-id="wot76zDwHaETcFxP4xEM"
                    callback-url="http://m.shallwe.link/Login"
                    :callback-function=callbackFunction
                    class="btn btn-circle sws_icon btn-naver"
                  />
                  <span>네이버</span>
                </li>
            </ul>
        </div>
        <div style="clear:both">
          <button @click="noMemberBuyClick" v-if="nonMemberBtnMode" class="btn">비회원으로 구매</button>
          <button @click="noMemeberOrderClick" v-if="!nonMemberBtnMode" class="btn">비회원 주문조회</button>
        </div>
    </div>
</div>
</template>

<script>
import $ from 'jquery'
import KakaoLogin from 'vue-kakao-login'
import NaverLogin from 'vue-naver-login'
import VFacebookLogin from 'vue-facebook-login-component'
import { makeRsa } from '@/assets/js/common.js'
import { snsLogin, getUserInfo } from '../../api'

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
      checkedId: false,
      checkedAuto: false,
      fboption: {
        cookie: true,
        xfbml: true,
        autoLogAppEvents: true
      }
    }
  },
  mounted () {
    // 아이디 저장체크시 아이디 보이기
    if (localStorage.getItem('swsId')) {
      this.id = localStorage.getItem('swsId')
      this.checkedId = true
    } else {
      this.id = ''
      this.checkedId = false
    }
    // 네이버 로그인
    var params = {}
    var param = $(location).attr('href')
    param.replace(/[#&]+([^=&]+)=([^&]*)/gi, function (str, key, value) { params[key] = value })
    console.log('params', params.access_token)
    snsLogin(2, params.access_token)
      .then(res => {
        console.log('res', res)
        // this.snsSuccessDoing(res, 'naver')
        this.snsSuccessDoing(res, 'sns')
      })
      .catch(function (error) {
        console.log('ERROR', error)
      })
  },
  methods: {
    // 아이디 저장
    checkSaveId (e) {
      if (this.checkedId === true) {
        localStorage.setItem('swsId', this.id)
      } else {
        localStorage.removeItem('swsId')
      }
    },
    loginBtnClick () {
      let self = this
      let password = makeRsa(self.password)
      this.$store.dispatch('login', {id: self.id, password: password, mode: this.nonMemberBtnMode})
      this.id = ''
      this.password = ''
    },
    // sns가입시 공통로직
    snsSuccessDoing (res, snsParam) {
      let accessToken = res.data.jsonData.accessToken
      let refreshToken = res.data.jsonData.refreshToken
      let snsAddInfoFlag = res.data.jsonData.snsAddInfoFlag

      sessionStorage.setItem('accessToken', accessToken)
      sessionStorage.setItem('refreshToken', refreshToken)

      getUserInfo(accessToken).then(r => {
        sessionStorage.setItem('memberInfo', JSON.stringify(r.data.jsonData))
      }).catch(err => {
        console.log(err)
      })
      // 회원가입
      if (res.data.jsonData.snsLoginType === 0) {
        switch (snsAddInfoFlag) { // 0:추가정보 미존재=>정보받아야함   1:추가정보존재
          case 0 : this.$router.push({name: 'RegStep00', params: {key: snsParam}}); break
          case 1 : this.$router.push('/'); break
        }
      } else if (snsParam === 'sns') { // 로그인
        this.$store.dispatch('getUserInfoSns')
        this.$router.push('/')
      }
    },
    // 구글로그인
    handleClickGetAuth () {
      this.$gAuth.signIn()
        .then(GoogleUser => {
          this.isSignIn = this.$gAuth.isAuthorized
          snsLogin(3, GoogleUser.tc.access_token)
            .then(res => {
              // this.snsSuccessDoing(res, 'google')
              this.snsSuccessDoing(res, 'sns')
            })
            .catch(function (error) {
              console.log('ERROR', error)
            })
        })
        .catch(error => {
          console.log('error', error)
        })
    },
    // 카카오로그인 성공시
    onSuccess: function (data) {
      snsLogin(1, data.access_token)
        .then(res => {
          // this.snsSuccessDoing(res, 'kakao')
          this.snsSuccessDoing(res, 'sns')
        })
        .catch(function (error) {
          console.log('ERROR', error)
        })
    },
    onFailure: (data) => {
      console.log('failure', data)
    },
    // 네이버로그인시 콜백함수인데 여기서 처리안함!
    callbackFunction: function () {}, // mounted에서 함

    // 비회원구매하기
    noMemberBuyClick () {
      this.$router.push('/BuyProduct')
    },
    noMemeberOrderClick () {
      this.$router.push('/nonMemberOrder')
    }
  },
  computed: {
    nonMemberBtnMode () {
      if (sessionStorage.getItem('products')) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scope>
#kakao-login-btn>img {
    display: none;
}
/* 페이스북 로고문제 */
.v-facebook-login {
  background-color: transparent !important;
}
.loader {
    opacity: 0 !important;
}
</style>
