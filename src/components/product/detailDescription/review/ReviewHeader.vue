<template>
  <div class="reviewHeaderWrap">
      <span>리뷰 총 {{reviewCnt}}개</span>
      <div class="rating">
          <label for="rate1"><span class="ico_star_half"></span></label>
          <label for="rate2"><span class="ico_star_full"></span></label>
          <label for="rate3"><span class="ico_star_half"></span></label>
          <label for="rate4"><span class="ico_star_full"></span></label>
          <label for="rate5"><span class="ico_star_half"></span></label>
          <label for="rate6"><span class="ico_star_full"></span></label>
          <label for="rate7"><span class="ico_star_half"></span></label>
          <label for="rate8"><span class="ico_star_full"></span></label>
          <label for="rate9"><span class="ico_star_half"></span></label>
          <label for="rate10"><span class="ico_star_full"></span></label>
          <input type="radio" name="rate" id="rate1">
          <input type="radio" name="rate" id="rate2">
          <input type="radio" name="rate" id="rate3">
          <input type="radio" name="rate" id="rate4">
          <input type="radio" name="rate" id="rate5">
          <input type="radio" name="rate" id="rate6">
          <input type="radio" name="rate" id="rate7">
          <input type="radio" name="rate" id="rate8">
          <input type="radio" name="rate" id="rate9">
          <input type="radio" name="rate" id="rate10">
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      reviewCnt: 20,
      reviewAvgRate: 3.5
    }
  }
}
</script>

<style>

</style>
