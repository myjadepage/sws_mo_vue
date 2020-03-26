<template>
  <div class="live_slide">
      <h4>Live <span>라이브 편성표 > </span></h4>
      <swiper :options="swiperOption">
        <!-- live 시에 item에 클래스만 붙여주면 됩니다. -->
        <swiper-slide class="item live">
          <router-link to="" >
            <div class="imgBox">
              <img src="../../assets/img/temp_main_live_01.png" alt="엘에프몰 이미지" />
            </div>
            <div class="btn_movie">
              <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
            </div>
            <p class="txtBox">몰상식? LF몰(엘에프몰)<br/>상식 총집합! 브랜드가 천지!</p>
          </router-link>
        </swiper-slide>
        <swiper-slide class="item">
          <router-link to="" >
            <div class="imgBox">
              <img src="../../assets/img/temp_main_live_01.png" alt="엘에프몰 이미지" />
            </div>
            <div class="btn_movie">
              <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
            </div>
            <p class="txtBox">몰상식? LF몰(엘에프몰)<br/>상식 총집합! 브랜드가 천지!</p>
          </router-link>
        </swiper-slide>
        <swiper-slide class="item live">
          <router-link to="" >
            <div class="imgBox">
              <img src="../../assets/img/temp_main_live_01.png" alt="엘에프몰 이미지" />
            </div>
            <div class="btn_movie">
              <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
            </div>
            <p class="txtBox">몰상식? LF몰(엘에프몰)<br/>상식 총집합! 브랜드가 천지!</p>
          </router-link>
        </swiper-slide>
        <swiper-slide class="item">
          <router-link to="" >
            <div class="imgBox">
              <img src="../../assets/img/temp_main_live_01.png" alt="엘에프몰 이미지" />
            </div>
            <div class="btn_movie">
              <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
            </div>
            <p class="txtBox">몰상식? LF몰(엘에프몰)<br/>상식 총집합! 브랜드가 천지!</p>
          </router-link>
        </swiper-slide>

 <swiper-slide class="item live" v-for="(i,idx) in items" :key="idx">
          <router-link to="" >
            <div class="imgBox">
              <img :src="i.thumnailUrl" alt="엘에프몰 이미지" />
            </div>
            <div class="btn_movie">
              <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
            </div>
            <p class="txtBox">{{i.briefComment}}<br/>{{i.title}}</p>
          </router-link>
        </swiper-slide>

      </swiper>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getLiveProduct } from '../../api'

export default {
  name: 'LiveSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      items: [ ],
      broadcastType: null,
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 10
        // loop: true
      }
    }
  },
  created () {
    var vm = this
    getLiveProduct()
      .then(function (res) {
        console.log('라이브리스트?', res.data.jsonData.broadcasts)
        if (res.data.jsonData.resultCode === '0001') {
          vm.items = res.data.jsonData.broadcasts
        } else {
          alert('라이브 리스트를 불러올 수 없습니다.')
        }
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
</style>
