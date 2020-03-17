<template>
  <div class="daumPost">
       <vue-daum-postcode @complete="getPostCode($event)" />
  </div>
</template>

<script>
export default {
  methods: {
    getPostCode (res) {
      // this.$store.state.postCode = res
      localStorage.setItem('postCode', JSON.stringify(res))

      window.close()
    }
  }
}
</script>

<style>
</style>
