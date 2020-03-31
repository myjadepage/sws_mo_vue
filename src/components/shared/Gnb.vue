<template>
<div class="common-header-gnb-main" ref="gnbCat" :class="{'fixed':scrolled}">
    <div class="gnb_main">
        <div class="swiper-item home">
          <router-link to="/" class="link_gnb">
              <span class="link_gnb_text">홈</span>
          </router-link>
        </div>
         <swiper :options="swiperOption" class="swiper-box" ref="gnbSlide">
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
        slidesPerView: 'auto'
      },
      category: [],
      scrolled: false
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
    this.windowScrollY()
  },
  methods: {
    windowScrollY () {
      this.scrolled = window.scrollY > 365
    }
  },
  updated () {
  },
  mounted () {
    window.addEventListener('scroll', this.windowScrollY)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollY)
  }
}
</script>

<style scope>

@media (orientation: landscape) {
    .gnb_main{max-width:640px;margin:0 auto;}
}
.common-header-gnb-main.fixed{
  position:fixed;
  width:100%;
  left:0;
  top:0;
  z-index:200;
}
.gnb_main{position: relative;z-index:99; margin-bottom: 40px;padding-top:20px; font-size:16px;background-color:#fff;border-bottom:1px solid #d9d9d9;font-size:0;}
.fixed .gnb_main{
  padding-top:10px;
  margin-bottom:0;
}
/* .gnb_main li{float:left;text-align:center}
.gnb_main .gnb_main_li_tmoticon{display:none} */
.gnb_main .swiper-container{
  overflow:hidden;
  display:inline-block;
  width:calc(100% - 65px);
  vertical-align: middle;
}
.gnb_main .swiper-item{
  position: relative;
  width: fit-content;
  margin-top:0;
}
.gnb_main .swiper-item.home{
  z-index:20;
  display:inline-block;
  width:65px;
  background:#fff;
  vertical-align: middle;
}
.gnb_main .swiper-item.home:after{
  content:'';
  position:absolute;
  left:0;
  bottom:-1px;
  display:block;
  width:100%;
  height:2px;
  background:#e61654;
}
.gnb_main .link_gnb{position:relative;display:inline-block;color:#000; padding:0 25px 10px ; line-height:1;}
.gnb_main .link_gnb.router-link-exact-active { color: #e61654;}
.gnb_main .active .link_gnb{position:relative; }
.gnb_main .active .link_gnb_text{color: #e61654;}
.gnb_main .link_gnb .link_gnb_text{position:relative;display:inline-block;padding:8px 0;font-size:15px;}
.gnb_main .link_active .link_gnb_text:after{content:' ';position:absolute;top:8px;right:-10px;width:6px;height:6px;-webkit-border-radius:50%;border-radius:50%;background-color:#db635d}
.gnb_main .link_gnb_my.link_active:after{right:-11px}
/* .swiper-box {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }
  .swiper-item {
    height: 100%;
    text-align: center;
    background: #fff;
    Center slide text vertically
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
  } */

.swiper-item{
  text-align: center;
  width:100px;
  margin: 30px 0 0;
}

</style>
