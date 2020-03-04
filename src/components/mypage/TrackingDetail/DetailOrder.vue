<template>
  <div class="detailOrderWrap">
      <div class="orderHeader">
         <span class="orderDate"><h3>{{order.date}} {{order.tm}}</h3></span><span class="orderSta">{{order.sta}}</span>
      </div>
      <div class="orderNo">주문번호: {{order.no}}</div>
      <div class="orderBody">
          <div class="orderImage"></div>
          <span class="orderTitle">{{order.title}}</span>
          <br>
          <span class="orderOption">{{order.option}}</span>
          <div v-if="!isOrderShipping">{{formatPrice}}원</div>
          <br v-if="isOrderShipping">
          <button class="detailOrderBtn cancelBtn" v-if="order.sta=='결제완료'||order.sta=='상품준비중'">주문취소</button>
          <button class="detailOrderBtn" v-if="order.sta=='배송완료'||order.sta=='배송중'">교환요청</button>
          <button class="detailOrderBtn" v-if="order.sta=='배송완료'||order.sta=='배송중'">반품요청</button>
          <button class="detailOrderBtnCr" v-if="order.sta=='배송완료'||order.sta=='배송중'">수취확인/리뷰작성</button>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      order: {
        no: 12345678,
        date: '2019.03.15',
        tm: '18:43',
        sta: '상품준비중',
        title: '[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정',
        option: '[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더',
        price: 32500
      }
    }
  },
  computed: {
    formatPrice () {
      return this.order.price.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    isOrderShipping () {
      return this.order.sta === '배송중' || this.order.sta === '배송완료'
    }
  }
}
</script>

<style>
.detailOrderWrap{
    font-family: "Noto Sans KR";
    margin-top: 5px;
    padding-left: 12px;
    background-color: white;
}

.detailOrderWrap .orderHeader h3{
    font-family: Roboto;
    font-size: 16px;
    font-weight: 500;
    float: left;
}

.detailOrderWrap .orderSta{
    float: right;
}

.detailOrderWrap .orderHeader{
    padding: 20px 12px 5px;
    border-bottom: 1px solid #eeeeee;
    height: 20px;
}

.detailOrderWrap .orderBody{
    padding: 10px 0 15px 0;
    border-top: 1px solid #eeeeee;
}

.detailOrderWrap .orderNo{
    /* padding:10px 0 10px 12px; */
    height: 20px;
}

.detailOrderWrap .orderHeader .orderSta{
    color: #e61754;
    font-size: 14px;
    font-weight: 500;
}

.detailOrderWrap .orderNo{
    margin: 10px 12px;
    font-size: 13px;
    font-weight: 500;
    height: 20px;
    color: #666666;
}

.detailOrderWrap .orderImage{
    float: left;
    width:70px;
    height: 70px;
    background-color:#f3f3f3;
    margin: 0 10px 102px 0;
}

.detailOrderWrap .orderOption{
    color: #666666;
}

.detailOrderWrap .detailOrderBtn{
    text-align: center;
    font-size: 13px;
    width: 70px;
    height: 34px;
    border: 1px solid #cccccc;
    border-radius: 2px;
    margin: 15px 0 0 0;
}

 .detailOrderWrap .cancelBtn{
    color: #666666;
    width: 246px;
}

.detailOrderWrap .detailOrderBtnCr{
    text-align: center;
    font-size: 13px;
    width: 110px;
    height: 32px;
    color: #e61754;
    border: 1px solid #e61754;
     margin: 15px 0 0 0;
    border-radius: 2px;
}

.detailOrderWrap .orderPrice{
    font-size: 14px;
    font-weight: 500;
    margin-top: 5px;
}

</style>
