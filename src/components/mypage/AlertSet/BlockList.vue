<template>
  <ul class="blockList">
    <li class="item">
      <div class="imgBox" :style="{backgroundImage:'url(/static/images/temp_weekly_04.png)', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
      <div class="txtBox">
        <p v-if="pageType === 'alert'"><b>클리오</b> 10% 할인 쿠폰이 도착했습니다.</p>
        <p v-if="pageType === 'coupon'">[SWS] 3,000원 가입 축하 쿠폰</p>
        <p v-if="pageType === 'coupon'">주문 상품 금액 최고 10,000원 이상</p>
        <p class="date">2020.03.01<span v-if="pageType === 'coupon'"> - 2020.04.01</span></p>
      </div>
    </li>
    <li class="item">
      <div class="imgBox" :style="{backgroundImage:'url(/static/images/temp_weekly_04.png)', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
      <div class="txtBox">
        <p v-if="pageType === 'alert'"><b>클리오</b> 10% 할인 쿠폰이 도착했습니다. 10% 할인 쿠폰이 도착했습니다.</p>
        <p v-if="pageType === 'coupon'">[SWS] 3,000원 가입 축하 쿠폰</p>
        <p v-if="pageType === 'coupon'">주문 상품 금액 최고 10,000원 이상</p>
        <p class="date">2020.03.01<span v-if="pageType === 'coupon'"> - 2020.04.01</span></p>
      </div>
    </li>
    <li class="item">
      <div class="imgBox" :style="{backgroundImage:'url(/static/images/apple-touch-icon.png)', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
      <div class="txtBox">
        <p v-if="pageType === 'alert'"><b>클리오</b> 10% 할인 쿠폰이 도착했습니다. 10% 할인 쿠폰이 도착했습니다.10% 할인 쿠폰이 도착했습니다.</p>
        <p v-if="pageType === 'coupon'">[SWS] 3,000원 가입 축하 쿠폰</p>
        <p v-if="pageType === 'coupon'">주문 상품 금액 최고 10,000원 이상</p>
        <p class="date">2020.03.01<span v-if="pageType === 'coupon'"> - 2020.04.01</span></p>
      </div>
    </li>
  </ul>
</template>

<script>
// import {getAlertSetting, setAlertSetting, getAccessToken} from '@/api/index'

export default {
  props: ['pageType'],
  data () {
    return {
    }
  },
  mounted () {
    if (document.querySelector('#app').clientHeight > document.querySelector('.wrap').clientHeight) {
      document.querySelector('#app').classList.add('bg_gray')
    } else {
      document.querySelector('.wrap').classList.add('bg_gray')
    }
  },
  beforeDestroy () {
    if (document.querySelector('#app').classList.contains('bg_gray')) {
      document.querySelector('#app').classList.remove('bg_gray')
    }
  }
}
</script>
