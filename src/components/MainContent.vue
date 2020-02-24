<template>
<div id="swsContent" class="cont_sws">
  <BigSlide></BigSlide>
  <Gnb></Gnb>
  <WeeklyBest></WeeklyBest>
</div>
</template>

<script>
import Gnb from './shared/Gnb'
import BigSlide from './slide/BigSlide'
import WeeklyBest from './WeeklyBest'

export default {
  name: 'MainContent',
  components: {
    BigSlide,
    Gnb,
    WeeklyBest
  }
}
</script>

<style>

</style>
