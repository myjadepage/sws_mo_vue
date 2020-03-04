<template>
<div class="mainPageWrap">
<Bar :val="title" />
<OrderStatus/>
<ul class="tempLink">
  <h2>임시 링크</h2>
  <li><router-link to="/notice">공지사항</router-link></li>
  <li><router-link to="/contact">문의하기</router-link></li>
  <li><router-link to="/tracking">배송조회</router-link></li>
  <li><router-link to="/tracking/detail">상세조회</router-link></li>
</ul>
</div>
</template>

<script>
import Bar from '@/components/mypage/shared/Bar'
import OrderStatus from '@/components/mypage/Main/OrderStatus'

export default {
  data () {
    return {
      title: '마이페이지'
    }
  },
  components: {
    Bar, OrderStatus
  }
}
</script>
<style>
.mainPageWrap{
  max-width: 360px;
}

.mainPageWrap .tempLink li{
  cursor: pointer;
  list-style-type: circle;
  font-size: 1rem;
}
</style>
