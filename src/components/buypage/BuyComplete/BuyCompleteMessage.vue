<template>
  <div class="completeMessageWrap">
    <div class="message">주문이 정상적으로 접수되었습니다.</div>
    <div class="orderNum">주문번호{{orderNum}}</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      orderNum: 12345567890
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
  font-size: 18px;
  font-weight: 500;
}

.completeMessageWrap .message{
  color: #e61754;
  margin-bottom: 15px;
}
</style>
