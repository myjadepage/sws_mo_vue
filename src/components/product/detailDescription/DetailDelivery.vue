<template>
  <div class="detailDeliveryWrap">
    <div class="brandInfo">
      <h2>브랜드 정보</h2>
      <ul>
        <li><span class="ico_clock"></span>  주중 10시 10 AM ~ 6:00 PM, 주말 휴무(공휴일 포함)</li>
        <li><span class="ico_call"></span>070-1234-5678<a href="tel:070-1234-5678" class="callBtn">전화하기</a></li>
        <li><span class="ico_location"></span>12345) 광주광역시 서부 군본2로 15번길 1(화정동) cj대한통운 광천대리점 업타운홀릭</li>
      </ul>
    </div>

    <div class="deliveryInfo">
      <h2>배송안내</h2>
      <ul>
        <li>주문일(평일 6시이전)로 부터 주말, 외 2 ~ 5일 배송 소요</li>
        <li>입고지연의 상품의 경우 부분배송 및 개별 안내</li>
      </ul>
    </div>

    <div class="exchangeInfo">
      <h2>교환환불</h2>
      <ul>
        <li>상품 가치가 현저히 훼손된 경우를 제외한 모든 사유에 대해 환불이 가능합니다. </li>
        <li>환불교환 가능 기간은 상품 수령 후(배송완료 시점으로 부터) 7일 이내 입니다. </li>
        <li>교환/환불이 발생하는 경우, 그 원인을 제공한 자가 배송비를 부담합니다. </li>
      </ul>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style>

.detailDeliveryWrap{
  padding: 26px 12px;
}

.detailDeliveryWrap h2{
  font-size: 15px;
  font-weight: 500;
  border-bottom: 1px solid #000000;
  padding-bottom: 5px;
}

.brandInfo, .deliveryInfo, .exchangeInfo{
  margin-bottom: 40px;
}

.detailDeliveryWrap .deliveryInfo ul, .detailDeliveryWrap .exchangeInfo ul{
  padding: 0 0 0 20px;
  list-style-position: outside;
}

.detailDeliveryWrap .deliveryInfo li, .detailDeliveryWrap .exchangeInfo li{
  list-style: disc;
}

.detailDeliveryWrap li{
  margin-top: 10px;
}

.detailDeliveryWrap .callBtn{
  float: right;
  color: #e61754;
  text-decoration: underline;
}

.detailDeliveryWrap .ico_clock{
  display: inline-block;
  background-repeat: no-repeat;
  width: 18px;
  height: 18px;
  background-image: url('../../../assets/img/ico/clock.png');
  background-size: 100%;
  margin-right: 4px;
  position: relative;
  top: 4px;
}

.detailDeliveryWrap .ico_call{
  display: inline-block;
  background-repeat: no-repeat;
  width: 16px;
  height: 16px;
  background-image: url('../../../assets/img/ico/ico_call.png');
  background-size: 100%;
  margin-right: 10px;
  position: relative;
  top: 4px;
}
.detailDeliveryWrap .ico_location{
  float: left;
  background-repeat: no-repeat;
  width: 14px;
  height: 20px;
  background-image: url('../../../assets/img/ico/ico_location.png');
  background-size: 100%;
  margin-right: 10px;
  position: relative;
  top: 4px;
  margin-bottom: 20px;
}

</style>
