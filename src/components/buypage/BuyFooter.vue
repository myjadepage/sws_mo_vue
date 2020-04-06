<template>
  <div class="buyFooterWrap">
      <button @click="payBtnClick">{{finalPrice|makeComma}}원 결제하기</button>
  </div>
</template>

<script>
import {postOrders} from '@/api/index.js'

export default {
  props: ['finalPrice', 'coupon', 'addresses'],
  methods: {
    payBtnClick () {
      let product = JSON.parse(sessionStorage.getItem('product'))
      let options = JSON.parse(sessionStorage.getItem('selectedOptions'))
      let optionQty = 0

      if (options) {
        for (const o of options) {
          optionQty += o.count
        }
      }

      let item = {
        'amount': this.finalPrice,
        'totalAmount': this.$store.getters.getPayPriceInfo.prdtPrice,
        'qty': optionQty,
        'orderName': this.$store.getters.getOrdererInfo.name,
        'orderPostNumber': this.$store.getters.getPostCode.zonecode,
        'orderAddress1': '',
        'orderAddress2': '',
        'orderTel': this.$store.getters.getOrdererInfo.phone,
        'orderMobile': this.$store.getters.getOrdererInfo.phone,
        'orderEmail': this.$store.getters.getOrdererInfo.email,
        'receiverName': this.$store.getters.getDestInfo.name,
        'receiverPostNumber': this.$store.getters.getPostCode.zonecode,
        'receiverAddress1': this.$store.getters.getPostCode.address,
        'receiverAddress2': this.$store.getters.getPostCode.detail,
        'receiverTel': this.$store.getters.getDestInfo.phone,
        'receiverMobile': this.$store.getters.getDestInfo.phone,
        'couponDiscount': this.coupon,
        // 'couponList': '1;2',
        'orderProducts': []
      }

      for (const a of this.addresses) {
        if (a.initFlag === 1) {
          item.orderAddress1 = a.newAddress
          item.orderAddress2 = a.addressDetail
        }
      }

      item.orderProducts.push({
        'prdtSysId': product.prdtSysId,
        'qty': optionQty,
        'price': product.price,
        'discount': product.discount,
        'discountRate': product.discountRate
        // 'optionGroups': []
      })

      if (options[0].contentName) {
        item.orderProducts[0].optionGroups = []
        let idx = 1
        for (const o of options) {
          let op = {
            groupId: idx++, qty: o.count, options: []
          }

          for (const c of o.contentGroup) {
            if (c.name === '선택없음') {
              continue
            }
            op.options.push({prdtNormalOptionSysId: c.prdtNormalOptionSysId, optionKeyName: c.name, price: c.price})
          }

          item.orderProducts[0].optionGroups.push(op)
        }
      }

      console.log(item)

      let res = {'jsonData': {
        'res': {
          'orderSysId': 9,
          'orderProducts': [
            {
              'prdtSysId': 39,
              'orderPrdtSysId': 5
            },
            {
              'prdtSysId': 40,
              'orderPrdtSysId': 6
            }
          ],
          'orderCode': 'S20200306190346-0000003'
        },
        'code': 200
      }}

      sessionStorage.setItem('payItem', JSON.stringify(item))
      sessionStorage.setItem('orderRes', JSON.stringify(res))

      this.$router.push('/buycomplete?imp_uid=imp1234567890&merchant_uid=order12345')

      postOrders(item)
        .then(res => { // 주문정보등록 성공 시
          console.log(res)

          sessionStorage.setItem('orderSysId', res.data.jsonData.res.orderSysId)

          this.$IMP().request_pay({ // 아임포트 호출
            pg: 'html5_inicis',
            pay_method: this.$store.getters.getPayMethod,
            merchant_uid: res.data.jsonData.res.orderCode,
            name: product.name,
            amount: this.finalPrice,
            buyer_email: item.orderEmail,
            buyer_name: item.orderName,
            buyer_tel: item.orderMobile,
            buyer_addr: item.receiverAddress1 + ' ' + item.receiverAddress2,
            buyer_postcode: item.receiverPostNumber,
            m_redirect_url: 'http://localhost:8080/buyComplete'
          }, (res) => {
            if (res.sucess) {
              console.log(res)
              this.$router.push('/buycomplete/success')
            } else {
              this.$router.push('/buycomplete/failure')
            }
          })
        })
        .catch(error => { // 주문정보등록 실패
          console.log(error)
        })
    }
  }
}
</script>

<style>
.buyFooterWrap button{
    width: 100%;
    height: 50px;
    background-color: #e61754;
    color: #fff;
    font-size: 15px;
}
</style>
