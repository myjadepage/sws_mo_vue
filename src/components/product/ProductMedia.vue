<template>
  <div class="productMediaWrap">
    <div :style="mediaSize" class="mainMedia"></div>
    <ul class="mediaMenu">
      <li @click="selectMediaMode(0)" class="selected"><span class="dot">·</span>메인</li>
      <li @click="selectMediaMode(1)"><span class="dotL">·</span>언박싱</li>
      <li @click="selectMediaMode(2)"><span class="dotL">·</span>사용법</li>
      <li @click="selectMediaMode(3)"><span class="dot">·</span>후기</li>
      <li @click="selectMediaMode(4)"><span class="dotL">·</span>이미지</li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      mediaDirection: 0,
      mediaMode: 0
    }
  },
  computed: {
    mediaSize () {
      return this.mediaDirection === 0 ? 'height:202px;' : 'height:500px;'
    }
  },
  methods: {
    selectMediaMode (x) {
      this.$el.getElementsByTagName('li')[this.mediaMode].className = ''
      this.mediaMode = x
      this.$el.getElementsByTagName('li')[this.mediaMode].className = 'selected'
    }
  }
}
</script>

<style>
.productMediaWrap .mainMedia{
    background-color: gray;
}

.productMediaWrap .mediaMenu{
  height: 40px;
}

.productMediaWrap .mediaMenu li{
  text-align: center;
  width: 20%;
  float: left;
  background-color: black;
  height: 40px;
  color: white;
  cursor: pointer;
  /* line-height: 45px; */
}

.mediaMenu{
  width: 100%;
  height: 40px;
  /* user-select: none; */
}

.mediaMenu th,.mediaMenu td{
  background-color: black;
  width: 20%;
  text-align: center;
  font-size: 14px;
  font-weight: normal;
  color: white;
}

.mediaMenu th{
  font-size: 20pt;
  line-height: 1px;
}

.productMediaWrap .mediaMenu .selected{
  font-weight: 500;
  color: #e61754;
}

.productMediaWrap .dot{
  position: relative;
  top:-10px;
  left: 9px;
  display: inline-block;
  font-size: 25px;
  width: 0px;
  height: 0px;
  font-weight: bold;
  visibility: hidden;
}
.productMediaWrap .dotL{
  position: relative;
  top:-10px;
  left: 15px;
  display: inline-block;
  font-size: 25px;
  width: 0px;
  height: 0px;
  font-weight: bold;
  visibility: hidden;
}

.productMediaWrap .selected .dot{
  visibility: visible;
}
.productMediaWrap .selected .dotL{
  visibility: visible;
}
</style>
