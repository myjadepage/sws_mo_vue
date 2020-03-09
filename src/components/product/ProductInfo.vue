<template>
  <div class="productInfoWrap">
      <div class="productTitle">{{props.name}}</div>

      <div class="discountSection">
      <span v-if="product.isLive" class="onair">
          라이브가
      </span>
      <span v-if="props.discountRate" class="productDiscount">{{props.discountRate}}%</span>
      <span class="won"><span class="saleProductPrice">{{formatPrice(calcPrice)}}</span>원</span>
        <span v-if="props.discountRate" class="orProductPrice">{{formatPrice(props.price)}}</span>
        </div>

        <div class="utilSection">
            <span class="icoBtn"><span class="ico ico_share"></span>공유하기</span>
            <span @click="toggleAlarm" class="icoBtn" v-if="product.isAlarm"><span class="ico ico_bell"></span>방송알림ON</span>
            <span @click="toggleAlarm" class="icoBtn" v-if="product.isAlarm===false"><span class="ico ico_no_bell"></span>방송알림OFF</span>
        </div>

        <div class="deliveryPriceSection">
            <span class="sectionHead dp">배송비</span>
            <span>{{calcDeliveryPrice===0?'무료':formatPrice(calcDeliveryPrice)+'원'}}<span class="policy"> {{this.props.deliveryCommentHTML}}</span></span>
        </div>

        <div class="pointSection">
            <span class="sectionHead pt">적립혜택</span>
            <span>{{formatPrice(props.point)}}원<span v-if="props.pointRate" class="sectionBody pt">({{props.pointRate}}% 적립)</span></span>
        </div>

  </div>
</template>

<script>
export default {
  props: ['props'],
  data () {
    return {
      product: {
        isLive: true,
        isAlarm: true,
        deliveryPrice: 2500,
        deliveryPolicy: '(50,000원 이상 구매시 무료 배송) 3일 이내 발송 예정(주말/공휴일 제외)'
      }
    }
  },
  computed: {
    calcPrice () {
      if (!this.props.discountRate) {
        return this.props.price
      }
      let val = this.props.price - Math.floor(this.props.price * (this.props.discountRate * 0.01) / 10) * 10
      return val
    },
    calcDeliveryPrice () {
      switch (this.props.deliveryPriceTypeCode) {
        case 1: return 0
        case 2: return this.props.debitAmount
        case 3: return this.props.prepaymentAmount
      }
    }
  },
  methods: {
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    toggleAlarm () {
      this.product.isAlarm = !this.product.isAlarm
    }

  }
}
</script>

<style>
    .productInfoWrap{
        margin: 15px 12px 0;
    }

    .productInfoWrap .productTitle{
        margin-bottom: 6px;
        font-size: 15px;
    }

    .productInfoWrap .won,.orProductPrice{
        font-size: 13px;
    }

    .productInfoWrap .deliveryPriceSection{
        margin: 15px 0;
        padding: 15px 0;
        border-top: 1px solid #eeeeee;
        border-bottom: 1px solid #eeeeee;
    }

    .productInfoWrap .policy{
        color: #666666;
    }

    .productInfoWrap .sectionHead.dp{
        font-weight: 500;
        margin: 0 30px 35px 0;
    }

    .productInfoWrap .sectionHead.pt{
        font-weight: 500;
        margin: 0 16px 0 0;
    }

    .productInfoWrap .pointSection{
        padding-bottom: 15px;
        border-bottom: 1px solid #eeeeee;
    }

    .productInfoWrap .sectionBody.pt{
        color: #666666;
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
