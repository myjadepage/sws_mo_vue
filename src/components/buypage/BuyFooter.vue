<template>
  <div class="buyFooterWrap">
      <button @click="payBtnClick">{{finalPrice|makeComma}}원 결제하기</button>
  </div>
</template>

<script>
import {postOrders} from '@/api/index.js'

export default {
  props: ['finalPrice', 'coupon'],
  methods: {
    payBtnClick () {
      let item = {
        'amount': this.finalPrice,
        'totalAmount': this.$store.getters.getOptionAddedPrice,
        'qty': this.$store.getters.getSelectedOptionsLength,
        'orderName': '홍길동',
        'orderPostNumber': this.$store.getters.getPostCode.zonecode,
        'orderAddress1': '인천광역시 부평구 갈산동',
        'orderAddress2': '대동아파트 11-123',
        'orderTel': '032-111-2222',
        'orderMobile': '010-1111-2222',
        'orderEmail': 'abc@gmail.com',
        'receiverName': '이순신',
        'receiverPostNumber': '21384',
        'receiverAddress1': this.$store.getters.getPostCode.address,
        'receiverAddress2': this.$store.getters.getPostCode.detail,
        'receiverTel': '032-222-3333',
        'receiverMobile': '010-2222-3333',
        'couponDiscount': this.coupon,
        'couponList': '1;2',
        'orderProducts': []
      }
      let cnt = 0
      for (const o of this.$store.getters.getSelectedOptions) {
        cnt += o.count
      }

      item.orderProducts.push({
        'prdtSysId': this.$store.getters.getProduct.prdtSysId,
        'qty': cnt,
        'price': this.$store.getters.getProduct.price,
        'discount': this.$store.getters.getProduct.discount,
        'discountRate': this.$store.getters.getProduct.discountRate
        // 'options': [{'prdtOptionSysId': 1, 'optionAmount': 2000}, {'prdtOptionSysId': 10, 'optionAmount': 1000}]
      })

      console.log(item)

      postOrders(item)
        .then(res => { // 주문정보등록 성공 시
          sessionStorage.setItem('orderSysId', res.data.jsonData.res.orderSysId)

          this.$IMP().request_pay({ // 아임포트 호출
            pg: 'html5_inicis',
            pay_method: this.$store.getters.getPayMethod,
            merchant_uid: res.data.jsonData.res.orderSysId,
            name: this.$store.getters.getProduct.name,
            amount: this.finalPrice,
            buyer_email: 'sarkh91@epiens.com',
            buyer_name: '천곤홍',
            buyer_tel: '010-2675-0229',
            buyer_addr: this.$store.getters.getPostCode.address,
            buyer_postcode: this.$store.getters.getPostCode.zonecode,
            m_redirect_url: 'm.shallwe.shop/buyComplete'
          }, (res) => {
            if (res.sucess) {
              console.log(res)
            } else {
              console.log(res)
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
