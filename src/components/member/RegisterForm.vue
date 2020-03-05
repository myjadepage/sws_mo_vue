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
                <input class="input100" type="text" v-model="id" name="id" placeholder="아이디(6-12자)" required>
                <span class="focus-input100"></span>
                <button type="button" class="btn_send" @click="checkId">중복확인</button>
            </div>

            <h4 class="small_title">비밀번호 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="password" v-model="password" name="password" placeholder="영문, 숫자, 특수문자 혼합 6-12자" required>
                <span class="focus-input100"></span>
            </div>
            <div class="wrap-input100">
                <input class="input100" type="password" v-model="confirmpw" name="confirmpw" placeholder="비밀번호 다시 입력" required>
                <span class="focus-input100"></span>
            </div>

            <h4 class="small_title">이메일 입력</h4>
            <div class="wrap-input100">
                <input class="input100" type="text" v-model="email" name="email" placeholder="이메일 형식에 맞게 입력해 주세요" required>
                <span class="focus-input100"></span>
            </div>
    </div>
     <div class="member_foot">
        <button type="button" class="btn btn-block btn-dark" @click="checkJoin">다음</button>
      </div>
</div>
</template>

<script>
import { checkId2 } from '../../api'
export default {
  data () {
    return {
      id: null,
      password: null,
      confirmpw: null,
      email: null,
      userInfo: {}
    }
  },
  watch: {
    id (val) {
      const regId = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/
      if (regId.exec(val) !== null) {
        alert('영문과 숫자로 입력해 주세요')
        this.id = ''
      }
    },
    email (val) {
      const regEmail = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
      if (regEmail.exec(val) !== null) {
        alert('올바른 이메일 주소를 입력하세요')
        return false
      }
    }
  },
  methods: {
    checkId: function () {
      checkId2()
        .then(function (res) {
          console.log('중복성공?', res)
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    checkJoin: function () {
      if (this.id === null) {
        alert('아이디를 입력해 주세요')
      } else if (this.password === null) {
        alert('비밀번호를 입력해 주세요')
      } else if (this.confirmpw === null) {
        alert('비밀번호를 다시한번 입력해 주세요')
      } else if (this.password !== this.confirmpw) {
        alert('비밀번호가 다릅니다.')
      } else if (this.email === null) {
        alert('이메일을 입력해 주세요')
      } else {
        this.userInfo.userId = this.id
        this.userInfo.password = this.password
        this.userInfo.email = this.email
        console.log('userinfo', this.userInfo)
        this.$router.push('/RegStep03', this.userInfo)
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
