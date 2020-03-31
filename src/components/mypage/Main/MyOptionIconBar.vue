<template>
  <div class="myOptionBarWrap">
    <span class="cartBtn">
      <span @click="cartBtnClick" v-if="cartCnt" class="cartBadge">{{cartCnt}}</span>
    </span>
    <router-link to="/MypageSetting" class="settingBtn"></router-link>
    <router-link to="/CustomerMain"><span class="qaBtn"></span></router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartCnt: 3
    }
  },
  methods: {
    cartBtnClick () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style>

</style>
