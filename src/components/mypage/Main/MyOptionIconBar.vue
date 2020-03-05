<template>
  <div class="myOptionBarWrap">
    <span class="cartBtn">
      <span v-if="cartCnt" class="cartBadge">{{cartCnt}}</span>
    </span>
    <span class="settingBtn"></span>
    <span class="qaBtn"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartCnt: 3
    }
  }
}
</script>

<style>

</style>
