<template>
  <div class="detailOrderWrap">
      <div class="orderHeader">
         <span class="orderDate"><h3>{{order.date}}. {{order.tm}}</h3></span><span class="orderSta">{{order.sta}}</span>
      </div>
      <div class="orderNo">주문번호: {{order.no}}</div>
      <div class="orderBody">
          <div class="orderImage"></div>
         <router-link to="/product"><span class="orderTitle">{{order.title}}</span></router-link>
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
      return this.order.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    isOrderShipping () {
      return this.order.sta === '배송중' || this.order.sta === '배송완료'
    }
  }
}
</script>

<style>
</style>
