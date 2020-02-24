<template>
<div>
    <swiper :options="swiperOption">
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
.bigSlide_title{
  position: absolute;
  bottom: 0px;
  left: 0;
  right: 0;
  top: 60%;
  padding-left:7%;
  padding-top: 20px;
  background: -moz-linear-gradient(top,  rgba(0,0,0,0) 0%, rgba(0,0,0,0) 1%, rgba(0,0,0,0.62) 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(top,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.62) 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to bottom,  rgba(0,0,0,0) 0%,rgba(0,0,0,0) 1%,rgba(0,0,0,0.62) 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#9e000000',GradientType=0 ); /* IE6-9 */
}
.bigSlide_title h4{display:block;position:relative;margin-right:12%;padding-bottom:10px;font-size:27px;word-break:keep-all;line-height:1.3;color:#fff;}
.tag_title{display:block;margin-right:20%;color:#fff;font-size:16px;}
  .swiper-slide {
    min-width: 320px;
    height: 500px;
  }
</style>
