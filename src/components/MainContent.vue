<template>
<div id="swsContent" class="cont_sws">
  <BigSlide></BigSlide>
  <Gnb></Gnb>
  <ProductSlide></ProductSlide>
  <WeeklyBest></WeeklyBest>
</div>
</template>

<script>
import Gnb from './shared/Gnb'
import BigSlide from './slide/BigSlide'
import WeeklyBest from './WeeklyBest'
import ProductSlide from './slide/ProductSlide'

export default {
  name: 'MainContent',
  components: {
    BigSlide,
    Gnb,
    WeeklyBest,
    ProductSlide
  }
}
</script>

<style>

</style>
