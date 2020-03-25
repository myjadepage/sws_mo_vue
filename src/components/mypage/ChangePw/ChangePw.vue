<template>
  <form action="" class="chngPw">
    <h2>기존 비밀번호</h2>
    <input type="password" name="oldPw" placeholder="기존 비밀번호 입력" v-model="oldPassword" required />

    <h2>새 비밀번호 설정</h2>
    <input type="password" name="newPw" placeholder="새 비밀번호 8~20자 이내" maxlength="20" v-model="password" required />
    <input type="password" name="newPw_chk" placeholder="새 비밀번호 다시 입력" maxlength="20" v-model="confirmpw" required />
    <p>영문, 숫자, 특수문자 혼합</p>

    <div class="btnsWrap">
      <button @click="emptyBack" class="btn_them gray border">취소</button>
      <button class="btn_them ">확인</button>
    </div>
  </form>
</template>

<script>

export default {
  data () {
    return {
      oldPassword: null,
      password: null,
      confirmpw: null
    }
  },
  methods: {
    emptyBack (e) {
      e.preventDefault()
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
