<template>
  <div class="productDescWrap">
      <ul ref="descMenu" class="descMenu">
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
  created () {
    let self = this
    var timer

    window.addEventListener('scroll', () => {
      if (!timer) {
        timer = setTimeout(function () {
          timer = null
          if (window.scrollY >= 600 && !self.$refs.descMenu.classList.contains('scrolling')) {
            console.log(window.scrollY)
            self.$refs.descMenu.classList.add('scrolling')
          } else if (window.scrollY < 600 && self.$refs.descMenu.classList.contains('scrolling')) {
            self.$refs.descMenu.classList.remove('scrolling')
            console.log(window.scrollY)
          }
        }, 200)
      }
    })
  },
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
      window.scrollTo(0, 500)
    }
  }
}
</script>

<style>

.productDescWrap .descMenu.scrolling{
  width: 100%;
  background-color: #fff;
  position: fixed;
  opacity: 90%;
  left: 0;
  top: 0;
}

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
    cursor: pointer;
    border-bottom: 1px solid #eeeeee;
}

.productDescWrap .selected{
    color: #e61754;
}

</style>
