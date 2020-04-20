<template>
  <div class="setBox">
      <div class="row">
          <p>쿠폰/선물</p>
          <input type="checkbox" id="presentBox" v-model="alertSets.coupon" />
          <label for="presentBox"></label>
      </div>
      <div class="row">
          <p>이벤트</p>
          <input type="checkbox" id="event" v-model="alertSets.event"  />
          <label for="event"></label>
      </div>
      <div class="row">
          <p>구매내역</p>
          <input type="checkbox" id="buyLog" v-model="alertSets.buyLog" @change="set()" />
          <label for="buyLog"></label>
      </div>
      <div class="row">
          <p>라이브 방송</p>
          <input type="checkbox" id="live" v-model="alertSets.live"  />
          <label for="live"></label>
      </div>
  </div>
</template>

<script>
import {getAlertSetting, setAlertSetting, getAccessToken} from '@/api/index'

export default {
  data () {
    return {
      alertSets: {
        buyLog: 0,
        coupon: 0,
        event: 0,
        live: 0
      }
    }
  },
  mounted () {
    getAlertSetting(sessionStorage.getItem('accessToken'))
      .then(res => {
        console.log(res)
        if (res.data.jsonData.resultCode === '0001') {
          this.alertSets.buyLog = res.data.jsonData.orderFlag
          this.alertSets.exchangeLog = res.data.jsonData.orderStatFlag
        }
      })
      .catch(err => {
        console.log(err)
        if (err.response.status === 401) {
          getAccessToken(sessionStorage.getItem('refreshToken'))
            .then(res => {
              sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              getAlertSetting(sessionStorage.getItem('accessToken'))
                .then(res => {
                  if (res.data.jsonData.resultCode === '0001') {
                    this.alertSets.buyLog = res.data.jsonData.orderFlag
                    this.alertSets.exchangeLog = res.data.jsonData.orderStatFlag
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
  },
  methods: {
    set () {
      if (this.alertSets.buyLog === true) {
        this.alertSets.buyLog = 1
      } else if (this.alertSets.buyLog === false) {
        this.alertSets.buyLog = 0
      }
      if (this.alertSets.exchangeLog === true) {
        this.alertSets.exchangeLog = 1
      } else if (this.alertSets.exchangeLog === false) {
        this.alertSets.exchangeLog = 0
      }

      let setInfo = {
        orderFlag: this.alertSets.buyLog,
        orderStatFlag: this.alertSets.exchangeLog
      }
      // console.log(setInfo)
      setAlertSetting(sessionStorage.getItem('accessToken'), setInfo)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          console.log(err)
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                setAlertSetting(sessionStorage.getItem('accessToken'), setInfo)
                  .then(res => {
                    // console.log(res)
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
  }
}
</script>

<style>

</style>
