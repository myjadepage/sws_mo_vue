<template>
<div class="mainPageWrap">
<Bar :val="title" />
<OrderStatus/>
<MyPoint/>
</div>
</template>

<script>
import Bar from '@/components/mypage/shared/Bar'
import OrderStatus from '@/components/mypage/Main/OrderStatus'
import MyPoint from '@/components/mypage/Main/MyPoint'

export default {
  data () {
    return {
      title: '마이페이지'
    }
  },
  components: {
    Bar, OrderStatus, MyPoint
  }
}
</script>
<style>
.mainPageWrap{
  width: 360px;
}
</style>
