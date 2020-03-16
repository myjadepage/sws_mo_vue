<template>
  <div class="buyFooterWrap">
      <button @click="payBtnClick">{{finalPrice|makeComma}}원 결제하기</button>
  </div>
</template>

<script>
export default {
  props: ['finalPrice'],
  methods: {
    payBtnClick () {
      this.$IMP().request_pay({
        pg: 'html5_inicis',
        pay_method: 'card',
        merchant_uid: 'merchant_' + new Date().getTime(),
        name: '주문명:결제테스트',
        amount: 14000,
        buyer_email: 'iamport@siot.do',
        buyer_name: '구매자이름',
        buyer_tel: '010-1234-5678',
        buyer_addr: '서울특별시 강남구 삼성동',
        buyer_postcode: '123-456'
      }, (resultSuccess) => {
        // 성공할 때 실행 될 콜백 함수
        var msg = '결제가 완료되었습니다.'
        msg += '고유ID : ' + resultSuccess.imp_uid
        msg += '상점 거래ID : ' + resultSuccess.merchant_uid
        msg += '결제 금액 : ' + resultSuccess.paid_amount
        msg += '카드 승인번호 : ' + resultSuccess.apply_num
        alert(msg)
      }, (resultFailure) => {
        // 실패시 실행 될 콜백 함수
        var msg = '결제에 실패하였습니다.'
        msg += '에러내용 : ' + resultFailure.error_msg
        alert(msg)
      })
    }
  }
}
</script>

<style>
.buyFooterWrap button{
    width: 100%;
    height: 50px;
    background-color: #e61754;
    color: #fff;
    font-size: 15px;
}
</style>
