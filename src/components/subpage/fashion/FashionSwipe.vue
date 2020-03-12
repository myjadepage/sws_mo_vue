<template>
  <div class="fashionSwipeWrap">
       <swiper :options="swiperOption">
    <!-- slides -->
        <swiper-slide  v-for="(c,idx) in products" :key="idx">
            <img :src="c.smallImageUrl" >
        </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import {getProductList} from '@/api/index.js'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        grabCursor: true
      },
      products: []
    }
  },
  created () {
    getProductList()
      .then((res) => {
        this.products = res.data.jsonData.products
      })
      .catch(e => console.log(e))
  }
}
</script>

<style>
.fashionSwipeWrap{
    width: 100%;
    height: 340px;
    background-color: #4a4555;
}

.fashionSwipeWrap .swiper-slide{
     margin: 20px 0 0 15px;
     width: 280px;
     height: 300px;
       box-shadow: -6px 6px 6px 0 rgba(0, 0, 0, 0.4);
 }

.fashionSwipeWrap .swiper-slide img{
    width: 100%;
    height: 100%;
     border-radius: 11px;
 }
</style>
