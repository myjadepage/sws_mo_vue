<template>
  <div class="productMediaWrap">
    <div :style="mediaSize" class="mainMedia"></div>
    <ul class="mediaMenu">
      <li @click="selectMediaMode(0)" class="selected">메인</li>
      <li @click="selectMediaMode(1)">언박싱</li>
      <li @click="selectMediaMode(2)">사용법</li>
      <li @click="selectMediaMode(3)">후기</li>
      <li @click="selectMediaMode(4)">이미지</li>
    </ul>

    <!-- <table class="mediaMenu">
      <thead>
        <tr>
          <th class="selected">·</th>
          <th>·</th>
          <th>·</th>
          <th>·</th>
          <th>·</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="selected">메인</td>
          <td>언박싱</td>
          <td>사용법</td>
          <td>후기</td>
          <td>이미지</td>
        </tr>
      </tbody>
    </table> -->

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
  line-height: 45px;
}

.mediaMenu{
  width: 100%;
  height: 40px;
  /* user-select: none; */
}

.mediaMenu th,td{
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
.mediaMenu td{
}

.productMediaWrap .mediaMenu .selected{
  font-weight: 500;
  color: #e61754;
}

.productMediaWrap .dot{
  font-size: 25px;
  width: 5px;
  height: 5px;
  font-weight: bold;
  visibility: hidden;
}
.productMediaWrap .dotL{
  font-size: 25px;
  width: 5px;
  height: 5px;
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
