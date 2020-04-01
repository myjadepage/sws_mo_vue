<template>
  <div class="myOptionBarWrap">
    <router-link class="cartBtn" to="/cart">
      <span v-if="baskets.length > 0" class="cartBadge">{{baskets.length}}</span>
    </router-link>
    <router-link to="/MypageSetting" class="settingBtn"></router-link>
    <router-link to="/CustomerMain"><span class="qaBtn"></span></router-link>
  </div>
</template>

<script>
export default {
  props: ['baskets'],
  data () {
    return {
    }
  }
}
</script>

<style>

</style>
