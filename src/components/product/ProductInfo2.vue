<template>
  <div class="productInfoWrap">
        <div class="deliveryPriceSection">
            <span class="sectionHead dp">배송비</span>
            <span>{{calcDeliveryPrice===0?'무료':formatPrice(calcDeliveryPrice)+'원'}}<span class="policy"> {{product.deliveryCommentHTML}}</span></span>
        </div>

        <div class="pointSection">
            <span class="sectionHead pt">적립혜택</span>
            <span>{{formatPrice(product.point)}}원<span v-if="product.pointRate" class="sectionBody pt">({{product.pointRate}}% 적립)</span></span>
        </div>

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
  computed: {
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
