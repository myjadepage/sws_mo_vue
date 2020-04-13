<template>
  <div class="review_slide">
    <swiper :options="swiperOption" ref="review_slide" >
      <swiper-slide v-for="(img, index) in review.productReviewPhotos" :key="index">
        <img :src="img.photoUrl">
      </swiper-slide>
    </swiper>
    <div class="swiper-pagination"><span>{{activePage}}</span>/{{photosLength}}</div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  props: ['review', 'photosLength'],
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        touchReleaseOnEdges: true,
        autoHeight: true,
        onSlideChangeEnd: function () {
          this.activePage = swiper.activeIndex + 1
        }
      },
      activePage: 1
    }
  },
  methods: {
    onSwipe (varuable) {
      this.activePage = varuable.swiper.activeIndex + 1
    }
  },
  computed: {
    swiper () {
      return this.$refs.review_slide.swiper
    }
  },
  mounted () {
    this.swiper.on('slideChange', () => {
      this.onSwipe(this)
    })
  }
}
</script>
