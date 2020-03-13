<template>
  <div class="couponDetailWrap">
      <div class="category">
          <button @click="catBtnClick(0)" class="catBtn">쿠폰선택</button>
          <button @click="catBtnClick(1)" class="catBtn">포인트입력</button>
      </div>
      <div v-if="currnetCat===0" class="couponSection">
          <div class="couponHeader">
              적용할 쿠폰 1개를 선택해 주세요.
          </div>
          <div class="selectCoupon">

              <div v-for="(c,idx) in coupons" :key="idx" class="coupons">
                <div>
              <input :ref="'coupon'+idx" @click="couponSelected(idx)"  type="radio" name="coupon" :id="'coupon'+idx" :value="c.price">
              <label class="checkmark" :for="'coupon'+idx"></label>
              </div>
              <label :for="'coupon'+idx">
                  [{{c.brand}}] {{c.price|makeComma}}원
                  <div class="couponCondition">{{c.condition}}</div>
                  </label>
              </div>

          </div>
      </div>

      <div v-if="currnetCat===1" class="pointSection">
            <div class="pointHeader">
                보유 포인트 <span class="price">{{discountPoint|makeComma}}</span>원
             </div>
             <div class="pointInputSection">
                <input v-model="inputPoint" @keypress.enter="pointBtnClick" type="text" placeholder="0원">
                <button @click="pointBtnClick">확인</button>
            </div>
                <div class="text">
                    포인트는 1,000원 이상부터 사용이 가능하며,<br>
                    100원 단위로 사용 가능합니다.
                </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['coupons'],
  data () {
    return {
      currnetCat: null,
      currentPoint: 10000,
      currentCoupon: null,
      discountPoint: 10000,
      inputPoint: ''
    }
  },
  updated () {
    if (this.$refs[`coupon${this.currentCoupon}`] && this.currentCoupon !== null) {
      if (this.$refs[`coupon${this.currentCoupon}`][0]) {
        this.$refs[`coupon${this.currentCoupon}`][0].checked = true
      }
    }
  },
  beforeDestroy () {
    this.$emit('discountByPoint', 0)
    this.$emit('discountByCoupon', 0)
  },
  methods: {
    catBtnClick (cat) {
      if (this.currnetCat !== null) {
        this.$el.getElementsByClassName('catBtn')[this.currnetCat].classList.remove('selected')
      }
      this.currnetCat = cat
      this.$el.getElementsByClassName('catBtn')[cat].classList.add('selected')
    },
    pointBtnClick () {
      let val = Number(this.inputPoint)
      if (!isNaN(val) && val > 1000 && val <= this.currentPoint) {
        val = Math.floor(val / 100) * 100
        this.inputPoint = val
        this.discountPoint = this.currentPoint - val
        this.$emit('discountByPoint', this.inputPoint)
      }
    },
    couponSelected (idx) {
      this.currentCoupon = idx
      this.$emit('discountByCoupon', this.coupons[idx].price)
    }
  }
}
</script>

<style>
.couponDetailWrap{
background-color: #fff;
margin-top: 5px;
padding: 15px 12px;
font-size: 15px;
height: 347px;
}

.couponDetailWrap .couponHeader{
    margin: 15px 0 10px;
}

.couponDetailWrap .selectCoupon .coupons{
    padding: 9px 0 11px;
    /* height: 80px; */
    font-size: 14px;
    border-top: 1px solid #eeeeee;
    user-select: none;
}

.couponDetailWrap .selectCoupon .coupons input[type="radio"]{
    all: unset;
    border: 1.5px solid #cccccc;
    border-radius: 20px;
    float: left;
    margin: 0 15px 10px 0;
    width: 20px;
    height: 20px;
}

.couponDetailWrap .selectCoupon .coupons input[type="radio"]:checked{
    border: 1.5px solid #e61754;
    margin: 0 0 10px 0;
}

.couponDetailWrap .selectCoupon .coupons input[type="radio"]:checked+.checkmark{
    float: left;
    position: relative;
    top: 7px;
    right: 16px;
    background: #e61754;
    border-radius: 8px;
    margin: 0 6px 25px 0;
    width: 9px;
    height: 9px;
}

.couponDetailWrap .selectCoupon .coupons .couponCondition{
    margin-left: 10px;
    font-size: 13px;
    color: #666666;
}

.couponDetailWrap .category{
    text-align: center;
    border: 1px solid #eeeeee;
}

.couponDetailWrap .category .catBtn{
    border-collapse: collapse;
    width: 49%;
    height: 40px;
    font-size: 15px;
}

.couponDetailWrap .category .catBtn:first-child{
    border-right: 1px solid #eeeeee;
}

.couponDetailWrap .category .catBtn.selected{
    border: 1px solid #e61754;
    color: #e61754;
    font-size: 15px;
}

.couponDetailWrap .pointSection{
    text-align: center;
}

.couponDetailWrap .pointHeader{
    font-size: 18px;
    margin: 70px 0 20px;
}

.couponDetailWrap .pointSection .price{
    font-weight: bold;
}

.couponDetailWrap .pointSection input{
    height: 40px;
    width: 100px;
    text-align: right;
    font-size: 13px;
    border: 1px solid #eeeeee;
    border-radius: 2px;
    padding-right: 10px;
    margin: 0 10px;
}

.couponDetailWrap .pointInputSection{
    margin-bottom: 20px;
}

.couponDetailWrap .pointSection input::placeholder{
color: black;
}

.couponDetailWrap .pointSection button{
    background-color: #e61754;
    width: 70px;
    height: 40px;
    color: #fff;
    border-radius: 2px;
}

</style>
