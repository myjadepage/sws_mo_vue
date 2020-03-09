<template>
<div>
  <div id="tabs" class="member_con">
      <ul class="tabs">
          <li :class="[activetab === 1 ? 'active' : '']"><a v-on:click="activetab=1" >연락처로 찾기</a></li>
          <li :class="[activetab === 2 ? 'active' : '']"><a v-on:click="activetab=2" >이메일로 찾기</a></li>
      </ul>
      <div class="content">
          <!-- 1.등록된 휴대폰으로 아이디찾기 -->
          <div v-if="activetab === 1" class="tabcontent">
            <h4>등록된 휴대폰으로 아이디 찾기</h4>
            <div class="wrap-input100">
              <input class="input100" type="text" v-model="phone" name="phone" placeholder="'-'없이 번호를 입력해 주세요">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send" @click="sendPhone">전송</button>
            </div>

            <div class="wrap-input100 mb0">
              <input class="input100" type="text" v-model="authNo" name="authNo" placeholder="인증번호 입력(3분 이내)">
              <span class="focus-input100"></span>
              <button type="button" id="show-modal" class="btn_send color_main" @click="checkPhone">확인</button>
            </div>

            <ul class="info_text" :class="{hide: isHide}">
              <li><strong  class="color_main">제한시간 {{ countTime }}</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
          </div>

          <!-- 2.등록된 이메일로 아이디 찾기 -->
          <div v-if="activetab === 2" class="tabcontent">
              <h4>등록된 이메일로 아이디 찾기</h4>
              <div class="wrap-input100">
                <input class="input100" type="text" v-model="email" name="email" placeholder="이메일을 입력해 주세요">
                <span class="focus-input100"></span>
                <button type="button" class="btn_send" @click="sendEmail">전송</button>
              </div>

            <div class="wrap-input100 mb0">
              <input class="input100" type="text" v-model="authNo" name="authNo" placeholder="인증번호 입력(3분 이내)">
              <span class="focus-input100"></span>
              <button type="button" class="btn_send color_main" @click="checkEmail">확인</button>
            </div>

           <ul class="info_text" :class="{hide: isHide}">
              <li><strong  class="color_main">제한시간 {{ countTime }}</strong></li>
              <li><span>* 인증번호는 1일 최대 5회 발송으로 제한됩니다.</span></li>
            </ul>
          </div>
      </div>
  </div>

  <!-- 공통아래 -->
  <div class="member_foot" style="text-align: left">
       <p>SNS 간편가입을 통해 가입하신 경우, 아이디/비밀번호 문의는 해당 SNS 서비스를 통해 이용 가능합니다.</p>
  </div>

  <modal v-if="showModal" @close="showModal = false">
    <h3 slot="header">알림</h3>
    <p slot="body">회원님의 아이디는 {{ id }}입니다.</p>
  </modal>

</div>
</template>

<script>
import modal from '@/components/Popup'
import { sendSms, chkSmsAuth, retauthMine } from '../../api'
export default {
  components: {
    modal
  },
  data () {
    return {
      isHide: true,
      phone: null,
      email: null,
      authNo: null,
      activetab: 1,
      id: null,
      countTime: null,
      showModal: false
    }
  },
  methods: {
    sendPhone: function () {
      this.isHide = false
      sendSms(1, 1, this.phone)
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
      chkSmsAuth(1, 1, this.phone, this.authNo)
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
      retauthMine(1, 1, this.phone)
        .then(res => {
          console.log('본인인증결과', res)
          switch (res.data.jsonData.resultCode) {
            case '1003' : alert('아이디가 존재하지 않습니다.')
              break
            case '0002' : alert('인증에 실패하였습니다.')
              break
            case '0001' : this.showModal = true
              this.id = res.data.jsonData.res.userId
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
            case '0001' : this.showModal = true
              // this.id = res.data.jsonData.res
              break
          }
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    // 날짜 String -> Date 변환
    parse: function (str) {
      var y = str.substr(0, 4)
      var m = str.substr(4, 2)
      var d = str.substr(6, 2)
      var h = str.substr(8, 2)
      var mm = str.substr(10, 2)
      var ss = str.substr(12, 2)
      return new Date(y, m - 1, d, h, mm, ss)
    },
    // 인증 10분제한시간
    countTimeDown: function (limitTime) {
      // 인증번호 입력시간 카운트
      let date = this.parse(limitTime)
      let endSeconds = Math.floor(date / 1000)
      let startSeconds = Math.floor(Date.now() / 1000)
      let limitDate = endSeconds - startSeconds
      console.log('limitDate', limitDate)
      if (limitDate > 0) {
        var timer = setInterval(() => {
          this.countTime = Math.floor(limitDate / 60) + ' : ' + (limitDate % 60)
          if (this.countTime <= 0) {
            clearInterval(timer)
            this.countTime = 0
          }
          limitDate--
          console.log(limitDate)
        }, 1000)
      }
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
</style>
