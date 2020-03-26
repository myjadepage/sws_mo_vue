<template>
<div class="cateogry_slide">
  <div class="slide_wraper" :style="{'width':((categoryLength*92)+19)+'px'}">
    <button class="item" :class="selected===0?'on':''" @click="select(0)">
      <img src="../../../assets/img/subCategory-01.png">
      <p>뷰티전체</p>
    </button>
    <button class="item" :class="selected===1?'on':''" @click="select(1)">
      <img src="../../../assets/img/subCategory-02.png">
      <p>스킨케어</p>
    </button>
    <button class="item" :class="selected===2?'on':''" @click="select(2)">
      <img src="../../../assets/img/subCategory-03.png">
      <p>메이크업</p>
    </button>
    <button class="item" :class="selected===3?'on':''" @click="select(3)">
      <img src="../../../assets/img/subCategory-01.png">
      <p>향수</p>
    </button>
    <button class="item" :class="selected===4?'on':''" @click="select(4)">
      <img src="../../../assets/img/subCategory-02.png">
      <p>기타등등</p>
    </button>
  </div>
</div>
</template>

<script>
export default {
  name: 'categorySwiper',
  data () {
    return {
      selected: 0,
      categoryLength: 5
    }
  },
  methods: {
    select (idx) {
      this.selected = idx
    }
  }
}
</script>

<style scoped>
</style>
