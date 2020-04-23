<template>
  <div class="searchCatWrap">
      <ul>
          <li><button @click="selectMediaMode(0)" :class="{'selected':cat===0}">상품</button></li>
          <!-- <li><button @click="selectMediaMode(1)" :class="{'selected':cat===1}">브랜드</button></li> -->
          <li><button @click="selectMediaMode(2)" :class="{'selected':cat===2}">방송</button></li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['cat'],
  methods: {
    selectMediaMode (x) {
      this.$emit('catChange', x)
    }
  }
}
</script>

<style>
.searchCatWrap{
    width: 100%;
    display: inline-block;
    background-color: #fff;
}

.searchCatWrap ul{
  overflow: hidden;
  width: 100%;
}
.searchCatWrap li{
    text-align: center;
    float: left;
    width: 50%;
    /* text-align: center; */
}
.searchCatWrap li button{
  display:block;
  width:100%;
  padding: 20px 0 8px;
  font-size: 16px;
  font-weight:500;
  box-sizing: border-box;
}

.searchCatWrap .selected{
    color: #e61754;
    border-bottom: 4px solid #e61754;
}
</style>
