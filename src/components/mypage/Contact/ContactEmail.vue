<template>
  <div class="contact_email">
      <h3>답변 받을 이메일</h3>
      <div class="email_form">
      <input @change="mailInputed" v-model="emailAddr" type="text" placeholder="이메일 주소">
      <div class="text-right">
        <select @change="mailInputed" v-model="emailDomain" name="mailDomain" id="mailDomain">
            <option value="">직접입력</option>
            <option value="@naver.com">네이버</option>
            <option value="@hanmail.net">다음</option>
            <option value="@gmail.com">구글</option>
        </select>
        </div>
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

.contact_email h3{
  font-family: "Noto Sans KR";
  font-size: 15px;
  font-weight: normal;
     margin: 30px 12px 20px;
}

.email_form input, select{
    all: unset;
}

.email_form select{
    color:#E61754;
}
.email_form input{
    width: 80%
}

.email_form input:focus{
    margin-bottom: 0;
    padding-bottom: 5px;
    border-bottom: 3px solid black;
}

.email_form{
    margin: 0 12px 0;
    border-bottom: 1px solid #EEEEEE;
    width: 95%;
}
.contact_email .text-right{
    display: inline-block;
    text-align: right;
}

</style>
