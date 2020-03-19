<template>
  <div class="live_slide pbottom">
      <h4>Live <span>라이브 편성표 > </span></h4>
      <swiper :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.broadcastSysId">
            <div class="img-area" v-for="id in item.broadcastPrdts" :key="id.prdtSysId">
                <router-link :to="'/product/' + id.prdtSysId" style="height:251px">
                    <img :src="item.thumnailUrl" alt="청하의 선택">
                    <span class="circle-box"><i class="xi-play"></i></span>
                    <div class="live-info-top">
                        <span class="ic-live-wrap status-vod">{{ item.broadcastType === '1' ? 'VOD': 'LIVE'  }}</span>
                    </div>
                    <ul class="brand-icon">
                        <li class="brand-logo"><i class="img-circle" style="background-image: url('static/brand/logo-lf.png')"></i></li>
                        <li class="brand-name">리아</li>
                        <li class="brand-view">{{ item.viewCnt | makeComma }} 시청함</li>
                    </ul>
                </router-link>
            </div>
            <div class="desc-area">{{ item.briefComment }}</div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getLiveProduct } from '../../api'
export default {
  name: 'LiveSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      items: [ ],
      broadcastType: null,
      swiperOption: {
        slidesPerView: 1
        // loop: true
      }
    }
  },
  created () {
    var vm = this
    getLiveProduct()
      .then(function (res) {
        console.log('라이브리스트?', res.data.jsonData.broadcasts)
        if (res.data.jsonData.resultCode === '0001') {
          vm.items = res.data.jsonData.broadcasts
        } else {
          alert('라이브 리스트를 불러올 수 없습니다.')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
