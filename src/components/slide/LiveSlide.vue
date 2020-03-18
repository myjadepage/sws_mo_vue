<template>
  <div class="live_slide pbottom">
      <h4>Live <span>라이브 편성표 > </span></h4>
      <swiper :options="swiperOption">
        <swiper-slide>
            <div class="img-area">
                <router-link :to="'/product/' + item.broadcastSysId" style="height:251px">
                    <img :src="item.thumnailUrl" alt="청하의 선택">
                    <span class="circle-box"><i class="xi-play"></i></span>
                    <div class="live-info-top">
                        <span class="ic-live-wrap status-vod">{{ item.broadcastType === '1' ? 'VOD': 'LIVE'  }}</span>
                    </div>
                    <ul class="brand-icon">
                        <li class="brand-logo"><i class="img-circle" style="background-image: url('static/brand/logo-lf.png')"></i></li>
                        <li class="brand-name">리아</li>
                        <li class="brand-view">222,343 시청함</li>
                    </ul>
                </router-link>
            </div>
            <div class="desc-area">1청하가 선택한 질스튜어트 잇백! 로젤라 미니 체인 클러치 백</div>
        </swiper-slide>
        <!-- <swiper-slide>
            <div class="img-area">
                <a href="/">
                    <img src="static/images/1.jpg" alt="청하의 선택">
                    <span class="circle-box"><i class="xi-play"></i></span>
                    <div class="live-info-top">
                        <span class="ic-live-wrap status-vod">VOD</span>
                    </div>
                    <ul class="brand-icon">
                        <li class="brand-logo"><i class="img-circle" style="background-image: url('static/brand/logo-lf.png');"></i></li>
                        <li class="brand-name">리아</li>
                        <li class="brand-view">222,343 시청함</li>
                    </ul>
                </a>
            </div>
            <div class="desc-area">1청하가 선택한 질스튜어트 잇백! 로젤라 미니 체인 클러치 백</div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-area">
                <a href="/">
                    <img src="static/images/1.jpg" alt="청하의 선택">
                    <span class="circle-box"><i class="xi-play"></i></span>
                    <div class="live-info-top">
                        <span class="ic-live-wrap status-vod">VOD</span>
                    </div>
                    <ul class="brand-icon">
                        <li class="brand-logo"><i class="img-circle" style="background-image: url('static/brand/logo-lf.png');"></i></li>
                        <li class="brand-name">리아</li>
                        <li class="brand-view">222,343 시청함</li>
                    </ul>
                </a>
            </div>
            <div class="desc-area">1청하가 선택한 질스튜어트 잇백! 로젤라 미니 체인 클러치 백</div>
        </swiper-slide> -->
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
        console.log('라이브리스트?', res.data.jsonData)
        if (res.data.jsonData.resultCode === '0001') {
          vm.items = res.data.jsonData.broadcasts
        } else {
          alert('라이브 리스트를 불러올 수 없습니다.')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  },
  computed: {
  }
}
</script>

<style scoped>
</style>
