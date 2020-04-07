<template>

  <div class="tabBox">
    <button :class="{'on':!tabState}" @click="switchBtn(0)" >미작성 리뷰({{products?products.length:0}})</button>
    <button :class="{'on':tabState}" @click="switchBtn(1)" >내가 쓴 리뷰({{reviews?reviews.length:0}})</button>
  </div>

</template>

<script>
export default {
  props: ['reviews', 'products', 'tabState'],
  methods: {
    switchBtn (idx) {
      this.$emit('tabSwitch', idx)
    }
  }
}
</script>

<style>

</style>
