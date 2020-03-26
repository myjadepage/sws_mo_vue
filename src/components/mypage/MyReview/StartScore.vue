<template>

  <div class="scoreBlock">
    <h2>구매하신 상품에 대한 별점을 평가해주세요.(선택사항)</h2>
    <div class="starsWrap">
      <input type="hidden" name="starScore" v-model="starScore"/>
      <button v-for="n in 5" :key="n.index" @click="setScore(n)" >
        <img src="../../../assets/img/ico/ico_star_full.png" alt="1점" v-if="n <= starScore" />
        <img src="../../../assets/img/ico/ico_star_none.png" alt="0점" v-if="n > starScore" />
      </button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'StartScore',
  props: ['score'],
  data () {
    return {
      starScore: this.score
    }
  },
  methods: {
    setScore (num) {
      this.starScore = num
    }
  }
}
</script>

<style>

</style>
