<template>
  <div class="completeFooterWrap">
    <button @click="orderDetailBtnClick" class="orderDetailBtn">주문 상세보기</button><button @click="orderContinueBtnClick" class="orderContinueBtn">쇼핑 계속하기</button>
  </div>
</template>

<script>

export default {
  props: ['orderCode'],
  methods: {
    orderDetailBtnClick () {
      this.$router.push(`/tracking/detail/${this.orderCode}`)
    },
    orderContinueBtnClick () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
  .completeFooterWrap{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .completeFooterWrap button{
    height: 50px;
    width: 50%;
    font-size: 15px;
  }
  .completeFooterWrap button.orderDetailBtn{
    background-color: black;
    color: white;
  }
  .completeFooterWrap button.orderContinueBtn{
    background-color: #e61754;
    color: white;
  }
</style>
