<template>
<div>
    <swiper :options="swiperOption">
        <swiper-slide><img src="/static/images/slide01.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/slide01.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/slide01.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/slide01.jpg"></swiper-slide>
        <swiper-slide><img src="/static/images/slide01.jpg"></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
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
        pagination: {
          el: '.swiper-pagination',
          dynamicBullets: true
        }
      }
    }
  }
}
</script>

<style scoped>
  .swiper-slide {
    min-width: 320px;
    height: 500px;
  }
</style>
