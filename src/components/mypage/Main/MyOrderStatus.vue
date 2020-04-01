<template>
<div class="orderStatusWrap">
<div class="staHeader">주문 배송 조회</div>
<div class="staBody">
  <ul>
        <router-link to="/tracking"><li class="trackingData"><span class="trackingCnt" :class="{'shipping':member.orderCnt > 0}">{{member.orderCnt}}</span><div class="trackingSta">주문접수</div></li></router-link>
        <router-link to="/tracking"><li class="trackingData"><span class="trackingCnt" :class="{'shipping':member.payCnt > 0}">{{member.payCnt}}</span><div class="trackingSta">결제완료</div></li></router-link>
        <router-link to="/tracking"><li class="trackingData"><span class="trackingCnt" :class="{'shipping':member.deliveryReadyCnt > 0}">{{member.deliveryReadyCnt}}</span><div class="trackingSta">배송준비중</div></li></router-link>
        <router-link to="/tracking"><li class="trackingData"><span class="trackingCnt" :class="{'shipping':member.deliveringCnt > 0}">{{member.deliveringCnt}}</span><div class="trackingSta">배송중</div></li></router-link>
        <router-link to="/tracking"><li class="trackingData"><span class="trackingCnt" :class="{'enabled':member.deliveryCompleteCnt > 0}">{{member.deliveryCompleteCnt}}</span><div class="trackingSta">배송완료</div></li></router-link>
      </ul>
</div>
</div>
</template>

<script>
export default {
  props: ['member'],
  data () {
    return {
    }
  }

}
</script>

<style>

</style>
