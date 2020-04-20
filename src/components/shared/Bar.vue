<template>
   <div class="headBarWrap">
    <button @click="goBack" class="barClick ico_back_arr"></button>
    <h1>{{val}}</h1>
    <router-link class="cartBtn" to="/cart" v-if="val==='마이페이지'">
      <span v-if="baskets.length > 0" class="cartBadge">{{baskets.length}}</span>
    </router-link>
    <router-link to="/AlertSet" class="settingBtn" v-if="val==='알림'"><span class="ir_pm">알림설정</span></router-link>
  </div>
</template>

<script>
export default {
  props: ['val', 'baskets'],
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>
