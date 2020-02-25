<template>
  <div class="live_slide pbottom">
      <h4>Live <span>라이브 편성표 > </span></h4>
      <swiper :options="swiperOption">
        <swiper-slide>
            <div class="img-area">
                <a href="/">
                    <img src="static/images/1.jpg" alt="청하의 선택">
                    <span class="circle-box"><i class="xi-play"></i></span>
                    <div class="live-info-top">
                        <span class="ic-live-wrap status-vod">VOD</span>
                    </div>
                    <div class="user-area">
                        <ul class="user-icon">
                            <li><i class="img-circle" style="background-image: url('assets/img/bj01.jpg');"></i><em>리아</em></li>
                            <li>222,343 시청함</li>
                        </ul>
                    </div>
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
                    <div class="user-area">
                        <ul class="user-icon">
                            <li><i class="img-circle" style="background-image: url('assets/img/bj01.jpg');"></i><em>리아</em></li>
                            <li>222,343 시청함</li>
                        </ul>
                    </div>
                </a>
            </div>
            <div class="desc-area">2청하가 선택한 질스튜어트 잇백! 로젤라 미니 체인 클러치 백</div>
        </swiper-slide>
        <swiper-slide>
            <div class="img-area">
                <a href="/">
                    <img src="static/images/1.jpg" alt="청하의 선택">
                    <span class="circle-box"><i class="xi-play"></i></span>
                    <div class="live-info-top">
                        <span class="ic-live-wrap status-vod">VOD</span>
                    </div>
                    <div class="user-area">
                        <ul class="user-icon">
                            <li><i class="img-circle" style="background-image: url('assets/img/bj01.jpg');"></i><em>리아</em></li>
                            <li>222,343 시청함</li>
                        </ul>
                    </div>
                </a>
            </div>
            <div class="desc-area">3청하가 선택한 질스튜어트 잇백! 로젤라 미니 체인 클러치 백</div>
        </swiper-slide>
      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'LiveSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 1.2,
        slidesOffsetBefore: -260,
        loop: true
      }
    }
  }
}
</script>

<style scoped>
</style>
