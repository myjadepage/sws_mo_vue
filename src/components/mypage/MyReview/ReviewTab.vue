<template>

  <div class="tabBox">
    <button :class="{'on':!tabState}" @click="switchBtn(0)" >미작성 리뷰({{reviews.pre.length}})</button>
    <button :class="{'on':tabState}" @click="switchBtn(1)" >내가 쓴 리뷰({{reviews.writed.length}})</button>
  </div>

</template>

<script>
export default {
  props: ['reviews', 'tabState'],
  methods: {
    switchBtn (idx) {
      this.$emit('tabSwitch', idx)
    }
  }
}
</script>

<style>

</style>
