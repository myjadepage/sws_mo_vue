<template>
  <div class="setBox">
      <div class="row">
          <p>구매내역</p>
          <input type="checkbox" id="buyLog" v-model="alertSets.buyLog" @change="set()" />
          <label for="buyLog"></label>
      </div>
      <div class="row">
          <p>선물함</p>
          <input type="checkbox" id="presentBox" v-model="alertSets.present" />
          <label for="presentBox"></label>
      </div>
      <div class="row">
          <p>취소 환불 교환 내역</p>
          <input type="checkbox" id="exchangeLog" v-model="alertSets.exchangeLog" @change="set()" />
          <label for="exchangeLog"></label>
      </div>
  </div>
</template>

<script>
import {getAlertSetting, setAlertSetting} from '@/api/index'

export default {
  data () {
    return {
      alertSets: {
        buyLog: 0,
        present: 0,
        exchangeLog: 0
      }
    }
  },
  mounted () {
    getAlertSetting(sessionStorage.getItem('accessToken'))
      .then(res => {
        if (res.data.jsonData.resultCode === '0001') {
          this.alertSets.buyLog = res.data.jsonData.orderFlag
          this.alertSets.exchangeLog = res.data.jsonData.orderStatFlag
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
          // console.log(res)
        })
    }
  }
}
</script>

<style>

</style>
