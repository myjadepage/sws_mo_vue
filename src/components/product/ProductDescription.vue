<template>
  <div class="productDescWrap">
      <ul ref="descMenu" class="descMenu">
              <li @click="menuClick(0)" class="selected">상품정보</li>
              <li @click="menuClick(1)">리뷰</li>
              <li @click="menuClick(2)">상품문의</li>
              <li @click="menuClick(3)">배송/교환/반품</li>
      </ul>
    <DetailDesc :selectedMenu="selectedMenu" />
  </div>
</template>

<script>
import DetailDesc from './ProductDetailDesc'

export default {
  mounted () {
    let self = this

    document.addEventListener('scroll', () => {
      if (!this.timer) {
        this.timer = setTimeout(function () {
          self.timer = null
          if (window.scrollY >= 900 && !self.$el.getElementsByClassName('descMenu')[0].classList.contains('scrolling')) {
            self.$el.getElementsByClassName('descMenu')[0].classList.add('scrolling')
          } else if (window.scrollY < 900 && self.$el.getElementsByClassName('descMenu')[0].classList.contains('scrolling')) {
            self.$el.getElementsByClassName('descMenu')[0].classList.remove('scrolling')
          }
        }, 300)
      }
    })
  },
  components: {
    DetailDesc
  },
  data () {
    return {
      selectedMenu: 0,
      timer: null
    }
  },
  methods: {
    menuClick (x) {
      this.$el.getElementsByTagName('li')[this.selectedMenu].className = ''
      this.selectedMenu = x
      this.$el.getElementsByTagName('li')[this.selectedMenu].className = 'selected'
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>

.productDescWrap .descMenu.scrolling{
  z-index: 100;
  width: 100%;
  background-color: #fff;
  position: fixed;
  opacity: 0.9;
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
