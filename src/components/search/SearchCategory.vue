<template>
  <div class="searchCatWrap">
      <ul>
          <li @click="selectMediaMode(0)">상품</li>
          <li @click="selectMediaMode(1)">브랜드</li>
          <li @click="selectMediaMode(2)">방송</li>
      </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cat: 0
    }
  },
  mounted () {
    this.$el.getElementsByTagName('li')[this.cat].className = 'selected'
  },
  methods: {
    selectMediaMode (x) {
      this.$el.getElementsByTagName('li')[this.cat].className = ''
      this.$emit('catChange', x)
      this.cat = x
      this.$el.getElementsByTagName('li')[this.cat].className = 'selected'
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
    width: 100%;
}
.searchCatWrap li{
    cursor: pointer;
    text-align: center;
    font-size: 16px;
    float: left;
    padding: 20px 0;
    width: 33%;
    /* text-align: center; */
}

.searchCatWrap .selected{
    color: #e61754;
    font-weight: 500;
    border-bottom: 4px solid #e61754;
}
</style>
