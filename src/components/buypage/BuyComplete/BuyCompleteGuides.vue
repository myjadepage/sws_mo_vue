<template>
  <div class="completeGuidesWrap">
    <ul>
      <li>입금자와 주문상품 수령인이 일치해야만 입금 확인이 가능합니다. (불일치하는 경우, 입금 확인이 불가합니다.)</li>
      <li>입금 기한 내에 입금하지 않으면 주문이 전체 자동 취소 처리됩니다.</li>
      <li>입금 시 은행별 이체 수수료가 발생될 수 있습니다.<br>(타행이체, 창구 영업시간 외 이체 등)</li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.completeGuidesWrap{
  padding: 12px 22px;
  height: 240px;
  color: #666666;
}

.completeGuidesWrap  ul{
    padding: 0 10px
}

.completeGuidesWrap li{
    list-style: disc;
}
</style>
