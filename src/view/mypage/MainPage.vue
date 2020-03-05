<template>
<div class="mainPageWrap">
<Bar :val="title" />
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
import OptionBar from '@/components/mypage/Main/MyOptionIconBar'
import Info from '@/components/mypage/Main/MyInfo'
import OrderStatus from '@/components/mypage/Main/MyOrderStatus'
import Util from '@/components/mypage/Main/MyUtility'
import Settings from '@/components/mypage/Main/MySettings'
import Footer from '@/components/mypage/Main/MyFooter'

export default {
  data () {
    return {
      title: '마이페이지'
    }
  },
  components: {
    Bar, OptionBar, Info, OrderStatus, Util, Settings, Footer
  }
}
</script>
<style>
.mainPageWrap{
  max-width: 360px;
  background-color: #f3f3f3;
}

.mainPageWrap .tempLink li{
  cursor: pointer;
  font-size: 1rem;
}
</style>
