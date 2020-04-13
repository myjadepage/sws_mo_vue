<template>

  <section class="movieReview compBlock">
    <h2>동영상 리뷰</h2>
    <p class="movieName" :class="movies.length > 0? '':'empty'">파일 첨부{{movies.length > 0? ' : '+movies[0].name : ''}}</p>
    <input type="file" id="movieFile" v-on:change="setMovie($event)" ref="movieInput" />
    <div class="btnsWrap" v-if="!uploadState">
      <button class="btn_them gray border" :disabled="movies.length === 0" @click="removeMovie" >삭제</button>
      <label for="movieFile" class="btn_them" v-if="movies.length === 0">동영상 선택</label>
      <button class="btn_them" v-if="movies.length === 1" @click="onSingleVideoUploaderEvent">동영상 업로드</button>
    </div>
    <div class="progress" v-if="uploadState"><p>동영상을 업로드 중입니다.</p></div>
  </section>

</template>

<script>
import Axios from 'axios'
import { setReview } from '@/api/index.js'

export default {
  name: 'MovieReview',
  props: ['prdtSysId'],
  data () {
    return {
      movies: [],
      uploadState: false
    }
  },
  methods: {
    setMovie (event) {
      this.movies = event.target.files
    },
    removeMovie () {
      this.$refs.movieInput.value = ''
      this.movies = []
    },

    /* eslint-disable */
    async onSingleVideoUploaderEvent () {
      var targetObj = this.$refs.movieInput;
      let prdtSysId = this.prdtSysId
      let self = this
      var formData = new FormData();
      formData.append("file", targetObj.files[0]);
      this.uploadState = true
      let result = await Axios.request({
        method: "post",
        url: "https://api.midibus.kinxcdn.com/v1/upload/450",
        headers: {
          "Content-Type": "multipart/form-data",
          "X-Mbus-Token": "D51D768EDB699F30ABBD16569FB07A630FED100A9D7AFF899EA24079F9C5BBECFF28C464E1AD49E6748BB409D9A4F0A227040A68503B771A8B78953AFAD4AA5B"
        },
        data: formData
      })
        .then(function(res) {
          // console.log(res)
          if (res.data.success) {
            let reviewInfo = {}
            reviewInfo.reviewType = 2
            reviewInfo.reviewMedias = [{'mediaId': res.data.mediaId}]

            setReview(sessionStorage.getItem('accessToken'), prdtSysId, reviewInfo)
              .then(res => {
                // console.log(res)
                if (res.data.jsonData.resultCode !== '0001') {
                  console.log('사진 업로드에 실패했습니다.')
                } else if (res.data.jsonData.resultCode === '0001') {
                  self.$router.push('/MyReview')
                }
              })
          } else {
            console.log(res)
          }
        })
        .catch(function(err) {
          console.log(err);
        });
    }
  }
}
</script>

<style>

</style>
