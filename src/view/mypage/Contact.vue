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
import { writeQuestion, getAccessToken } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 문의하기'
  },
  data () {
    return {
      title: '문의하기',
      qInfo: {
        content: '',
        email: ''
      }
    }
  },
  components: {
    Bar, Content, Email, Info
  },
  methods: {
    formInputed (data) {
      this.qInfo.content = data
    },
    emailInputed (data) {
      this.qInfo.email = data
    },
    contact () {
      let regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
      let spcPattern = /[~#$%^&()_+|<>{}]/

      if (this.qInfo.email.match(regExp)) {
        if (!this.qInfo.content.match(spcPattern)) {
          // console.log(this.qInfo.content, this.qInfo.email)
          // 비동기 post 로직
          writeQuestion(sessionStorage.getItem('accessToken'), this.qInfo)
            .then(res => {
              // console.log(res)
              alert('문의가 접수되었습니다.')
              this.content = ''
              this.email = ''
            })
            .catch(err => {
              console.log(err)
              if (err.response.status === 401) {
                getAccessToken(sessionStorage.getItem('refreshToken'))
                  .then(res => {
                    sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                    writeQuestion(sessionStorage.getItem('accessToken'), this.qInfo)
                      .then(res => {
                        // console.log(res)
                        alert('문의가 접수되었습니다.')
                        this.content = ''
                        this.email = ''
                      })
                      .catch(err => {
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
        } else {
          alert('문의 내용에 특수문자를 사용할 수 없습니다.')
        }
      } else {
        alert('이메일 주소가 올바르지 않습니다.')
      }
    }
  }
}
</script>

<style>

</style>
