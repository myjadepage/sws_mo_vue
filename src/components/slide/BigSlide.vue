<template>
<div class="big_slide">
    <swiper :options="swiperOption" ref="bigSwiper">
        <swiper-slide>
          <router-link to="/Planning/theme">
            <img src="../../assets/img/main-01.png" alt="비건 스킨케어 세트 사진" />
            <div class="title">
              <p class="smallText">AROMATICA</p>
              <p class="bigText">민감성 피부를 위한<br/>비건 스킨케어 세트</p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/Planning/theme">
            <img src="../../assets/img/main-02.png" alt="우먼 에센셜 20SS 상품 증정 이벤트" />
            <div class="title">
              <p class="smallText">WOMEN ESSENTAIL</p>
              <p class="bigText">우먼 에센셜 20SS<br/>상품 증정 이벤트</p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/Planning/theme">
            <img src="../../assets/img/main-03.png" alt="코스알엑스 사진" />
            <div class="title">
              <p class="smallText">COSRX</p>
              <p class="bigText">피부 고민 해결사<br/>코스알엑스</p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/Planning/theme">
          <img src="../../assets/img/main-04.png" alt="360도 실시간 오염 감지 공기청정기" />
            <div class="title">
              <p class="smallText">POSITIVE OVER NEGATIVE</p>
              <p class="bigText">360도 실시간 오염<br/>감지 공기청정기</p>
            </div>
          </router-link>
        </swiper-slide>
        <swiper-slide>
          <router-link to="/Planning/theme">
          <img src="../../assets/img/main-05.png" alt="컬리플라워라이스" />
            <div class="title">
              <p class="smallText">SERENDIV</p>
              <p class="bigText">오늘은 밥대신,<br/>컬리플라워라이스</p>
            </div>
          </router-link>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"><span>{{activePage}}</span>/5</div>
</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'BigSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        autoplay: {
          delay: 5000
        },
        loop: true,
        onSlideChangeEnd: function () {
          this.onSwipe()
        }
      },
      activePage: 1
    }
  },
  methods: {
    onSwipe (varuable) {
      this.activePage = varuable.swiper.realIndex + 1
    }
  },
  computed: {
    swiper () {
      return this.$refs.bigSwiper.swiper
    }
  },
  mounted () {
    this.swiper.on('slideChange', () => {
      this.onSwipe(this)
    })
  }
}
</script>

<style scoped>
</style>
