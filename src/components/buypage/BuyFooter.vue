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
      let products = JSON.parse(sessionStorage.getItem('products'))
      let options = JSON.parse(sessionStorage.getItem('selectedOptions'))
      let optionQty = 0

      if (options) {
        for (const o of options) {
          for (const oo of o) {
            optionQty += oo.count
          }
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

      for (let i = 0; i < products.length; i++) {
        const product = products[i]
        const option = options[i]
        let op = {
          'prdtSysId': product.prdtSysId,
          'qty': 0,
          'price': product.price,
          'discount': product.discount,
          'discountRate': product.discountRate
        // 'optionGroups': []
        }

        let id = 1
        if (product.isOptionNormal) {
          op.optionGroups = []
          for (const o of option) {
            op.qty += o.count
            let og = {
              groupId: id++,
              qty: o.count,
              options: []
            }
            for (const oo of o.contentGroup) {
              og.options.push({
                prdtNormalOptionSysId: oo.prdtNormalOptionSysId,
                optionKeyName: oo.name,
                price: oo.price
              })
            }
            op.optionGroups.push(og)
          }
        } else {
          op.qty = option[0].count
        }

        item.orderProducts.push(op)
      }

      console.log(item)

      // let res = {'jsonData': {
      //   'res': {
      //     'orderSysId': 9,
      //     'orderProducts': [
      //       {
      //         'prdtSysId': 39,
      //         'orderPrdtSysId': 5
      //       },
      //       {
      //         'prdtSysId': 40,
      //         'orderPrdtSysId': 6
      //       }
      //     ],
      //     'orderCode': 'S20200306190346-0000003'
      //   },
      //   'code': 200
      // }}

      sessionStorage.setItem('payItem', JSON.stringify({...item, payInfo: this.$store.getters.getPayPriceInfo, payMethod: this.$store.getters.getPayMethod}))
      // sessionStorage.setItem('orderRes', JSON.stringify(res))

      postOrders(item)
        .then(res => { // 주문정보등록 성공 시
          console.log(res)

          sessionStorage.setItem('orderSysId', res.data.jsonData.res.orderSysId)
          let name = ''
          if (products.length > 1) {
            name = `${products[0].name} 외 ${products.length - 1}건`
          } else {
            name = products[0].name
          }

          this.$IMP().request_pay({ // 아임포트 호출
            pg: 'html5_inicis',
            pay_method: this.$store.getters.getPayMethod,
            merchant_uid: res.data.jsonData.res.orderCode,
            name: name,
            amount: this.finalPrice,
            buyer_email: item.orderEmail,
            buyer_name: item.orderName,
            buyer_tel: item.orderMobile,
            buyer_addr: item.receiverAddress1 + ' ' + item.receiverAddress2,
            buyer_postcode: item.receiverPostNumber,
            m_redirect_url: `localhost:8080/buyComplete`
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
