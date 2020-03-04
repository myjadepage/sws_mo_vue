<template>
  <div class="trackingOrderWrap">
      <div class="orderHeader">
         <span class="orderDate"><h3>{{order.date}}</h3></span><span class="orderSta">{{order.sta}}</span>
        </div>
        <router-link to="/tracking/detail">
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
.trackingOrderWrap{
  display: inline-block;
    font-family: "Noto Sans KR";
    margin-top: 5px;
    max-width: 360px;
    background-color: white;
}

.trackingOrderWrap h3{
    display: inline-block;
    font-size: 16px;
    font-weight: 500;
}

.trackingOrderWrap .orderBody{
  float: left;
  margin: 0 12px 15px;
}

.trackingOrderWrap .orderTitle,.orderOption{
  font-size: 14px;
}

.trackingOrderWrap .orderHeader{
    border-bottom: 1px solid #f3f3f3;
    margin:20px 12px 10px;
    padding-bottom: 5px;
}

.trackingOrderWrap .orderSta{
    float: right;
    font-size: 14px;
    font-weight: 500;
    color:#e61754;
}

.trackingOrderWrap .orderDate{
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
}

.trackingOrderWrap .orderOption{
    color: #666666;
}

.trackingOrderWrap .orderImage{
    float: left;
    width:70px;
    height: 70px;
    background-color:#f3f3f3;
    margin-right: 10px;
}
.trackingOrderWrap .shippingSearchBtn{
  width: 70px;
  height: 32px;
  color: #e61754;
  border: 1px solid #e61754;
  border-radius: 2px;
  margin: 15px 0 15px 82px;
}

</style>
