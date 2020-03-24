<template>
  <div class="buyCompleteWrap">
    <div v-if="result" class="success"></div>
    <Bar val="구매완료" />
    <Message :info="info" />
    <Account v-if="payMethod===3" :info="info" />
    <Info :info="info" />
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
// import {payOrders} from '@/api/index.js'

export default {
  created () {
    let payInfo = JSON.parse(sessionStorage.getItem('payItem'))

    this.info = payInfo
    this.info.orderCode = JSON.parse(sessionStorage.getItem('orderRes')).jsonData.res.orderCode

    switch (this.$store.getters.getPayMethod) {
      case 'card':
        this.payMethod = 0
        break
      case 'trans':
        this.payMethod = 1
        break
      case 'vbank':
        this.payMethod = 2
        break
      case 'phone':
        this.payMethod = 3
        break
      case 'samsung':
        this.payMethod = 4
        break
      case 'kpay':
        this.payMethod = 5
        break
      case 'cultureland':
        this.payMethod = 6
        break
      case 'smartculture':
        this.payMethod = 7
        break
      case 'happymoney':
        this.payMethod = 8
        break
      case 'booknlife':
        this.payMethod = 9
        break
      default:
        break
    }

    let item = {
      paidAmount: payInfo.amount, totalAmount: payInfo.totalAmount, payTypeCode: this.payMethod, feeRate: 3.5, fee: Math.round(Math.round(payInfo.amount * 0.035) * 0.1) * 10, imp_uid: this.$route.query.imp_uid
    }

    console.log(item)
    console.log(this.info)

    // console.log(this.payMethod)
    // sessionStorage.removeItem('payItem')
    // sessionStorage.removeItem('selectedOptions')
    // sessionStorage.removeItem('orderCode')
    // sessionStorage.removeItem('product')

    // payOrders(item, sessionStorage.getItem('orderSysId')).then(res => {
    //   console.log(res)
    //   sessionStorage.removeItem('orderSysId')
    // }).catch(err => {
    //   console.log(err)

    //   sessionStorage.removeItem('orderSysId')
    // })

    // console.log(this.$route.query)
  },

  data () {
    return {
      result: true, // 성공 true / 실패 false
      item: {},
      info: {},
      payMethod: 0

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
