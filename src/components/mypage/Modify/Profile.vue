<template>
  <section class="profileForm">
    <form action="" method="post" v-on:submit.prevent="submitModify">
      <div class="profilePic">
        <div class="picBox">
          <!-- 디폴트 이미지는 prImage에 default 클래스 추가 -->
          <span class="prImage" :style="{backgroundImage:'url('+ member.profileImgUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}" ></span>
          <input type="file" name="newPic" id="newPic" v-on:change="upload" />
          <label for="newPic" class="btnModifyPic">프로필 사진 바꾸기</label>
        </div>
        <h2>{{member.nickName}}</h2>
      </div>

      <div class="profileInfo">
        <div class="row">
          <label for="userMail">아이디</label>
          <p>{{member.userId}}</p>
        </div>
        <div class="row">
          <label for="userNick">닉네임</label>
          <p>{{member.nickName}}</p>
        </div>
        <div class="row">
          <label for="userPhone">휴대폰</label>
          <p>{{member.mobile}}</p>
        </div>
        <div class="row">
          <label for="userName">이름</label>
          <input type="text" id="userName" name="userName" placeholder="이름을 입력해주세요" v-model.trim="member.name" />
        </div>
        <div class="row">
          <p class="tit">성별</p>
          <input type="radio" id="male" :value="1" v-model="member.genderCode" />
          <label for="male">남</label>
          <input type="radio" id="female" :value="2" v-model="member.genderCode" />
          <label for="female">여</label>
        </div>
        <div class="row">
          <label for="userBirth">생년월일</label>
          <input type="text" id="userBirth" name="userBirth" placeholder="ex)2002.02.02" v-model.trim="member.birthday" />
        </div>
        <div class="row" v-if="member.joinTypeCode === 0">
          <p class="tit">비밀번호</p>
          <router-link to="/ChangePw" class="btn_cng">변경하기</router-link>
        </div>
        <router-link to="/Withdraw" class="Withdrawal">회원탈퇴하기</router-link>
      </div>
      <button class="btn_submit" >확인</button>

    </form>
    <section v-if="modalVisiblity" class="modalBg">
      <PopSingleButton v-if="pop" @close="close" :title="'내 정보 관리'" :message="'정보가 수정되었습니다.'" />
    </section>
  </section>
</template>

<script>
import PopSingleButton from '@/components/shared/PopSingleButton'
import Axios from 'axios'
import uuidv4 from 'uuid4'
import { getUserInfo, modifyUserInfo, getAccessToken } from '@/api/index.js'

/* eslint-disable */

export default {
  data () {
    return {
      member: {
        genderCode: '',
        birthday: '',
        mobile: '',
        userId: '',
        name: '',
        nickName: '',
        profile: '',
        joinTypeCode: null,
        profileImgUrl: '/static/images/ico_member.png'
      },
      modalVisiblity: false,
      pop: false
    }
  },
  components: {
    PopSingleButton
  },
  created () {
    if (sessionStorage.getItem('accessToken')) {
      getUserInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
          console.log(res)
          if (res.data.jsonData.birthday) {
            this.member.birthday = res.data.jsonData.birthday.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')
          }
          this.member.mobile = res.data.jsonData.mobile
          this.member.userId = res.data.jsonData.userId
          this.member.joinTypeCode = res.data.jsonData.joinTypeCode

          if (res.data.jsonData.nickName) {
            this.member.nickName = res.data.jsonData.nickName
          }
          if (res.data.jsonData.genderCode) {
            this.member.genderCode = res.data.jsonData.genderCode
          }
          if (res.data.jsonData.name) {
            this.member.name = res.data.jsonData.name
          }
          if (res.data.jsonData.profile) {
            this.member.profile = res.data.jsonData.profile
          }

          if (res.data.jsonData.profileImgUrl) {
            this.member.profileImgUrl = res.data.jsonData.profileImgUrl
          } else {
            this.member.profileImgUrl = '/static/images/ico_member.png'
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                getUserInfo(sessionStorage.getItem('accessToken'))
                  .then(res => {
                    // console.log(res)
                    if (res.data.jsonData.birthday) {
                      this.member.birthday = res.data.jsonData.birthday.replace(/(\d{4})(\d{2})(\d{2})/, '$1.$2.$3')
                    }
                    this.member.mobile = res.data.jsonData.mobile
                    this.member.userId = res.data.jsonData.userId

                    if (res.data.jsonData.nickName) {
                      this.member.nickName = res.data.jsonData.nickName
                    }
                    if (res.data.jsonData.name) {
                      this.member.name = res.data.jsonData.name
                    }
                    if (res.data.jsonData.genderCode) {
                      this.member.genderCode = res.data.jsonData.genderCode
                    }
                    if (res.data.jsonData.profile) {
                      this.member.profile = res.data.jsonData.profile
                    }

                    if (res.data.jsonData.profileImgUrl) {
                      this.member.profileImgUrl = res.data.jsonData.profileImgUrl
                    } else {
                      this.member.profileImgUrl = '/static/images/ico_member.png'
                    }
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
    }
  },
  methods: {
    submitModify () {
      // 이름 변경 불가. 이메일 변경 가능으로 수정해야 함. 아직 api 수정 안됨
      let userInfo = {...this.member}
      delete userInfo.profileImgUrl
      delete userInfo.userId
      delete userInfo.mobile
      delete userInfo.nickName

      // 유효성 검사
      let nameRegExp = /^[가-힣]{2,4}$/ // 이름
      let inputRegExp = /^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|/\s\./]+$/ // 영문,숫자,한글


      // 생년월일 검사
      if (userInfo.birthday.length === 10) {
        userInfo.birthday = userInfo.birthday.replace(/\./g, '')
        let year = Number(userInfo.birthday.substr(0, 4))
        let month = Number(userInfo.birthday.substr(4, 2))
        let day = Number(userInfo.birthday.substr(6, 2))

        let today = new Date()
        let yearNow = today.getFullYear()

        if (year < 1900 || year > yearNow) {
          alert('생년월일을 정확히 적어주세요. ex) 2020.01.01')
          return false
        } else if (month < 1 || month > 12) {
          alert('생년월일을 정확히 적어주세요. ex) 2020.01.01')
          return false
        } else if (day < 1 || day > 31) {
          alert('생년월일을 정확히 적어주세요. ex) 2020.01.01')
          return false
        } else if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) {
          alert('생년월일을 정확히 적어주세요. ex) 2020.01.01')
          return false
        } else if (month === 2) {
          let isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0))

          if (day > 29 || (day === 29 && !isleap)) {
            alert('생년월일을 정확히 적어주세요. ex) 2020.01.01')
            return false
          }
        }
      } else if (userInfo.birthday.length > 0) {
        alert('생년월일을 정확히 적어주세요. ex) 2020.01.01')
        return false
      }


      // 자기소개 유효성 검사
      if (!inputRegExp.test(userInfo.profile) && userInfo.profile.length > 0) {
        alert('자기소개가 올바르지 않습니다.')
        return false
      }

      // 이름 유효성 검사
      if (!nameRegExp.test(userInfo.name) && userInfo.name.length > 0) {
        alert('이름 올바르지 않습니다.')
        return false
      }

      console.log(userInfo)
      modifyUserInfo(sessionStorage.getItem('accessToken'), userInfo)
        .then(res => {
          if (res.data.jsonData.resultCode !== '0001') {
            alert('정보 수정에 실패했습니다.')
          } else {
            this.openPop()
          }
        })
    },
    close () {
      this.modalVisiblity = false
      this.pop = false
    },
    openPop () {
      this.modalVisiblity = true
      this.pop = true
    },
    async upload (event) {
      let dir = '/static/images'
      let cdnUrl = 'http://cdn.shallwe.link'
      // 1. 사용자 인증
      let loginParam = {user: 'l2e2e2@epiens.com', pwd: 'ny3yQaQumeje', stoid: 'epienscdn', stopwd: 'dlvldpstm2020!!'}
      let auth = await Axios.request({url: 'https://stats.kinxcdn.com/api/auth?', params: loginParam}).then((res) => { return res })
      // 2. 디렉토리를 체크한다.
      let dirFindParam = {key: auth.data.Response.key, stoid: 'epienscdn', path: dir, type: 'dir'}
      let isDirectory = await Axios.request({url: 'https://stats.kinxcdn.com/api/exists?', params: dirFindParam}).then((res) => { return res })
      let directory = ''
      // 3. 디렉토리가 없을경우는 생성한다.
      if (!isDirectory.data.Response.dataItem) {
        let createDirParam = {key: auth.data.Response.key, stoid: 'epienscdn', path: dir, work: 'C', type: 'D'}
        directory = await Axios.request({url: 'https://stats.kinxcdn.com/api/directorys?', params: dirFindParam}).then((res) => { return res })
      }
      // 4. 디렉토리가 존재할경우는 바로 업로드진행한다.
      let ext = event.target.files[0].name.split('.')
      let imageExt = ext[1]
      let uuid = uuidv4()
      let formData = new FormData()
      formData.append('key', auth.data.Response.key)
      formData.append('path', dir)
      formData.append('stoid', 'epienscdn')
      formData.append('file1', event.target.files[0], uuid + '.' + imageExt)
      let upload = await Axios.post('https://stats.kinxcdn.com/api/upload', formData, { 'Content-Type': 'multipart/form-data' })
      this.member.profileImgUrl = cdnUrl + '' + dir + '/' + uuid + '.' + imageExt

      let newUrl = {}
      newUrl.profileImgUrl = this.member.profileImgUrl
      modifyUserInfo(sessionStorage.getItem('accessToken'), newUrl)
        .then(res => {
          if (res.data.jsonData.resultCode !== '0001') {
            alert('프로필 사진 업로드에 실패했습니다.')
          }
        })
    }
  }
}
</script>
