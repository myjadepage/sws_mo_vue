<template>
  <div class="live_slide">
      <h4>Live <router-link to="Calendar">라이브 편성표 ></router-link></h4>
      <swiper :options="swiperOption" v-if="items.length >= 2">
        <!-- live 시에 item에 클래스만 붙여주면 됩니다. -->
        <swiper-slide class="item live" v-for="item in items" :key="item.broadcastSysId">
          <div v-for="id in item.broadcastPrdts" :key="id.prdtSysId">
            <router-link :to="{ path: '/product/' + id.prdtSysId + '/Live/' + item.broadcastSysId}" >
              <div class="imgBox" :style="{backgroundImage:'url(' + item.thumnailUrl + ')', backgroundPosition:'50% 50%', backgroundSize:'cover', backgroundRepeat:'no-repeat;'}"></div>
              <div class="btn_movie">
                <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
              </div>
              <p class="txtBox">{{item.briefComment}}<br/>{{item.title}}</p>
            </router-link>
          </div>
        </swiper-slide>
      </swiper>

      <router-link :to="{ path: '/product/' + items[0].broadcastPrdts.prdtSysId + '/Live/' + items[0].broadcastSysId}" class="item live single" v-if="items.length === 1" >
        <div class="imgBox" :style="{backgroundImage:'url(' + items[0].thumnailUrl + ')', backgroundPosition:'50% 50%', backgroundSize:'cover', backgroundRepeat:'no-repeat;'}"></div>
        <div class="btn_movie">
          <img src="../../assets/img/ico/btn_play_them.png" alt="재생버튼 이미지" />
        </div>
        <p class="txtBox">{{items[0].briefComment}}<br/>{{items[0].title}}</p>
      </router-link>

      <div v-if="items.length === 0">
          <p class="noItem">현재 Live방송이 없습니다.</p>
      </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getLiveProductList } from '../../api'

export default {
  name: 'LiveSlide',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      items: [],
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
    getLiveProductList()
      .then(function (res) {
        console.log('라이브리스트?', res.data)
        if (res.data.jsonData.resultCode === '0001') {
          vm.items = res.data.jsonData.broadcasts
        } else {
          console.log('라이브 리스트를 불러올 수 없습니다.')
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
