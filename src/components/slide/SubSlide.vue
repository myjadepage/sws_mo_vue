<template>
<div class="big_slide">
    <swiper :options="swiperOption" ref="bigSwiper">
        <swiper-slide>
          <img src="../../assets/img/sub-01.png">
          <div class="title">
            <p class="smallText">AROMATICA</p>
            <p class="bigText">Blooming<br/>in your Skin</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/sub-02.png">
          <div class="title">
            <p class="smallText">MARMAR</p>
            <p class="bigText">마르마르<br/>바디미스트 5종 모음전</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/sub-03.png">
          <div class="title">
            <p class="smallText">BARR</p>
            <p class="bigText">성분이 말해주는<br/>미니멀리즘 브랜드 바르</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/sub-04.png">
          <div class="title">
            <p class="smallText">AROMATICA</p>
            <p class="bigText">Blooming<br/>in your Nail</p>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="../../assets/img/sub-05.png">
          <div class="title">
            <p class="smallText">CHRISTAINLENART</p>
            <p class="bigText">파란 병 안에 숨겨진<br/>식물수의 비밀</p>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"><span>{{activePage}}</span>/5</div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BigSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        loop: true,
        onSlideChangeEnd: function () {
          this.onSwipe()
        }
      },
      activePage: 1
    }
  },
  methods: {
    onSwipe (varuable) {
      this.activePage = varuable.swiper.realIndex + 1
    }
  },
  computed: {
    swiper () {
      return this.$refs.bigSwiper.swiper
    }
  },
  mounted () {
    this.swiper.on('slideChange', () => {
      this.onSwipe(this)
    })
  }
}
</script>

<style scoped>
</style>
