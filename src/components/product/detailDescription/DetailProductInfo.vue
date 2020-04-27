<template>
<div class="detailInfoWrap">
  <div class="infoSection">
    <div ref="descSection" class="descSection" v-html="product.detailDescription"></div>
   </div>
  <button ref="spreadBtn" v-if="isSpreadable"  @click="clickSpread">{{btnText}}</button>
</div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      btnText: '상세 정보 펼쳐보기',
      isSpreadable: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        if (this.$refs.descSection.clientHeight >= 800) {
          this.isSpreadable = true
        }
      }, 500)
    })
  },

  methods: {
    clickSpread () {
      if (this.btnText === '상세 정보 접기') {
        this.btnText = '상세 정보 펼쳐보기'
        this.$refs.descSection.style.maxHeight = '800px'
        this.$refs.spreadBtn.style.position = 'static'
        window.scrollTo(0, 550)
      } else {
        this.btnText = '상세 정보 접기'
        this.$refs.spreadBtn.style.position = 'static'
        this.$refs.descSection.style.maxHeight = '100%'
      }
    }
  }
}
</script>

<style>
.detailInfoWrap{
  text-align: center;
}

.descSection{
  max-height: 800px;
  display: inline-block;
  width: 100%;
  margin: 20px 0 0;
  text-align: center;
  overflow: hidden;
}

.detailInfoWrap .infoSection{
  position: relative;
}

.descSection p img{
  width: 100%;
}

.descSection p{
  margin: 0;
  padding: 0;
}

.detailInfoWrap button{
  display: block;
  width: 90%;
  height: 44px;
  margin: 30px auto;
  border: 1px solid #e61754;
  color: #e61754;
  background-color: #fff;
  font-size: 15px;
}
</style>
