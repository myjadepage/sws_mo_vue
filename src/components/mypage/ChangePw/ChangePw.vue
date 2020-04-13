<template>
  <form action="" class="chngPw">
    <h2>기존 비밀번호</h2>
    <input type="password" name="oldPw" placeholder="기존 비밀번호 입력" v-model="pw.currentPassword" required />

    <h2>새 비밀번호 설정</h2>
    <input type="password" name="newPw" placeholder="새 비밀번호 6~20자 이내" maxlength="20" v-model="pw.newPassword" required />
    <input type="password" name="newPw_chk" placeholder="새 비밀번호 다시 입력" maxlength="20" v-model="confirmpw" required />
    <p>영문, 숫자 또는 특수문자 혼합</p>

    <div class="btnsWrap">
      <button @click="emptyBack" class="btn_them gray border">취소</button>
      <button class="btn_them " @click.stop.prevent="sendNewPw">확인</button>
    </div>
  </form>
</template>

<script>
import { changePw, getAccessToken } from '@/api/index.js'
import { makeRsa } from '@/assets/js/common.js'

export default {
  data () {
    return {
      confirmpw: null,
      pw: {
        currentPassword: null,
        newPassword: null
      },
      mspw: {
        currentPassword: null,
        newPassword: null
      }
    }
  },
  methods: {
    emptyBack (e) {
      e.preventDefault()
      this.$router.go(-1)
    },
    sendNewPw () {
      const enChk = new RegExp(/[a-z|A-Z]/gi)

      if (this.pw.newPassword.legnth < 6 && this.pw.newPassword.legnth > 20) {
        alert('비밀번호는 8~20자 이내로 입력해주세요.')
        return false
      } else if (this.pw.newPassword !== this.confirmpw) {
        alert('비밀번호가 동일하지 않습니다.')
        return false
      } else if (!enChk.test(this.pw.newPassword)) {
        alert('영문,숫자 또는 특수문자로 입력해 주세요')
        return false
      } else {
        this.mspw.currentPassword = makeRsa(this.pw.currentPassword)
        this.mspw.newPassword = makeRsa(this.pw.newPassword)
        changePw(sessionStorage.getItem('accessToken'), this.mspw)
          .then(res => {
            this.pw.currentPassword = null
            this.pw.newPassword = null
            this.confirmpw = null
            this.mspw.newPassword = null
            this.mspw.currentPassword = null
            this.mspw.newPassword = null
            alert('비밀번호가 변경되었습니다.')
          })
          .catch(err => {
            this.pw.currentPassword = null
            this.pw.newPassword = null
            this.confirmpw = null
            this.mspw.newPassword = null
            this.mspw.currentPassword = null
            this.mspw.newPassword = null
            console.log(err)
            if (err.response.status === 401) {
              getAccessToken(sessionStorage.getItem('refreshToken'))
                .then(res => {
                  sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                  changePw(sessionStorage.getItem('accessToken'), this.mspw)
                    .then(res => {
                      this.pw.currentPassword = null
                      this.pw.newPassword = null
                      this.confirmpw = null
                      this.mspw.newPassword = null
                      this.mspw.currentPassword = null
                      this.mspw.newPassword = null
                      alert('비밀번호가 변경되었습니다.')
                    })
                    .catch(err => {
                      this.pw.currentPassword = null
                      this.pw.newPassword = null
                      this.confirmpw = null
                      this.mspw.newPassword = null
                      this.mspw.currentPassword = null
                      this.mspw.newPassword = null
                      console.log(err)
                      if (err.response.status === 401) {
                        this.$store.dispatch('logOut')
                        this.$router.push('/Login')
                      }
                    })
                })
                .catch(err => {
                  if (err.response.status === 401) {
                    this.$store.dispatch('logOut')
                    this.$router.push('/Login')
                  }
                })
            }
          })
      }
    }
  }
}
</script>

<style>

</style>
