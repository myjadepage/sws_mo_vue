<template>
<div class="sws_register">
    <h5>
        <span class="circle_dot"></span>
        <span class="circle_dot"></span>
        <span class="circle_dot disable"></span>
        <span class="circle_dot disable"></span>
    </h5>

    <div class="member_con">
        <!-- 일반로그인 -->
        <h2 class="title">기본정보 입력</h2>

            <h4 class="small_title">이메일 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="text" name="userId" placeholder="이메일 형식에 맞게 입력해 주세요"
                  v-model="formData.userId" required>
                <span class="focus-input100"></span>
                <button type="button" class="btn_send" @click="checkId" :isClicked='false'>중복확인</button>
            </div>

            <h4 class="small_title">닉네임 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="text" name="userNickName" placeholder="특수문자 제외"
                  v-model="formData.userNickName" required>
                <span class="focus-input100"></span>
                <button type="button" class="btn_send" @click="checkNick" :isNickClicked='false'>중복확인</button>
            </div>

            <h4 class="small_title">비밀번호 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="password" name="password" placeholder="영문, 숫자, 특수문자 혼합 6-20자" maxlength="20"
                  v-model="formData.password" required>
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100">
                <input class="input100" type="password" name="confirmpw" placeholder="비밀번호 다시 입력"
                  v-model="confirmpw" required>
                <span class="focus-input100"></span>
            </div>
<!--
            <h4 class="small_title">이메일 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="text" name="email" placeholder="이메일 형식에 맞게 입력해 주세요"
                  v-model="formData.email" @input="checkConfirmPw" required>
                <span class="focus-input100"></span>
            </div> -->
    </div>
    <div class="member_foot">
      <button type="button" class="btn btn-block btn-dark" @click="checkJoin">다음</button>
      <!-- <button type="button" class="btn btn-block btn-dark" @click="testKey">다음2</button> -->
    </div>
</div>
</template>

<script>
import { makeRsa } from '@/assets/js/common.js'
import { checkJoinId, checkJoinNick } from '../../api'

export default {
  data () {
    return {
      formData: {}, // userId, password, email
      confirmpw: null,
      isClicked: false,
      isNickClicked: false
    }
  },
  methods: {
    // testKey () {
    //   getPublicKey()
    //     .then(res => {
    //       this.publicKey = res.data.jsonData.res.publicKey
    //       console.log('publicKey', this.publicKey)
    //       let encryptor = new JSEncrypt()
    //       encryptor.setPublicKey(this.publicKey)
    //       this.rsaEncStr = encryptor.encrypt('123456789a')
    //       console.log('rsapw', this.rsaEncStr)
    //       checkRSA(this.rsaEncStr)
    //         .then(res => {
    //           console.log('암호화 화깅ㄴ', res)
    //         })
    //         .catch(error => {
    //           console.log('error', error)
    //         })
    //     })
    //     .catch(error => {
    //       console.log('error', error)
    //     })
    // },
    checkConfirmPw (e) {
      if (this.confirmpw === null) {
        alert('비밀번호를 한번 더 입력해 주세요')
      }
    },
    /** 아이디 유효성Check
     * 영문, 숫자 6~12자 입력 */
    checkId: function () {
      const regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,30})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (this.formData.userId === null) {
        alert('이메일을 입력해 주세요')
        return false
      } else if (!regEmail.test(this.formData.userId)) {
        alert('이메일 형식에 맞게 입력해 주세요')
        this.formData.userId = ''
        return false
      } else {
      // 아이디중복체크
        checkJoinId(this.formData.userId)
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              alert('사용가능한 이메일입니다.')
              this.isClicked = true
            } else if (res.data.jsonData.resultCode === '0003') {
              alert('중복 이메일이 있습니다.')
              this.formData.userId = ''
              this.isClicked = false
              return false
            }
          })
          .catch(error => {
            console.log('error', error)
            alert('이메일체크 중 문제가 생겼습니다.')
          })
      }
    },
    /** 닉네임 유효성Check
     * 특수문자 제외 입력 */
    checkNick: function () {
      const inputRegExp = /^([ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|/\s/]{0,20})+$/ // 영문,숫자,한글

      if (this.formData.userNickName === null) {
        alert('닉네임을 입력해 주세요')
        return false
      } else if (!inputRegExp.test(this.formData.userNickName)) {
        alert('닉네임에 특수문자를 입력할 수 없습니다.')
        this.formData.userNickName = ''
        return false
      } else {
      // 닉네임중복체크
        checkJoinNick(this.formData.userNickName)
          .then(res => {
            console.log(res)
            if (res.data.jsonData.resultCode === '0001') {
              this.isNickClicked = true
              alert('사용가능한 닉네임입니다.')
            } else if (res.data.jsonData.resultCode === '0003') {
              alert('중복 닉네임이 있습니다.')
              this.formData.userNickName = ''
              this.isNickClicked = false
              return false
            }
          })
          .catch(error => {
            console.log('error', error)
            alert('닉네임체크 중 문제가 생겼습니다.')
          })
      }
    },
    checkJoin: function () {
      const regPassword = new RegExp('[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{6,20}$')
      if (this.formData.userId === null) {
        alert('이메일을 입력해 주세요')
      } else if (this.isClicked === false) {
        alert('이메일 중복확인을 해주세요')
      } else if (this.formData.userNickName === null) {
        alert('닉네임 입력해 주세요')
      } else if (this.isNickClicked === false) {
        alert('닉네임 중복확인을 해주세요')
      } else if (this.formData.password === null) {
        alert('비밀번호를 입력해 주세요')
      } else if (regPassword.test(this.formData.password)) {
        alert('영문,숫자 또는 특수문자로 입력해 주세요')
        this.formData.password = ''
      } else if (this.formData.password.length < 7 || this.formData.password.length > 21) {
        alert('비밀번호를 6-20자로 입력해 주세요')
        this.formData.password = ''
      } else if (this.confirmpw === null) {
        alert('비밀번호를 다시한번 입력해 주세요')
      } else if (this.formData.password !== this.confirmpw) {
        alert('비밀번호가 다릅니다.')
        this.confirmpw = ''
      } else {
        this.$store.state.userInfo.userId = this.formData.userId
        this.$store.state.userInfo.password = makeRsa(this.formData.password)
        console.log('this.$store.state.userInfo', this.$store.state.userInfo)
        this.$router.push('/RegStep03')
      }
    }
  }
}
</script>

<style scope>
.btn_send{
    position: absolute;
    right: 0;
    top:10px;
}
</style>
