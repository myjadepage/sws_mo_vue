<template>
<div class="common-header-gnb-main">
    <div class="gnb_main">
         <swiper :options="swiperOption" class="swiper-box">
            <swiper-slide class="swiper-item">
                <a href="/" class="link_gnb">
                    <span class="link_gnb_text link_gnb_text_home">홈</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/Beauty" class="link_gnb">
                    <span class="link_gnb_text link_gnb_text_artist">뷰티</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/Fashion" class="link_gnb">
                    <span class="link_gnb_text link_gnb_text_newest">패션</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/preorder" class="link_gnb link_active">
                    <span class="link_gnb_text link_gnb_text_preorder">가전</span>
                </a>
            </swiper-slide>
            <swiper-slide class="swiper-item">
                <a href="/like" class="link_gnb">
                    <span class="link_gnb_text link_gnb_text_my">마이</span>
                </a>
            </swiper-slide>
         </swiper>
    </div>
</div>

</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  name: 'Gnb',
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 5
      }
    }
  }
}
</script>

<style scope>

@media (orientation: landscape) {
    .gnb_main{max-width:640px;margin:0 auto}
}
.gnb_main{position: relative;z-index:99;padding-top:30px; margin-bottom: 40px; font-size:16px;background-color:#fff;border-bottom:1px solid #d9d9d9}
.gnb_main li{float:left;width:20%;text-align:center}
.gnb_main .gnb_main_li_tmoticon{display:none}
.gnb_main .link_gnb{position:relative;display:inline-block;color:#000;width:100%}
.gnb_main .on .link_gnb{position:relative;}
.gnb_main .on .link_gnb:after{content:'';display:inline-block;position:absolute;bottom:-1px;left:10px;right:10px;height:4px;background-color:#1a1a1a}
.gnb_main .on .link_gnb.link_gnb_artist:after { left: -2px; right: -2px; }
.gnb_main .on .link_gnb.link_gnb_preorder:after { left: -2px; right: -2px; }
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
</style>
