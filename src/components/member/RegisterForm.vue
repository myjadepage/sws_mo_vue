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

            <h4 class="small_title">아이디 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="text" name="userId" placeholder="아이디(6-12자)" maxlength="12"
                  v-model="formData.userId" required>
                <span class="focus-input100"></span>
                <button type="button" class="btn_send" @click="checkId" :isClicked='false'>중복확인</button>
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

            <h4 class="small_title">이메일 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="text" name="email" placeholder="이메일 형식에 맞게 입력해 주세요"
                  v-model="formData.email" @input="checkConfirmPw" required>
                <span class="focus-input100"></span>
            </div>
    </div>
    <div class="member_foot">
      <button type="button" class="btn btn-block btn-dark" @click="checkJoin">다음</button>
      <!-- <button type="button" class="btn btn-block btn-dark" @click="testKey">다음2</button> -->
    </div>
</div>
</template>

<script>
import { makeRsa } from '@/assets/js/common.js'
import { checkJoinId } from '../../api'

export default {
  data () {
    return {
      formData: {}, // userId, password, email
      confirmpw: null,
      isClicked: false
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
      this.isClicked = true
      const regId = new RegExp('^[A-za-z0-9]{6,12}$')
      if (this.formData.userId === null) {
        alert('아이디를 입력해 주세요')
        return false
      } else if (!regId.test(this.formData.userId)) {
        alert('영문, 숫자의 아이디 6-12자로 입력해 주세요')
        this.formData.userId = ''
        return false
      } else {
      // 아이디중복체크
        checkJoinId(this.formData.userId)
          .then(res => {
            if (res.data.jsonData.resultCode === '0001') {
              alert('사용가능한 아이디입니다.')
            } else if (res.data.jsonData.resultCode === '0003') {
              alert('중복 아이디가 있습니다.')
              this.formData.userId = ''
              return false
            }
          })
          .catch(error => {
            console.log('error', error)
            alert('아이디체크 중 문제가 생겼습니다.')
          })
      }
    },
    checkJoin: function () {
      // const regPassword = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
      const regPassword = new RegExp('[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]{6,20}$')
      const regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (this.formData.userId === null) {
        alert('아이디를 입력해 주세요')
      } else if (this.isClicked === false) {
        alert('아이디 중복확인을 해주세요')
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
      } else if (this.formData.email === null) {
        alert('이메일을 입력해 주세요')
      } else if (!regEmail.exec(this.formData.email)) {
        this.formData.email = ''
        alert('올바른 이메일 주소를 입력하세요')
      } else {
        this.$store.state.userInfo.userId = this.formData.userId
        this.$store.state.userInfo.password = makeRsa(this.formData.password)
        this.$store.state.userInfo.email = this.formData.email
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
