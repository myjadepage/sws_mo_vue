<template>
  <div class="buyFooterWrap">
      <button @click="payBtnClick">{{finalPrice|makeComma}}원 결제하기</button>
  </div>
</template>

<script>
import {postOrders} from '@/api/index.js'

export default {
  props: ['finalPrice', 'coupon', 'addresses', 'point'],
  methods: {
    payBtnClick () {
      let products = JSON.parse(sessionStorage.getItem('products'))
      let options = JSON.parse(sessionStorage.getItem('selectedOptions'))
      let addPrdts = JSON.parse(sessionStorage.getItem('selectedAddPrdts'))
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

      if (!item.orderName || !item.orderTel || !item.receiverName || !item.receiverTel) {
        alert('모든 정보가 입력되지 않았습니다.')
        return
      }

      for (const a of this.addresses) {
        if (a.initFlag === 1) {
          item.orderAddress1 = a.newAddress
          item.orderAddress2 = a.addressDetail
        }
      }

      let basketSysIds = []

      for (let i = 0; i < products.length; i++) {
        const product = products[i]
        const option = options[i]
        const addPrdt = addPrdts[i]

        let op = {
          'prdtSysId': product.prdtSysId,
          'qty': 0,
          'price': product.price,
          'discount': product.discount,
          'discountRate': product.discountRate
        // 'optionGroups': []
        }

        if (product.isAddingProduct) {
          op.addingProducts = []
          addPrdt.forEach(ap => {
            op.addingProducts.push({
              prdtSysId: product.prdtSysId,
              prdtAddingProductDetailSysId: ap.prdtAddingProductDetailSysId,
              price: ap.price,
              qty: ap.addingQty
            })
          })
        }

        let id = 1
        if (option) {
          op.optionGroups = []
          for (const o of option) {
            if (o.contentName === '') {
              op.qty = o.count
              continue
            }
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

          if (op.optionGroups.length === 0) {
            delete op.optionGroups
          }
        } else {
          op.qty = option[0].count
        }

        if (product.basketSysId !== undefined) {
          basketSysIds.push(product.basketSysId)
        }

        item.orderProducts.push(op)
      }

      console.log(item)

      sessionStorage.setItem('payItem', JSON.stringify({...item, payInfo: this.$store.getters.getPayPriceInfo, payMethod: this.$store.getters.getPayMethod, discountPoint: this.point, basketSysIds: basketSysIds}))

      postOrders(item)
        .then(res => { // 주문정보등록 성공 시
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
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
              m_redirect_url: `${location.origin}/buyComplete`
            }, (res) => {
              this.$router.push('/buyComplete')
            })
          } else {
            let p
            for (const product of products) {
              if (product.prdtSysId === Number(res.data.jsonData.optionValue)) {
                p = product
              }
            }

            // console.log(p)

            switch (res.data.jsonData.resultCode) {
              case '2000':
                alert(`다음 상품의 가격이 변경 되었습니다. :: ${p.name.length < 20 ? p.name : p.name.substr(0, 20) + '...'}`)
                break
              case '2003':
                alert(`다음 상품이 품절되었습니다. :: ${p.name.length < 20 ? p.name : p.name.substr(0, 20) + '...'}`)
                break
              case '2004':
                alert(`다음 상품이 차단되었습니다. :: ${p.name.length < 20 ? p.name : p.name.substr(0, 20) + '...'}`)
                break
              case '2008':
                alert(`다음 상품이 존재하지 않습니다. :: ${p.name.length < 20 ? p.name : p.name.substr(0, 20) + '...'}`)
                break
              case '2009':
                alert(`다음 상품의 상품정보가 삭제되었습니다. :: ${p.name.length < 20 ? p.name : p.name.substr(0, 20) + '...'}`)
                break
              default:
                break
            }
          }
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
