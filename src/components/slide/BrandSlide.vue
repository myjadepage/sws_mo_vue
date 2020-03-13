<template>
<div class="brand_slide pbottom">
  <h4>Best Brand</h4>
  <swiper :options="swiperOption" class="swiper-box">
     <swiper-slide  v-for="item in items" :key="item.brandSysId">
       <dl>
          <dt class="channel_circle" style="background-image: url(static/brand/logo-clio.png);"></dt>
          <dd class="channel_name">{{ item.name }}</dd>
       </dl>
     </swiper-slide>
     <!-- <swiper-slide>
       <dl>
          <dt class="channel_circle" style="background-image: url(static/brand/logo-age20.png);"></dt>
          <dd class="channel_name">에이지20</dd>
       </dl>
     </swiper-slide>
     <swiper-slide>
       <dl>
          <dt class="channel_circle" style="background-image: url(static/brand/logo-akb.png);"></dt>
          <dd class="channel_name">애경</dd>
       </dl>
     </swiper-slide>
     <swiper-slide>
       <dl>
          <dt class="channel_circle" style="background-image: url(static/brand/logo-calli.png);"></dt>
          <dd class="channel_name">칼리</dd>
       </dl>
     </swiper-slide>
     <swiper-slide>
       <dl>
          <dt class="channel_circle" style="background-image: url(static/brand/logo-goodal.png);"></dt>
          <dd class="channel_name">구달</dd>
       </dl>
     </swiper-slide>
     <swiper-slide>
       <dl>
          <dt class="channel_circle" style="background-image: url(static/brand/logo-jill.png);"></dt>
          <dd class="channel_name">질스튜어트</dd>
       </dl>
     </swiper-slide> -->
  </swiper>
</div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getBrandList } from '../../api/index'

export default {
  name: 'BrandSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 3.5,
        spaceBetween: 10
      },
      items: [ ]
    }
  },
  created () {
    var vm = this
    getBrandList()
      .then(function (res) {
        console.log('브랜드네임?', res.data.jsonData.brands)
        vm.items = res.data.jsonData.brands
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scope>
</style>
