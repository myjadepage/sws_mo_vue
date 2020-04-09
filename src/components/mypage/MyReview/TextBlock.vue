<template>

  <div class="textBlock">
    <div class="onlyText" v-if="mode==='text'">
      <input type="text" placeholder="한줄 리뷰를 남겨주세요(선택사항)" v-model="txt" />
      <button class="btn_photo" @click="modeSwitch">포토리뷰</button>
    </div>
    <div class="onlyText" v-if="mode==='photo'">
      <div class="preViewBox">
        <textarea placeholder="포토리뷰를 작성해 주세요." v-model="txt" ></textarea>
        <ul class="photoList">
          <li class="item" :style="{backgroundImage:'url(' + img + ')', backgroundPosition:'50% 50%', backgroundSize:'cover', backgroundRepeat:'no-repeat'}" v-for="(img, index) in imgUrls" v-bind:key="index">
            <button class="remove" @click="delPhoto(index)"><img src="../../../assets/img/ico/btn_remove.png" alt="이미지 삭제" /></button>
          </li>
        </ul>
      </div>
      <input type="file" name="photoUpload" id="fileUpload" v-on:change="upload($event)" ref="file" multiple />
      <label for="fileUpload" class="btn_photo" >사진첨부</label>
    </div>

    <div class="btnsWrap">
      <button class="btn_them gray border">취소</button>
      <button class="btn_them " @click="photoSubmit">확인</button>
    </div>
  </div>

</template>

<script>
import Axios from 'axios'
import uuidv4 from 'uuid4'
import { setReview } from '@/api/index.js'

export default {
  name: 'TextBlock',
  props: ['photos', 'prdtSysId', 'score'],
  data () {
    return {
      mode: 'text',
      txt: '',
      imgLength: 0,
      imgFile: [],
      imgUrls: []
    }
  },
  methods: {
    modeSwitch () {
      this.mode = 'photo'
    },
    photoSubmit () {
      let reviewInfo = {}
      if (this.score > 0) {
        reviewInfo.starPoint = this.score
      }
      if (this.mode === 'text') {
        reviewInfo.reviewType = 0
        reviewInfo.oneLine = this.txt
      }
      if (this.mode === 'photo' && this.imgLength === 0) {
        reviewInfo.reviewType = 0
        reviewInfo.oneLine = this.txt
      } else if (this.mode === 'photo' && this.imgLength > 0) {
        reviewInfo.reviewType = 1
        reviewInfo.content = this.txt
        reviewInfo.reviewPhotos = []
        this.imgUrls.forEach(img => {
          reviewInfo.reviewPhotos.push(JSON.stringify({'photoUrl': img}))
        })
      }
      console.log(reviewInfo)

      setReview(sessionStorage.getItem('accessToken'), this.prdtSysId, reviewInfo)
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode !== '0001') {
            alert('사진 업로드에 실패했습니다.')
          } else if (res.data.jsonData.resultCode === '0001') {
            // this.$router.push('/MyReview')
          }
        })
    },
    delPhoto (index) {
      this.imgFile.splice(index, 1)
      this.imgLength--
      // console.log($(event.target).parents('.item').remove())
    },

    /* eslint-disable */
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
      let ext = []
      let uuids = []
      for (let i = 0; i < event.target.files.length; i++) {
        ext.push(event.target.files[i].name.split('.')[1])
        uuids.push(uuidv4())
        this.imgLength++
      }
      let formData = new FormData()
      formData.append('key', auth.data.Response.key)
      formData.append('path', dir)
      formData.append('stoid', 'epienscdn')
      for (let i = 0; i < event.target.files.length; i++) {
        formData.append('file' + (i+1), event.target.files[i], uuids[i] + '.' + ext[i])
        this.imgUrls.push(cdnUrl + '' + dir + '/' + uuids[i] + '.' + ext[i])
      }
      let upload = await Axios.post('https://stats.kinxcdn.com/api/upload', formData, { 'Content-Type': 'multipart/form-data' })

      
    }
  }
}
</script>

<style>

</style>
