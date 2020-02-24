<template>
<div class="brand_slide">
         <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item on">
                <a href="/" class="link_gnb">
                    <span class="link_gnb_text">구달</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/" class="link_gnb">
                    <span class="link_gnb_text">알레그리</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/" class="link_gnb">
                    <span class="link_gnb_text">Lf_Ifon</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/" class="link_gnb link_active">
                    <span class="link_gnb_text">age20sale</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/" class="link_gnb">
                    <span class="link_gnb_text">koreacosmetic</span>
                </a>
            </swiper-slide>
         </swiper>
</div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'BrandSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4
      }
    }
  }
}
</script>

<style scope>
.swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    font-size: 18px ;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
