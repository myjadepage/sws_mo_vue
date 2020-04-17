<template>
   <div class="headBarWrap">
    <button v-if="backBtn" @click="goBack" class="barClick ico_back_arr"></button>
    <h1>{{val}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    val: {
      type: String,
      default: ''
    },
    backBtn: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
