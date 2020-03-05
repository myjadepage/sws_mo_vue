<template>
<div class="mainPageWrap">
<Bar :val="title" />
<OptionBar/>
<Info/>
<OrderStatus/>
<Util/>
<Settings/>
<Footer/>

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

</style>
