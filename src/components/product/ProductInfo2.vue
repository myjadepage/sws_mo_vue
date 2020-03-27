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

<style>
    .productInfoWrap{
        margin: 15px 12px 0;
    }

    .productInfoWrap .deliveryPriceSection{
        margin: 15px 0;
        padding: 15px 0;
        border-bottom: 1px solid #eeeeee;
    }

    .productInfoWrap .policy{
        color: #666666;
    }

    .productInfoWrap .sectionHead.dp{
        float: left;
        font-weight: 500;
        margin: 0 30px 10px 0;
    }

    .productInfoWrap .sectionHead.pt{
       float: left;
        font-weight: 500;
        margin: 0 16px 0 0;
    }

    .productInfoWrap .sectionBody.pt{
        color: #666666;
    }

    .productInfoWrap .productDiscount{
        color: #e61754;
    }
    .productInfoWrap .ico{
        margin-right: 5px;
    }

</style>
