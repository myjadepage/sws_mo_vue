<template>
<div class="orderStatus">
    <h2>주문 배송 조회</h2>
    <ul class="orderList" ref="Orderlists">
        <li><span :class="this.orderCnt[0]===0?'listCnt zero':'listCnt'">{{this.orderCnt[0]}}</span><div class="listName">주문접수</div></li>
        <li><span :class="this.orderCnt[1]===0?'listCnt zero':'listCnt'">{{this.orderCnt[1]}}</span><div class="listName">결제완료</div></li>
        <li><span :class="this.orderCnt[2]===0?'listCnt zero':'listCnt'">{{this.orderCnt[2]}}</span><div class="listName">배송준비중</div></li>
        <li><span :class="this.orderCnt[3]===0?'listCnt zero':'listCnt shipping'">{{this.orderCnt[3]}}</span><div class="listName">배송중</div></li>
        <li><span :class="this.orderCnt[4]===0?'listCnt zero':'listCnt'">{{this.orderCnt[4]}}</span><div class="listName">배송완료</div></li>
    </ul>
</div>
</template>

<script>
export default {
  data () {
    return {
      orderCnt: [0, 3, 0, 5, 0]
    }
  }
}
</script>

<style>
.orderStatus{
    margin: 30px 10px 10px 10px;
    display: inline-block;
}

.orderStatus h2{
    margin: 10px;
}

.orderStatus .orderList li{
    margin: 0 5px 0 5px;
    width: 3.5rem;
    float: left;
    text-align: center;
}

.orderStatus .orderList .listCnt{
    font-size: 2rem;
}

.zero{
color:lightgray;
}

.shipping{
    color: #E61754;
}

.orderStatus .orderList .listName{
    font-size: 0.8em;
}
</style>
