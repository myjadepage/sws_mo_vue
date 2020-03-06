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
        <div class="wrap-input100 validate-input">
          <input class="input100" type="text" v-model="phone" name="phone" placeholder=" -없이 번호를 입력해 주세요">
          <span class="focus-input100"></span>
          <button type="button" class="btn_send" @click="sendPhone">전송</button>
        </div>
        <div class="wrap-input100 validate-input mb0">
          <input class="input100" type="text" v-model="authNo" name="authNo" placeholder="인증번호 입력(10분 이내)">
          <span class="focus-input100"></span>
          <button type="button" class="btn_send color_main" @click="checkPhone">확인</button>
        </div>
        <ul class="info_text">
          <li><strong  class="color_main">제한시간 {{ countTime }}초</strong></li>
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
import { EventBus } from './EventBus'
import { chkSmsAuth, sendSms, createtUser } from '../../api'

export default {
  data () {
    return {
      phone: null,
      authNo: null,
      countTime: null,
      timer: null,
      userInfo: {}
    }
  },
  created () {
    EventBus.$on('userInfo', this.inserUserInfo)
  },
  methods: {
    inserUserInfo: function (payload) {
      console.log('받았냐', payload.userId)
      this.userInfo.userId = payload.userId
      this.userInfo.password = payload.password
      this.userInfo.email = payload.email
    },
    sendPhone: function () {
      // 전화번호 유효성검사
      sendSms(0, 1, this.phone)
        .then(data => {
          console.log('sms성공?', data)
          // 인증번호 입력시간 카운트
          let st = data.jsonData.res.limitDate
          let date = this.parse(st)
          let endSeconds = Math.floor(new Date(date) / 1000)
          let startSeconds = Math.floor(Date.now() / 1000)
          let limitDate = endSeconds - startSeconds
          console.log('limitDate', limitDate)
          console.log('authno', data.jsonData.res.auth)

          this.countTimeDown(limitDate)

          if (status === 200 && data.jsonData.res.sendCnt <= 5) {
            chkSmsAuth(data.jsonData.res.authNo, this.mobile)
              .then(function (res) {
                if (res.jsonData.code === 200) {
                  alert('인증을 성공하였습니다.')
                }
              })
              .catch(function (error) {
                console.log('ERROR', error)
              })
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 인증 10분제한시간
    countTimeDown: function (limitDate) {
      this.countTime = limitDate
      this.timer = setInterval(() => {
        this.countTime = Math.floor(this.countTime / 60) + ' : ' + (this.countTime % 60)
      }, 1000)
      this.countTime--
    },
    // 인증번호입력확인
    checkPhone: function () {
      this.userInfo.phone = this.phone
      console.log('aaa')
    },
    // 최종회원가입
    checkCertifyDone: function () {
      console.log('userinfo', JSON.stringify(this.userInfo))
      createtUser(this.userInfo)
        .then(function (res) {
          console.log('가입성공?', res)
          this.$router.push('/RegStep04')
        })
        .catch(function (error) {
          console.log('ERROR', error)
          return false
        })
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

<style>

</style>
