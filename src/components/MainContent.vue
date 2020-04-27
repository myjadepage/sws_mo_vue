<template>
<div id="swsContent" class="cont_sws">
  <BigSlide></BigSlide>
  <Gnb></Gnb>
  <LiveSlide></LiveSlide>
  <!-- <ProductSlide></ProductSlide> -->
  <!-- <BrandSlide></BrandSlide> -->
  <GrandOpen></GrandOpen>
  <BrandCollabo></BrandCollabo>
  <ScrollTopBtn />
</div>
</template>

<script>
import Gnb from './shared/Gnb'
import LiveSlide from './slide/LiveSlide'
import BigSlide from './slide/BigSlide'
import GrandOpen from './GrandOpen'
import BrandCollabo from './BrandCollabo'
import ProductSlide from './slide/ProductSlide'
import BrandSlide from './slide/BrandSlide'
import ScrollTopBtn from '@/components/subpage/shared/ScrollTopBtn'
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
    GrandOpen,
    BrandCollabo,
    ProductSlide,
    BrandSlide,
    LiveSlide,
    ScrollTopBtn
  }
}
</script>

<style>

</style>
