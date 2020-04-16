<template>
  <div class="completeMessageWrap">
    <div v-if="!result">
      {{errMsg}}
    </div>
    <div v-if="result">
    <div class="message">주문이 정상적으로 접수되었습니다.</div>
    <div class="orderNum">주문번호 <span ref="orderCode" @click="copyOrderCode">{{orderCode}}</span></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info', 'result', 'errMsg', 'orderCode'],
  created () {
    console.log(navigator.userAgent)
  },
  methods: {
    copyOrderCode () {
      let t = document.createElement('textarea')
      document.body.appendChild(t)
      t.value = this.orderCode
      t.select()
      t.setSelectionRange(0, 99999)
      document.execCommand('copy')
      document.body.removeChild(t)
    }
  }
}
</script>

<style>
.completeMessageWrap{
  text-align: center;
  background-color: #fff;
  padding: 25px 47px;
  margin: 5px 0;
}

.completeMessageWrap .orderNum,.completeMessageWrap .message{
  font-size: 15px;
  font-weight: 500;
}

.completeMessageWrap .message{
  color: #e61754;
  margin-bottom: 15px;
}
</style>
