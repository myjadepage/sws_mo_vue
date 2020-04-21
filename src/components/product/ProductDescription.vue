<template>
  <div class="productDescWrap" ref="info">
      <ul ref="descMenu" class="descMenu">
        <li class="selected"><button @click="menuClick(0)">상품정보</button></li>
        <li><button @click="menuClick(1)">리뷰</button></li>
        <li><button @click="menuClick(2)">상품문의</button></li>
        <li><button @click="menuClick(3)">배송/교환/반품</button></li>
      </ul>
      <DetailDesc :selectedMenu="selectedMenu" />
  </div>
</template>

<script>
import DetailDesc from './ProductDetailDesc'

export default {
  mounted () {
    document.addEventListener('scroll', this.scrollHandler, true)
  },
  components: {
    DetailDesc
  },
  data () {
    return {
      selectedMenu: 0,
      timer: null,
      scrollHandler: () => {
        let bH = document.querySelector('.headBarWrap').clientHeight
        let mH = document.querySelector('.productMediaWrap').clientHeight
        if (this.$refs.info) {
          let el = this.$refs.info
          let target = this.$refs.descMenu
          let top = el.getBoundingClientRect().top
          if (top <= bH + mH) {
            if (!target.classList.contains('scrolling')) {
              target.classList.add('scrolling')
              target.style.top = (bH + mH) + 'px'
            }
          } else {
            if (target.classList.contains('scrolling')) {
              target.classList.remove('scrolling')
              target.style.top = '0px'
            }
          }
        }
      }
    }
  },
  methods: {
    menuClick (x) {
      this.$el.getElementsByTagName('li')[this.selectedMenu].className = ''
      this.selectedMenu = x
      this.$el.getElementsByTagName('li')[this.selectedMenu].className = 'selected'
      window.scrollTo(0, 400)
    }
  },
  destroyed () {
    document.removeEventListener('scroll', this.scrollHandler, true)
  }
}
</script>
