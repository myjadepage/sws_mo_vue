<template>
  <div class="setBox">
      <div class="row">
          <p>구매내역</p>
          <input type="checkbox" id="buyLog" v-model="alertSets.buyLog" />
          <label for="buyLog"></label>
      </div>
      <div class="row">
          <p>선물함</p>
          <input type="checkbox" id="presentBox" v-model="alertSets.present" />
          <label for="presentBox"></label>
      </div>
      <div class="row">
          <p>취소 환불 교환 내역</p>
          <input type="checkbox" id="exchangeLog" v-model="alertSets.exchangeLog" />
          <label for="exchangeLog"></label>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      alertSets: {
        buyLog: false,
        present: true,
        exchangeLog: true
      }
    }
  }
}
</script>

<style>

</style>
