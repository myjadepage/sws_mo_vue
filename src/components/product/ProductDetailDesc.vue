<template>
  <div class="detailDescWrap">
    <Info v-if="selectedMenu===0" />
    <Review v-if="selectedMenu===1" />
    <QA v-if="selectedMenu===2" />
    <Delivery v-if="selectedMenu===3" />
  </div>
</template>

<script>
import Info from './detailDescription/DetailProductInfo'
import Review from './detailDescription/DetailReview'
import QA from './detailDescription/DetailQA'
import Delivery from './detailDescription/DetailDelivery'

export default {
  props: ['selectedMenu'],
  components: {
    Info, Review, QA, Delivery
  }
}
</script>

<style>
.detailDescWrap{
  display: inline-block;
  width: 100%;
}
</style>
