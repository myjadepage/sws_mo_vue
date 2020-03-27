<template>
  <ul class="listCont">
    <li class="arrowItem"><button @click="openModal('lte')">3G/LTE 화질 수동 설정<span class="arrow sky">{{quality[lteQual].text}}</span></button></li>
    <li class="arrowItem"><button @click="openModal('wifi')">Wi-Fi 수동 설정<span class="arrow sky">{{quality[wifiQual].text}}</span></button></li>
  </ul>
</template>

<script>
export default {
  name: 'SettingList',
  props: ['quality', 'lteQual', 'wifiQual'],
  data () {
    return {
    }
  },
  methods: {
    openModal (type) {
      this.$emit('open', type)
    }
  }
}
</script>

<style>

</style>
