<template>
  <section class="profileForm">
    <form action="" method="post">
      <div class="profilePic">
        <div class="picBox">
          <!-- 디폴트 이미지는 prImage에 default 클래스 추가 -->
          <span class="prImage" :style="{backgroundImage:'url('+member.profileImgUrloptional+')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}" ></span>
          <input type="file" name="newPic" id="newPic" />
          <label for="newPic" class="btnModifyPic">프로필 사진 바꾸기</label>
        </div>
        <h2>{{member.id}}</h2>
      </div>

      <div class="profileInfo">
        <div class="row">
          <label for="userName">이름</label>
          <input type="text" id="userName" name="userName" placeholder="이름을 입력해 주세요." v-model="member.name" />
        </div>
        <div class="row">
          <label for="userGender">성별</label>
          <input type="text" id="userGender" name="userGender" placeholder="ex) 남 or 여" v-model="member.gender" />
        </div>
        <div class="row">
          <label for="userBirth">생년월일</label>
          <input type="text" id="userBirth" name="userBirth" placeholder="ex)2002.02.02" v-model="member.birthDay" />
        </div>
        <div class="row">
          <label for="userPhone">휴대폰</label>
          <input type="text" id="userPhone" name="userPhone" placeholder="ex)010-1234-5678" v-model="member.phone" />
        </div>
        <div class="row">
          <label for="userMail">이메일</label>
          <input type="mail" id="userMail" name="userMail" placeholder="이메일을 입력해 주세요." v-model="member.mail" />
        </div>
        <div class="row">
          <label for="userId">아이디</label>
          <input type="text" id="userId" name="userId" placeholder="아이디입니다." v-model="member.id" />
        </div>
        <div class="row">
          <label for="userNick">닉네임</label>
          <input type="text" id="userNick" name="userNick" placeholder="닉네임을 입력해 주세요" v-model="member.nickName" />
        </div>
        <div class="row">
          <label for="userIntro">자기소개</label>
          <input type="text" id="userIntro" name="userIntro" placeholder="자기소개를 입력해 주세요." v-model="member.intro" />
        </div>
      </div>
      <button class="btn_submit">회원정보 수정</button>

    </form>
  </section>
</template>

<script>
import { getUserInfo } from '@/api/index.js'

export default {
  data () {
    return {
      member: {
        id: '',
        name: '',
        gender: '',
        birthDay: '',
        phone: '',
        mail: '',
        nickName: '',
        intro: '',
        profileImgUrloptional: '/static/images/ico_member.png'
      }
    }
  },
  created () {
    console.log(sessionStorage.getItem('accessToken'))
    if (sessionStorage.getItem('accessToken')) {
      getUserInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
          this.member.name = res.data.jsonData.name
          if (res.data.jsonData.genderCode === 1) {
            this.member.gender = '남'
          } else if (res.data.jsonData.genderCode === 2) {
            this.member.gender = '여'
          }
          this.member.birthDay = res.data.jsonData.birthday
          this.member.phone = res.data.jsonData.mobile
          this.member.mail = res.data.jsonData.email
          this.member.id = res.data.jsonData.userId
          this.member.nickName = res.data.jsonData.nickName
          this.member.intro = res.data.jsonData.profile

          if (res.data.jsonData.profileImgUrloptional) {
            this.member.profileImgUrloptional = res.data.jsonData.profileImgUrloptional
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
