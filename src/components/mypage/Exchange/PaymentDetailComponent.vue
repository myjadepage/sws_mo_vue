<template>

  <div class="detailPayWrap exchange">
    <div class="payHeader">취소 금액 정보</div>
    <div class="payBody">
      <table>
        <tr>
          <th >취소 상품 총 금액</th>
          <td class="boldPrice">39,900원</td>
        </tr>
        <tr class="underline">
          <th>할인 금액 차감</th>
          <td>-3,000원</td>
        </tr>
        <tr >
          <th class="boldPrice">결제 취소 총 금액</th>
          <td class="boldPrice c_them">-36,900원</td>
        </tr>
        <tr>
          <th>신용카드 취소</th>
          <td>-34,900원</td>
        </tr>
        <tr class="underlineBlack">
          <th>포인트 반환</th>
          <td>-2,000원</td>
        </tr>
        <tr>
          <th class="thTotalPrice">총 결제 금액</th>
          <td class="tdTotalPrice">35,500원</td>
        </tr>
      </table>

    </div>
  </div>

</template>

<script>
export default {
  data () {
    return {
      paymentDetail: {}
    }
  }
}
</script>

<style>

</style>
