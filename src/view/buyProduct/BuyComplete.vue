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
import {payOrders} from '@/api/index.js'

export default {
  created () {
    let item = {
      paidAmount: 0, totalAmount: 0, payTypeCode: 1, feeRate: 1, fee: 1, imp_uid: this.$route.query.imp_uid
    }

    payOrders(item, sessionStorage.getItem('orderSysId')).then(res => {
      console.log(res)
      sessionStorage.removeItem('orderSysId')
    }).catch(err => {
      console.log(err)

      sessionStorage.removeItem('orderSysId')
    })

    // console.log(this.$route.query)
  },

  data () {
    return {
      impResponse: null
    }
  },

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
