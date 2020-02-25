<template>
<div class="big_slide">
    <swiper :options="swiperOption">
        <swiper-slide>
          <img src="/static/images/slide01.jpg">
          <div class="title">
            <h4>소녀들이 열광하는 LOVEMARK</h4>
            <span class="tag_title">#마뜨여신 나은이와 페리페라가 함께한 NEW 영상</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/static/images/slide01.jpg">
          <div class="bigSlide_title">
            <h4>소녀들이 열광하는 LOVEMARK</h4>
            <span class="tag_title">#마뜨여신 나은이와 페리페라가 함께한 NEW 영상</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/static/images/slide01.jpg">
          <div class="bigSlide_title">
            <h4>소녀들이 열광하는 LOVEMARK</h4>
            <span class="tag_title">#마뜨여신 나은이와 페리페라가 함께한 NEW 영상</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/static/images/slide01.jpg">
          <div class="bigSlide_title">
            <h4>소녀들이 열광하는 LOVEMARK</h4>
            <span class="tag_title">#마뜨여신 나은이와 페리페라가 함께한 NEW 영상</span>
          </div>
        </swiper-slide>
        <swiper-slide>
          <img src="/static/images/slide01.jpg">
          <div class="bigSlide_title">
            <h4>소녀들이 열광하는 LOVEMARK</h4>
            <span class="tag_title">#마뜨여신 나은이와 페리페라가 함께한 NEW 영상</span>
          </div>
        </swiper-slide>
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
</style>
