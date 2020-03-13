<template>
  <div class="buyCouponWrap">
    <div class="couponHeader">
      할인쿠폰
    </div>
    <div class="applyCoupon">
      <span class="coupons">적용쿠폰(전체 {{couponCnt}}장 / 적용 {{coupon?1:0}}장)</span>
      <button ref="couponBtn" @click="couponBtnClick">쿠폰선택</button>
    </div>
    <div class="downCoupon">
      <span class="coupons">다운 가능한 쿠폰</span>
      <button>쿠폰받기</button>
    </div>
    <div class="totalDiscount">
        <span class="title">총 할인 금액</span>
        <span class="priceSection">{{getTotalDiscount|makeComma}}원</span>
    </div>
  </div>
</template>

<script>

export default {
  props: ['point', 'coupon', 'couponCnt'],
  computed: {
    getTotalDiscount () {
      return 0 + this.point + this.coupon
    }
  },
  methods: {
    couponBtnClick (x) {
      this.$emit('couponBtnClick')
      this.couponMode = !this.couponMode
      if (this.couponMode) {
        this.$refs.couponBtn.classList.add('selected')
      } else {
        this.$refs.couponBtn.classList.remove('selected')
      }
    }
  },
  data () {
    return {
      couponMode: false
    }
  }
}
</script>

<style>
.buyCouponWrap{
  background-color: #fff;
  margin-top: 5px;
 padding: 15px 12px;
  font-size: 15px;
}

.buyCouponWrap .couponHeader{
  font-size: 18px;
  margin-bottom: 15px;
  font-weight: 500;
}

.buyCouponWrap .applyCoupon, .buyCouponWrap .downCoupon{
  width: 100%;
}

.buyCouponWrap .coupons{
  display: inline-block;
  margin-bottom: 18px;
}

.buyCouponWrap .totalDiscount .title{
  line-height: 30px;
}

.buyCouponWrap .totalDiscount{
  padding: 20px 0;
  border-top: 1px solid #f3f3f3;
}

.buyCouponWrap .totalDiscount .priceSection{
  float: right;
  text-align: right;
  padding: 5px 10px;
  width: 67%;
  border : 1px solid #eeeeee;
  border-radius: 2px;
}

.buyCouponWrap button{
  float: right;
  width: 70px;
  height: 30px;
  font-size: 13px;
  color: #666666;
  border: 1px solid #eeeeee;
  border-radius: 2px;
}

.buyCouponWrap button.selected{
  background-color: #e61754;
  border: 1px solid #e61754;
  color: #fff;
}

</style>
