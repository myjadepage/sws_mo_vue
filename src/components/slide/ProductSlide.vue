<template>
<div class="sale_slide pbottom">
    <h4>Sale</h4>
    <swiper :options="swiperOption">
        <swiper-slide v-for="item in items" :key="item.prdtSysId">
          <a :href="'/product/' + item.prdtSysId"><img :src="item.smallImageUrl"></a>
          <div class="goods_best">
            <span class="condition_order">
                [{{ item.brandName }}] {{ item.name }}
            </span>
            <div class="item_price">
                <span class="discount">{{ item.discountRate }}%</span>
                <strong>{{ item.salesPrice | makeComma}}원</strong>
            </div>
          </div>
        </swiper-slide>
      </swiper>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getSaleProduct } from '../../api/index'
export default {
  name: 'ProductSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      items: [ ],
      swiperOption: {
        slidesPerView: 1.7,
        spaceBetween: 30
      }
    }
  },
  created () {
    var vm = this
    getSaleProduct()
      .then(function (res) {
        console.log('Sale리스트?', res.data.jsonData.products)
        vm.items = res.data.jsonData.products
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style>
</style>
