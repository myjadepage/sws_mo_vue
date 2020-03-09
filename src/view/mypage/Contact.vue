<template>
  <div class="contactWrap">
      <Bar :val="title"/>
      <Info/>
      <Content @formInputed="formInputed" />
      <Email @emailInputed="emailInputed" />
       <button type="button" class="btn btn-block btn-main" @click="contact">운영진에게 전송하기</button>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Content from '@/components/mypage/Contact/ContactContent'
import Email from '@/components/mypage/Contact/ContactEmail'
import Info from '@/components/mypage/Contact/ContactInfo'

export default {
  data () {
    return {
      title: '문의하기',
      content: '',
      email: ''
    }
  },
  components: {
    Bar, Content, Email, Info
  },
  methods: {
    formInputed (data) {
      this.content = data
    },
    emailInputed (data) {
      this.email = data
    },
    contact () {
      var regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      if (this.email.match(regExp)) {
        console.log(this.content, this.email)

        // 비동기 post 로직
      } else {
        alert('이메일 주소가 올바르지 않습니다.')
      }
    }
  }
}
</script>

<style>

</style>
