<template>
<div>
  <div id="tabs" class="member_con">
      <!-- <ul class="tabs">
          <li :class="[activetab === 1 ? 'active' : '']"><a v-on:click="activetab=1" >연락처로 찾기</a></li>
          <li :class="[activetab === 2 ? 'active' : '']"><a v-on:click="activetab=2" >이메일로 찾기</a></li>
      </ul> -->
      <div class="content">
          <!-- 1.등록된 휴대폰으로 아이디찾기 -->
          <div v-if="activetab === 1" class="tabcontent">
            <h4>아이디 입력</h4>
            <div class="wrap-input100 mb0">
              <input class="input100" type="text" v-model="id" name="id" placeholder="아이디를 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <h4>휴대폰번호 본인인증</h4>
            <div class="wrap-input100">
              <input class="input100" type="text" v-model="phone" name="phone" placeholder=" -없이 번호를 입력해 주세요">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send" @click="sendPhone">전송</button>
            </div>
            <div class="wrap-input100 mb0">
              <input class="input100" type="text" v-model="authNo" name="id" placeholder="인증번호 입력(3분 이내)">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send color_main" @click="checkPhone">확인</button>
            </div>

            <ul class="info_text" :class="{hide: isHide}">
              <li><strong  class="color_main">제한시간 {{ countTime }}</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
          </div>

          <!-- 2.등록된 이메일로 아이디 찾기 -->
          <!-- <div v-if="activetab === 2" class="tabcontent">
              <h4>아이디 입력</h4>
              <div class="wrap-input100 mb0">
              <input class="input100" type="text" v-model="id" name="id" placeholder="아이디를 입력해 주세요">
              <span class="focus-input100"></span>
            </div>

            <h4>이메일로 본인인증</h4>
            <div class="wrap-input100">
              <input class="input100" type="text" v-model="email" name="email" placeholder="이메일을 입력해 주세요">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send" @click="sendEmail">전송</button>
            </div>
            <div class="wrap-input100 mb0">
              <input class="input100" type="text" v-model="authNo" name="authNo" placeholder="인증번호 입력(3분 이내)">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send color_main"  @click="checkEmail">확인</button>
            </div>

            <ul class="info_text" :class="{hide: isHide}">
              <li><strong  class="color_main">제한시간 {{ countTime }}</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
          </div> -->
      </div>
  </div>

  <!-- 공통아래 -->
  <div class="member_foot" style="text-align:left">
       <ul>
         <li>* 본인 확인용 절차이며, 다른 용도로 사용되지 않습니다.</li>
         <li>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</li>
       </ul>
       <p>SNS 간편가입을 통해 가입하신 경우, 아이디/비밀번호 문의는 해당 SNS 서비스를 통해 이용 가능합니다.</p>
  </div>
</div>
</template>

<script>
import { makeRsa, parseDate } from '@/assets/js/common.js'
import { sendSms, chkSmsAuth, retauthMine } from '../../api'
export default {
  data () {
    return {
      isHide: true,
      id: null,
      phone: null,
      pwPhone: null,
      email: null,
      authNo: null,
      countTime: null,
      activetab: 1
    }
  },
  methods: {
    sendPhone: function () {
      this.isHide = false
      this.pwPhone = makeRsa(this.phone)
      sendSms(2, 1, this.pwPhone, this.id)
        .then(data => {
          console.log('sms전송성공', data.data.jsonData.res)
          switch (data.data.jsonData.resultCode) {
            case '1001' : alert('일 최대 5회로 전송횟수가 초과되었습니다.')
              break
            case '0002' : alert('전송에 실패하였습니다.')
              break
            case '0001' : alert('인증코드를 발송하였습니다.')
              this.countTimeDown(data.data.jsonData.res.limitDate)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    checkPhone: function () {
      chkSmsAuth(2, 1, this.pwPhone, this.authNo, this.id)
        .then(data => {
          console.log('인증번호입력확인', data)
          switch (data.data.jsonData.resultCode) {
            case '1002' : alert('인증 시도 횟수 5회를 초과하였습니다.')
              break
            case '0002' : alert('인증에 실패하였습니다.')
              break
            case '0001' : this.resultAuth()
              break
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    resultAuth: function () {
      retauthMine(2, 1, this.pwPhone, this.id)
        .then(res => {
          console.log('본인인증결과', res)
          localStorage.setItem('authToken', res.data.jsonData.res.authToken)
          switch (res.data.jsonData.resultCode) {
            case '1003' : alert('아이디가 존재하지 않습니다.')
              this.id = ''
              this.phone = ''
              this.authNo = ''
              break
            case '0002' : alert('인증에 실패하였습니다.')
              break
            case '0001' : this.$router.push('/SearchpwSet')
              break
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    sendEmail: function () {
      this.isHide = false
      sendSms(1, 2, this.email)
        .then(data => {
          console.log('sms전송성공', data.data.jsonData.res)
          switch (data.data.jsonData.resultCode) {
            case '1001' : alert('일 최대 5회로 전송횟수가 초과되었습니다.')
              break
            case '0002' : alert('전송에 실패하였습니다.')
              break
            case '0001' : alert('인증코드를 발송하였습니다.')
              this.countTimeDown(data.data.jsonData.res.limitDate)
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    checkEmail: function () {
      chkSmsAuth(1, 2, this.email, this.authNo)
        .then(data => {
          console.log('인증번호입력확인', data)
          switch (data.data.jsonData.resultCode) {
            case '1002' : alert('인증 시도 횟수 5회를 초과하였습니다.')
              break
            case '0002' : alert('인증에 실패하였습니다.')
              break
            case '0001' : this.resultAuthEmail()
              break
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    resultAuthEmail: function () {
      retauthMine(1, 2, this.email)
        .then(res => {
          console.log('본인인증결과', res)
          switch (res.data.jsonData.resultCode) {
            case '1003' : alert('아이디가 존재하지 않습니다.')
              break
            case '0002' : alert('인증에 실패하였습니다.')
              break
            case '0001' : this.$router.push('/SearchpwSet')
              break
          }
        })
        .catch(function (error) {
          console.log(error)
        })
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
.tabs {
  width: 100%;
  overflow: hidden;
  text-align: center;
}
.tabs li{
  display: inline-block;
  width: 49.5%;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
  background-color: #fff;
}
.tabs li a{
  display: block;
  padding: 12px 24px;
}
.tabs li.active{
  color: #e61754;
  border-bottom: 4px solid #e61754;
}
.content h4{
  padding: 40px 0 10px;
  text-align: left;
  font-weight: 400;
}
.btn_send{
    position: absolute;
    right: 0;
    top:10px;
}
</style>
