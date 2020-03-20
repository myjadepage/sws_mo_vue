<template>
  <div class="completeFooterWrap">
    <button class="orderDetailBtn">주문 상세보기</button><button class="orderContinueBtn">쇼핑 계속하기</button>
  </div>
</template>

<script>
export default {

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
