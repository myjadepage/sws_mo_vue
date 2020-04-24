<template>
<div class="sws_register">
    <h5>
        <span class="circle_dot"></span>
        <span class="circle_dot"></span>
        <span class="circle_dot"></span>
        <span class="circle_dot disable"></span>
    </h5>
    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">휴대폰 인증절차</h2>
        <h4 class="small_title">휴대폰 번호 인증</h4>
        <div class="wrap-input100">
          <input class="input100" type="text" v-model="phone" name="phone" placeholder=" -없이 번호를 입력해 주세요">
          <span class="focus-input100"></span>
          <button type="button" class="btn_send" @click="sendPhone" :isClickedSend="false">전송</button>
        </div>
        <div class="wrap-input100 mb0">
          <input class="input100" type="text" v-model="authNo" name="authNo" placeholder="인증번호 입력(3분 이내)">
          <span class="focus-input100"></span>
          <button type="button" class="btn_send color_main" @click="checkPhone" :isClickedCheck="false">확인</button>
        </div>
        <ul class="info_text" :class="{hide: isHide}">
          <li><strong  class="color_main">제한시간 {{ countTime }}</strong></li>
          <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
        </ul>
        <ul class="info_text">
          <li>* 본인 확인용 절차이며, 다른 용도로 사용되지 않습니다.</li>
          <li>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</li>
        </ul>
    </div>
     <div class="member_foot">
        <button type="button" class="btn btn-block btn-dark" @click="checkCertifyDone">다음</button>
      </div>
</div>
</template>

<script>
import { makeRsa, parseDate } from '@/assets/js/common.js'
import { chkSmsAuth, sendSms, createtUser } from '../../api'

export default {
  data () {
    return {
      isHide: true,
      phone: null,
      authNo: null,
      countTime: null,
      isClickedSend: false,
      isClickedCheck: false,
      pwPhone: null
    }
  },
  methods: {
    // 1.문자본인인증
    sendPhone: function () {
      let regPhone = /(01[0|1|6|9|7]\d{3}|\d{4}\d{4}$)/g
      if (this.phone === null) {
        alert('번호를 입력해 주세요')
      } else if (!regPhone.test(this.phone)) {
        alert('잘못된 휴대폰 번호입니다.')
        this.phone = ''
      } else {
        this.isClickedSend = true
        // 전화번호 유효성검사 api
        this.pwPhone = makeRsa(this.phone)
        sendSms(0, 1, this.pwPhone)
          .then(res => {
            console.log('sms전송성공', res)
            switch (res.data.jsonData.resultCode) {
              case '1001' : alert('일 최대 5회로 전송횟수가 초과되었습니다.')
                break
              case '0002' : alert('전송에 실패하였습니다.')
                break
              case '0001' : alert('인증코드를 발송하였습니다.')
                this.countTimeDown(res.data.jsonData.res.limitDate)
                this.isHide = false
                this.authNo = res.data.jsonData.res.authNo// 테스트 끝나면 지울것
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      }
    },
    // 2.인증번호입력확인
    checkPhone: function () {
      this.isClickedCheck = true
      chkSmsAuth(0, 1, this.pwPhone, this.authNo)
        .then(res => {
          console.log('인증번호입력확인', res)
          switch (res.data.jsonData.resultCode) {
            case '1002' : alert('인증 시도 횟수 5회를 초과하였습니다.')
              break
            case '0002' : alert('인증에 실패하였습니다.')
              break
            case '1005' : alert('이미 가입된 회원입니다.')
              this.phone = ''
              this.authNo = ''
              break
            case '0001' : alert('인증에 성공하였습니다.')
              this.$store.state.userInfo.phone = this.pwPhone
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 최종회원가입
    checkCertifyDone: function () {
      var vm = this
      if (this.isClickedSend === false || this.isClickedCheck === false) {
        alert('인증번호 버튼을 눌러주세요')
      } else if (this.$route.params.key === 'google') { // 구글간편가입시, 아래 로직은 임시
        this.$store.dispatch('getUserInfoGoogle')
        vm.$router.push('/RegStep04')
      } else if (this.$route.params.key === 'kakao') { // 카카오간편가입시
        this.$store.dispatch('getUserInfoKakao')
        vm.$router.push('/RegStep04')
      } else {
        console.log(this.$store.state.userInfo)
        createtUser(this.$store.state.userInfo) // 일반회원가입시
          .then(function (res) {
            console.log('가입성공?', res)
            if (res.data.jsonData.resultCode === '0001') {
              vm.$router.push('/RegStep04')
            } else {
              alert('회원가입에 실패하였습니다.')
              vm.$router.push('/')
            }
          })
          .catch(function (error) {
            console.log('ERROR', error)
          })
      }
    },
    countTimeDown: function (limitTime) {
      let date = parseDate(limitTime)
      let endSeconds = Math.floor(date / 1000)
      let startSeconds = Math.floor(Date.now() / 1000)
      let limitDate = endSeconds - startSeconds

      var timer = setInterval(() => {
        this.countTime = Math.floor(limitDate / 60) + '분 ' + (limitDate % 60) + '초'
        if (limitDate <= 0) {
          clearInterval(timer)
          this.countTime = '0분 0초'
        }
        if (this.isClickedCheck === true) {
          this.isHide = true
          clearInterval(timer)
        }
        limitDate--
      }, 1000)
    }
  }
}
</script>

<style>

</style>
