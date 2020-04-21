<template>
  <div class="lookUp compBlock">
    <p>My 포인트</p>
    <p class="point">{{formatPoint}}</p>
  </div>
</template>

<script>
import { getMypageInfo, getAccessToken } from '@/api/index.js'

export default {
  data () {
    return {
      myPoint: 0
    }
  },
  mounted () {
    if (sessionStorage.getItem('accessToken')) {
      getMypageInfo(sessionStorage.getItem('accessToken'))
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            if (res.data.jsonData.point) {
              this.myPoint = res.data.jsonData.point
            }
          }
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                getMypageInfo(sessionStorage.getItem('accessToken'))
                  .then(res => {
                    console.log(res)
                    if (res.data.jsonData.resultCode === '0001') {
                      if (res.data.jsonData.point) {
                        this.myPoint = res.data.jsonData.point
                      }
                    }
                  })
                  .catch(err => {
                    console.log(err)
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
  computed: {
    formatPoint () {
      return this.myPoint.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  }
}
</script>

<style>

</style>
