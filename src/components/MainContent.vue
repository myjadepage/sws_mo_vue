<template>
<div id="swsContent" class="cont_sws">
  <BigSlide></BigSlide>
  <Gnb></Gnb>
    <LiveSlide></LiveSlide>
  <!-- <ProductSlide></ProductSlide> -->
    <!-- <BrandSlide></BrandSlide> -->
  <WeeklyBest></WeeklyBest>
</div>
</template>

<script>
import Gnb from './shared/Gnb'
import LiveSlide from './slide/LiveSlide'
import BigSlide from './slide/BigSlide'
import WeeklyBest from './WeeklyBest'
import ProductSlide from './slide/ProductSlide'
import BrandSlide from './slide/BrandSlide'
import {getProductList} from '../api/index'

export default {
  created () {
    getProductList().then((res) => {
    }).catch((e) => console.log(e))
  },
  name: 'MainContent',
  components: {
    BigSlide,
    Gnb,
    WeeklyBest,
    ProductSlide,
    BrandSlide,
    LiveSlide
  }
}
</script>

<style>

</style>
