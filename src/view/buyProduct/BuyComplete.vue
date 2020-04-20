<template>
  <div class="buyCompleteWrap">
    <Bar :backBtn="false" val="구매완료" />
        <Message :result="result" :info="info" :errMsg="errMsg" :orderCode="orderCode" />
        <div v-if="result&&payOrdersStatus" class="success" >
        <Account :vbankInfo="vbankInfo"  v-if="payMethod===3" :info="info" />
        <Info :info="info" />
        <Guides/>
    </div>
    <Footer :orderCode="orderCode" />
    </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Message from '@/components/buypage/BuyComplete/BuyCompleteMessage'
import Account from '@/components/buypage/BuyComplete/BuyCompleteAccount'
import Info from '@/components/buypage/BuyComplete/BuyCompleteInfo'
import Guides from '@/components/buypage/BuyComplete/BuyCompleteGuides'
import Footer from '@/components/buypage/BuyComplete/BuyCompleteFooter'
import {payOrders, patchUserPoint, getAccessToken, removeCartList} from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 구매완료'
  },
  created () {
    if (this.$route.query.imp_success === 'true') {
      this.result = true
      this.orderCode = this.$route.query.merchant_uid
    } else {
      this.result = false
      this.errMsg = this.$route.query.error_msg
    }

    let payInfo = JSON.parse(sessionStorage.getItem('payItem'))

    if (this.result === true && payInfo.discountPoint) {
      let item = {
        treatFlag: 2,
        point: payInfo.discountPoint
      }

      patchUserPoint(sessionStorage.getItem('accessToken'), item)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
              .then(res => {
                sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
              })
              .catch(err => {
                if (err.response.status === 401) {
                  this.$store.dispatch('logOut')
                  this.$router.push('/Login')
                }
              })
          }
        })
    }

    this.info = payInfo

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
    console.log(sessionStorage.getItem('orderSysId'))

    if (sessionStorage.getItem('orderSysId')) {
      payOrders(item, sessionStorage.getItem('orderSysId')).then(res => {
        if (res.data.jsonData.resultCode === '0001') {
          console.log(res)
          this.vbankInfo = {...res.data.jsonData.res}
          this.payOrdersStatus = true

          if (this.info.basketSysIds.length > 0 && this.$store.state.isLogin) {
            let ids = this.info.basketSysIds.join()
            removeCartList(sessionStorage.getItem('accessToken'), {basketSysIds: ids})
              .then(res => {
                console.log(res)
              })
              .catch(err => {
                console.log(err)
              })
          } else if (this.info.basketSysIds.length > 0 && !this.$store.state.isLogin) {
            let cartList = JSON.parse(sessionStorage.getItem('nonMemberCartList'))
            for (let i = cartList.length - 1; i >= 0; i--) {
              if (this.info.basketSysIds.includes(cartList[i].basketSysId)) {
                cartList.splice(i, 1)
              }
            }
            sessionStorage.setItem('nonMemberCartList', JSON.stringify(cartList))
          }

          sessionStorage.removeItem('orderSysId')
          sessionStorage.removeItem('products')
          sessionStorage.removeItem('selectedOptions')
          sessionStorage.removeItem('payItem')
        } else {
          this.result = false
          this.errMsg = '결제에 실패했습니다.'
        }
      }).catch(err => {
        if (err.response.status === 401) {
          getAccessToken(sessionStorage.getItem('refreshToken'))
            .then(res => {
              sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
            })
            .catch(err => {
              if (err.response.status === 401) {
                this.$store.dispatch('logOut')
                this.$router.push('/Login')
              }
            })
        }
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
        vbank_num: '',
        vbank_date: ''
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
