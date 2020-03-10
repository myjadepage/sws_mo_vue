<template>
  <div class="contact_email">
      <h3>답변 받을 이메일</h3>
      <div class="email_form">
      <input @focus="inputFocused" @blur="inputUnFocused" @change="mailInputed" v-model="emailAddr" type="text" placeholder="이메일 주소">
        <select @change="mailInputed" v-model="emailDomain" name="mailDomain" id="mailDomain">
            <option value="">직접입력</option>
            <option value="@naver.com">네이버</option>
            <option value="@hanmail.net">다음</option>
            <option value="@gmail.com">구글</option>
        </select>
        </div>
        <div class="text-center">
        <span ref="line" class="inputLiner"></span>
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
    },
    inputFocused () {
      this.$refs.line.classList.add('focused')
    },
    inputUnFocused () {
      this.$refs.line.classList.remove('focused')
    }
  }
}
</script>

<style>
.contact_email .inputLiner{
  position: relative;
  bottom: 10px;
  display: inline-block;
  padding: 0 10px;
  border-top: 1px solid #999999;
  position: relative;
  width: 95%;
  /* left: -50%; */
  /* visibility: hidden; */
}

.contact_email .inputLiner.focused{
  border-top: 2px solid black;
  left: 0%;
  width: 95%;
  visibility: visible;
}

.contact_email .text-center{
  text-align: center;
}
</style>
