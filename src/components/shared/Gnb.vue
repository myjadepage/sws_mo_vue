<template>
<div class="common-header-gnb-main">
    <div class="gnb_main">
         <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item">
              <router-link to="/" class="link_gnb">
                 <span class="link_gnb_text">홈</span>
              </router-link>
                <!-- <a href="/" class="link_gnb on">
                    <span class="link_gnb_text">홈</span>
                </a> -->
            </swiper-slide>
            <swiper-slide class="swiper-item" v-for="menu in category" :key="menu.categoryCode">
              <!-- 쿼리가 있으면, `/register?plan=private` 이 됩니다. -->
              <!-- <router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link> -->
              <!-- <router-link :to="{ name: 'user', params: { userId: 123 }}">User</router-link> -->
              <router-link :to="'/category/' + menu.name" class="link_gnb">
                 <span class="link_gnb_text"> {{ menu.name }}</span>
              </router-link>
                <!-- <a :href="'/category/' + menu.name" class="link_gnb">
                    <span class="link_gnb_text"> {{ menu.name }}</span>
                </a> -->
            </swiper-slide>
         </swiper>
    </div>
</div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { getCategoryList } from '../../api'

export default {
  name: 'Gnb',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 4.5,
        spaceBetween: 10
      },
      category: []
    }
  },
  created () {
    var vm = this
    getCategoryList()
      .then(function (res) {
        console.log('카테고리 맞어?', res.data.jsonData.categories)
        vm.category = res.data.jsonData.categories
      })
      .catch(function (error) {
        console.log(error)
      })
  }
}
</script>

<style scope>

@media (orientation: landscape) {
    .gnb_main{max-width:640px;margin:0 auto}
}
.gnb_main{position: relative;z-index:99;padding:30px 0 10px; margin-bottom: 40px; font-size:16px;background-color:#fff;border-bottom:1px solid #d9d9d9}
/* .gnb_main li{float:left;text-align:center}
.gnb_main .gnb_main_li_tmoticon{display:none} */
.gnb_main .link_gnb{position:relative;display:inline-block;color:#000;width:100%}
.gnb_main .link_gnb.router-link-exact-active {color: #e61654}
.gnb_main .active .link_gnb{position:relative;}
.gnb_main .active .link_gnb_text{color: #e61654}
.gnb_main .link_gnb .link_gnb_text{position:relative;display:inline-block;padding:8px 0;letter-spacing:.6px}
.gnb_main .link_active .link_gnb_text:after{content:' ';position:absolute;top:8px;right:-10px;width:6px;height:6px;-webkit-border-radius:50%;border-radius:50%;background-color:#db635d}
.gnb_main .link_gnb_my.link_active:after{right:-11px}
.swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
 .gnb_main .swiper-item:nth-child(12),
 .gnb_main .swiper-item:nth-child(13){
    width: 100px !important;
  }
  .gnb_main .swiper-item:nth-child(14) {
    width: 120px !important;
  }
</style>
