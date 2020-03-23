<template>
  <div @click.self="closeModal" class="deliveryInfoModal">
    <ModalHeader @modalClose="closeModal" :title="'배송정보'" />
    <div class="modalBody">
      <div class="info1">
          배송정보는 판매자의 사정에 따라 변동될 수 있으며, 구매 당시의 배송정보가 적용됩니다.
      </div>
      <div class="priceInfo">
          <div class="title">배송비</div>
          <ul>
            <li>무료배송</li>
            <li>제주/도서산간 추가 배송비 6,500원 (주문 후 별도 입금)</li>
            <li>택배사 : 롯데택배</li>
          </ul>
      </div>

      <div class="deliveryTypeInfo">
          <div class="title">배송유형</div>
          <ul>
            <li><span class="highlight">02/21(금)</span> 이내 도착 예정</li>
            <li>판매자가 설정한 배송일로 실제 배송일과 차이가 있을 수 있음</li>
            <li>주말/공휴일과 겹칠 경우 다음 영업일에 발송</li>
            <li>제품 수령 후 7일 이내 환불 가능</li>
            <li>‘결제완료’ 상태일때까지만 즉시 취소 가능. ‘상품 준비 중’ 상태부터는 ‘취소요청’만 가능</li>
          </ul>
        </div>

        <div class="rewardInfo">
          <div class="title">책임배송보상</div>
            결제일 +2일 이내(주말, 공휴일 제외) 상품을 받지 못하신 경우, 지연 1일당 티몬 적립금 500원을 지급해드립니다. (최대 5000원과 상품가 중 작은 금액 지급)
        </div>
    </div>
  </div>
</template>

<script>
import ModalHeader from './ModalHeader'
export default {
  components: {
    ModalHeader
  },
  methods: {
    closeModal () {
      this.$emit('modalClose')
    }
  }
}
</script>

<style>
  .deliveryInfoModal{
    z-index: 1000;
    position: fixed;
    top: 20px;
    left: 5%;
    width: 90%;
    background-color: #fff;
  }

  .modalBody{
    padding: 20px 14px;
    color: #666666;
  }

  .modalBody .info1{
    margin-bottom: 30px;
  }

  .modalBody .title{
    margin-top: 30px;
    margin-bottom: 5px;
  }

  .modalBody li::before{
    content: '- ';
  }

  .modalBody .title{
    font-size: 15px;
    color: #e61754;
    font-weight: 500;
  }

  .modalBody .highlight{
    color: #111111;
    font-weight: 500;
  }

</style>
