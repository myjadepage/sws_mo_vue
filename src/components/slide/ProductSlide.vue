<template>
<div class="sale_slide pbottom">
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
        slidesPerView: 2,
        spaceBetween: 30
      }
    }
  }
}
</script>

<style scoped>
</style>
