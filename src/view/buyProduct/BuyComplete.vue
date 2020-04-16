<template>
  <div class="buyCompleteWrap">
    <Bar val="구매완료" />
        <Message :result="result" :info="info" :errMsg="errMsg" :orderCode="orderCode" />
        <div v-if="result&&payOrdersStatus" class="success" >
        <Account :vbankInfo="vbankInfo"  v-if="payMethod===3" :info="info" />
        <Info :info="info" />
        <Guides/>
    </div>
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
    if (this.$route.query.imp_success === 'true') {
      this.result = true
      this.orderCode = this.$route.query.merchant_uid
    } else {
      this.result = false
      this.errMsg = this.$route.query.error_msg
    }

    let payInfo = JSON.parse(sessionStorage.getItem('payItem'))

    this.info = payInfo
    sessionStorage.removeItem('products')
    sessionStorage.removeItem('selectedOptions')
    sessionStorage.removeItem('payItem')

    switch (this.info.payMethod) {
      case 'card':
        this.payMethod = 1
        break
      case 'trans':
        this.payMethod = 2
        break
      case 'vbank':
        this.payMethod = 3
        break
      case 'phone':
        this.payMethod = 4
        break
      case 'samsung':
        this.payMethod = 5
        break
      case 'kpay':
        this.payMethod = 6
        break
      case 'cultureland':
        this.payMethod = 7
        break
      case 'smartculture':
        this.payMethod = 8
        break
      case 'happymoney':
        this.payMethod = 9
        break
      case 'booknlife':
        this.payMethod = 10
        break
      default:
        break
    }

    let item = {
      paidAmount: payInfo.amount, totalAmount: payInfo.totalAmount, payTypeCode: this.payMethod, feeRate: 3.5, fee: Math.round(Math.round(payInfo.amount * 0.035) * 0.1) * 10, impUid: this.$route.query.imp_uid
    }

    console.log(item)

    if (sessionStorage.getItem('orderSysId')) {
      payOrders(item, sessionStorage.getItem('orderSysId')).then(res => {
        console.log(res)
        this.vbankInfo = {...res.data.jsonData.res}
        this.payOrdersStatus = true
        sessionStorage.removeItem('orderSysId')
      }).catch(err => {
        console.log(err)
        sessionStorage.removeItem('orderSysId')
      })
    }
  },

  data () {
    return {
      result: true, // 성공 true / 실패 false
      payOrdersStatus: false,
      item: {},
      info: {},
      payMethod: 0,
      errMsg: '',
      orderCode: '',
      vbankInfo: {
        vbank_code: '',
        vbank_holder: '',
        vbank_name: '',
        vbank_num: ''
      }
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
