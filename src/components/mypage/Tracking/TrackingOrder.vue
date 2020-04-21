<template>
  <div class="trackingOrderWrap">
      <div class="orderHeader">
         <span class="orderDate"><h3>{{order.date}}</h3></span><span class="orderSta">{{order.sta}}</span>
        </div>
        <router-link :to="`/tracking/detail/${order.orderCode}`">
      <div class="orderBody">
          <div class="orderImage"></div>
          <span class="orderTitle">{{order.title}}</span>
          <br>
          <span class="orderOption">{{order.option}}</span>
          <br>
          <button v-if="mode===2||mode===3" class="shippingSearchBtn">배송조회</button>
      </div>
      </router-link>
  </div>
</template>

<script>
export default {
  props: ['mode'],
  data () {
    return {
      order: {date: '2019.03.15', sta: '상품준비중', title: '[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정', option: '[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더'}
    }
  }
}
</script>

<style>

</style>
