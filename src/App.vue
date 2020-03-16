<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapState(['isLogin'])
  }
}
</script>

<style lang="css" src="@/assets/css/common.css"></style>
<style lang="css" src="@/assets/css/swsmo.css"></style>
