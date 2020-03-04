<template>
  <div class="myPointWrapper">
      <h2>My 포인트</h2>
        <div class="pointNum">{{this.myPoint}}<span class="point_p_word">P</span></div>
        <div class="usePointBtn">사용하기</div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      myPoint: 10
    }
  }
}
</script>

<style>

</style>
