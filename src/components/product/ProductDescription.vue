<template>
  <div class="productDescWrap">
      <ul class="descMenu">
              <li @click="menuClick(0)" class="selected">상품정보</li>
              <li @click="menuClick(1)">리뷰</li>
              <li @click="menuClick(2)">상품문의</li>
              <li @click="menuClick(3)">배송/교환/반품</li>
      </ul>
    <DetailDesc :selectedMenu="selectedMenu" s/>
  </div>
</template>

<script>
import DetailDesc from './ProductDetailDesc'

export default {
  components: {
    DetailDesc
  },
  data () {
    return {
      selectedMenu: 0
    }
  },
  methods: {
    menuClick (x) {
      this.$el.getElementsByTagName('li')[this.selectedMenu].className = ''
      this.selectedMenu = x
      this.$el.getElementsByTagName('li')[this.selectedMenu].className = 'selected'
    }
  }
}
</script>

<style>

.descMenu li:nth-child(1){
    width: 25%;
}
.descMenu li:nth-child(2){
    width: 10%;
}
.descMenu li:nth-child(3){
    width: 25%;
}
.descMenu li:nth-child(4){
    width: 40%;
}

.productDescWrap .descMenu li{
    float:left;
    text-align: center;
    padding: 30px 0 9px 0;
    font-weight: 500;
    border-bottom: 1px solid #eeeeee;
}

.productDescWrap .selected{
    color: #e61754;
}

</style>
