<template>
  <div class="contact_email">
      <h3>답변 받을 이메일</h3>
      <div class="email_form">
      <input @change="mailInputed" v-model="emailAddr" type="text" placeholder="이메일 주소">
        <select @change="mailInputed" v-model="emailDomain" name="mailDomain" id="mailDomain">
            <option value="">직접입력</option>
            <option value="@naver.com">네이버</option>
            <option value="@hanmail.net">다음</option>
            <option value="@gmail.com">구글</option>
        </select>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      emailAddr: '',
      emailDomain: ''
    }
  },
  methods: {
    mailInputed () {
      if (this.emailAddr !== '') {
        let email = this.emailAddr + this.emailDomain
        this.$emit('emailInputed', email)
      }
    }
  }
}
</script>

<style>

</style>
