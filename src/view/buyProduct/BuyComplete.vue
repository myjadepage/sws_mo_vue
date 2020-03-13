<template>
  <div class="buyCompleteWrap">
    <Bar val="구매완료" />
    <Message/>
    <Account/>
    <Info/>
    <Guides/>
    <Footer/>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Message from '@/components/buypage/BuyComplete/BuyCompleteMessage'
import Account from '@/components/buypage/BuyComplete/BuyCompleteAccount'
import Info from '@/components/buypage/BuyComplete/BuyCompleteInfo'
import Guides from '@/components/buypage/BuyComplete/BuyCompleteGuides'
import Footer from '@/components/buypage/BuyComplete/BuyCompleteFooter'

export default {
  components: {
    Bar, Message, Account, Info, Guides, Footer
  }
}
</script>

<style>
.buyCompleteWrap{
  min-height: 640px;
  background-color: #f3f3f3;
}
</style>
