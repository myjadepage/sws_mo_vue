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

<style>
    .productInfoWrap{
        margin: 15px 12px 0;
        padding-bottom: 15px;
    }

    .productInfoWrap .productTitle{
        margin-bottom: 6px;
        font-size: 15px;
    }

    .productInfoWrap .won,.orProductPrice{
        font-size: 13px;
    }

    .productInfoWrap .orProductPrice{
        color: #999999;
        text-decoration: line-through;
    }

    .productInfoWrap .onair{
        height: 22px;
        width: 52.5px;
        padding: 4px 7.5px;
        margin-right: 5px;
        background-color: #e61754;
        color: white;
    }

    .productInfoWrap .productDiscount, .saleProductPrice{
        margin-right: 5px;
        font-size: 18px;
        font-weight: bold;
    }

    .productInfoWrap .productDiscount{
        color: #e61754;
    }
    .productInfoWrap .ico{
        margin-right: 5px;
    }

    .productInfoWrap .utilSection{
        margin-top: 22px;
        margin-left: 4px;
        font-size: 13px;
    }

    .productInfoWrap .icoBtn{
        margin-right: 24px;
        cursor: pointer;
    }

    .productInfoWrap .ico_share{
    display: inline-block;
    position: relative;
    top: 3px;
    background: url('../../assets/img/ico/ico_share.png');
    width: 15px;
    height: 15px;
    background-size: 100%;
    }
    .productInfoWrap .ico_bell{
    display: inline-block;
    position: relative;
    top: 3px;
    background: url('../../assets/img/ico/enable_bell.png');
    width: 16px;
    height: 17px;
    background-size: 100%;

    }
    .productInfoWrap .ico_no_bell{
    display: inline-block;
    position: relative;
    top: 3px;
    background: url('../../assets/img/ico/disable_bell.png');
    width: 16px;
    height: 17px;
    background-size: 100%;
    }

</style>
