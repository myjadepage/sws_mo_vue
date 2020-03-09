<template>
   <div class="headBarWrap">
     <div @click="goBack" class="barClick">
      <span class="ico_back_arr"></span>
          {{val}}
      </div>
  </div>
</template>

<script>
export default {
  props: ['val'],
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
