<template>
  <div class="setBox">
      <div class="row">
          <p>쿠폰/선물</p>
          <input type="checkbox" id="presentBox" v-model="alertSets.coupon" @change="set()" />
          <label for="presentBox"></label>
      </div>
      <div class="row">
          <p>이벤트</p>
          <input type="checkbox" id="event" v-model="alertSets.event" @change="set()" />
          <label for="event"></label>
      </div>
      <div class="row">
          <p>구매내역</p>
          <input type="checkbox" id="buyLog" v-model="alertSets.buyLog" @change="set()" />
          <label for="buyLog"></label>
      </div>
      <div class="row">
          <p>라이브 방송</p>
          <input type="checkbox" id="live" v-model="alertSets.live" @change="set()" />
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
          this.alertSets.live = res.data.jsonData.liveBroadcastFlag
          this.alertSets.coupon = res.data.jsonData.couponPresentFlag
          this.alertSets.event = res.data.jsonData.eventFlag
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
                    this.alertSets.live = res.data.jsonData.liveBroadcastFlag
                    this.alertSets.coupon = res.data.jsonData.couponPresentFlag
                    this.alertSets.event = res.data.jsonData.eventFlag
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
      if (this.alertSets.live === true) {
        this.alertSets.live = 1
      } else if (this.alertSets.live === false) {
        this.alertSets.live = 0
      }
      if (this.alertSets.coupon === true) {
        this.alertSets.coupon = 1
      } else if (this.alertSets.coupon === false) {
        this.alertSets.coupon = 0
      }
      if (this.alertSets.event === true) {
        this.alertSets.event = 1
      } else if (this.alertSets.event === false) {
        this.alertSets.event = 0
      }

      let setInfo = {
        orderFlag: this.alertSets.buyLog,
        couponPresentFlag: this.alertSets.coupon,
        eventFlag: this.alertSets.event,
        liveBroadcastFlag: this.alertSets.live
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
