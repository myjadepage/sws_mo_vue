<template>
<div class="sale_slide">
    <h4>Sale</h4>
    <swiper :options="swiperOption">
        <swiper-slide>
          <a href="/"><img src="/static/images/slide01.jpg"></a>
          <div class="goods_best">
            <span class="condition_order">
                <span class="num_condition">[보타니스트]</span>보태니컬 바 스킨숍
            </span>
            <div class="item_price">
                <span class="discount">25%</span>
                <strong>12,500원</strong>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <a href="/"><img src="/static/images/slide01.jpg"></a>
          <div class="goods_best">
            <span class="condition_order">
                <span class="num_condition">[보타니스트]</span>보태니컬 바 스킨숍
            </span>
            <div class="item_price">
                <span class="discount">25%</span>
                <strong>12,500원</strong>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <a href="/"><img src="/static/images/slide01.jpg"></a>
          <div class="goods_best">
            <span class="condition_order">
                <span class="num_condition">[보타니스트]</span>보태니컬 바 스킨숍
            </span>
            <div class="item_price">
                <span class="discount">25%</span>
                <strong>12,500원</strong>
            </div>
          </div>
        </swiper-slide>
      </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'ProductSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 2
      }
    }
  }
}
</script>

<style scoped>
.sale_slide h4{display: block;
    margin:7% 0 3% 5%;
    font-size: 20px;
    word-break: keep-all;
    line-height: 1.3;
    color: #1a1a1a;
    font-weight: 700;}
    .sale_slide img{
        width: 180px;
        height: 220px;
    }
  .swiper-slide {
    min-width: 320px;
    height: 500px;
  }
</style>
