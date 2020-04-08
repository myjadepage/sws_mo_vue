<template>
  <div class="productInfoWrap">
      <div class="productTitle">[{{product.brandName}}] {{product.name}}</div>

      <div class="discountSection">
      <!-- <span v-if="additionalInfo.isLive" class="onair">
          라이브가
      </span> -->
      <span v-if="product.discountRate" class="productDiscount">{{product.discountRate * 100}}%</span>
      <span class="won"><span class="saleProductPrice">{{formatPrice(calcPrice)}}</span>원</span>
        <span v-if="product.discountRate" class="orProductPrice">{{formatPrice(product.price)}}</span>
        </div>

        <!-- <div class="utilSection">
            <span class="icoBtn"><span class="ico ico_share"></span>공유하기</span>
            <span @click="toggleAlarm" class="icoBtn" v-if="additionalInfo.isAlarm"><span class="ico ico_bell"></span>방송알림ON</span>
            <span @click="toggleAlarm" class="icoBtn" v-if="additionalInfo.isAlarm===false"><span class="ico ico_no_bell"></span>방송알림OFF</span>
        </div> -->
  </div>
</template>

<script>

export default {
  props: ['product'],
  data () {
    return {
      additionalInfo: {
        isLive: true,
        isAlarm: true,
        deliveryPrice: 2500,
        deliveryPolicy: '(50,000원 이상 구매시 무료 배송) 3일 이내 발송 예정(주말/공휴일 제외)'
      }
    }
  },
  mounted () {
    this.$store.state.productPrice = this.calcPrice
  },
  computed: {
    calcPrice () {
      if (!this.product.discountRate) {
        return this.product.price
      }
      let val = this.product.price - (this.product.price * this.product.discountRate)
      // let val = this.product.price - Math.floor(this.product.price * (this.product.discountRate) / 10) * 10
      return val
    },
    calcDeliveryPrice () {
      switch (this.product.deliveryPriceTypeCode) {
        case 1: return 0
        case 2: return this.product.debitAmount
        case 3: return this.product.prepaymentAmount
        case 4: return 2500
        case 5: return 2500
        default: return 2500
      }
    }
  },
  methods: {
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    toggleAlarm () {
      this.additionalInfo.isAlarm = !this.additionalInfo.isAlarm
    }

  }
}
</script>
