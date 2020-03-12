<template>
<div class="detailInfoWrap">
   <div ref="descSection" :style="maxHeight" class="descSection">
     <!-- <div class="testImg"></div> -->
   </div>
    <div class="spreadDetail">
      <button v-if="isSpreadable" @click="clickSpread">{{btnText}}</button>
    </div>
</div>
</template>

<script>
export default {
  created () {
    if (this.$store.getters.getProduct.detailDescription) {
      this.product = this.$store.getters.getProduct
    }
  },
  data () {
    return {
      maxHeight: 'maxHeight:800px;',
      btnText: '상세 정보 펼쳐보기',
      product: {},
      isSpreadable: false
    }
  },
  mounted () {
    this.$refs.descSection.innerHTML = this.product.detailDescription
    setTimeout(() => {
      if (this.$refs.descSection.offsetHeight >= 800) {
        this.isSpreadable = true
      }
    }, 300)
  },
  methods: {
    clickSpread () {
      if (this.maxHeight === 'maxHeight:fit-content;') {
        this.maxHeight = 'maxHeight:800px;'
        this.btnText = '상세 정보 펼쳐보기'
        window.scrollTo(0, 550)
      } else {
        this.maxHeight = 'maxHeight:fit-content;'
        this.btnText = '상세 정보 접기'
      }
    }
  }
}
</script>

<style>
.descSection{
  display: inline-block;
  width: 100%;
  margin: 20px 0 ;
  text-align: center;
  overflow: hidden;
}

.descSection p img{
  width: 100%;
}

.spreadDetail{
  padding: 0 15px 0;
  height: 95px;
  text-align: center;
}

.spreadDetail button{
  width: 95%;
  height: 44px;
  border: 1px solid #e61754;
  color: #e61754;
  font-size: 15px;
}
</style>
