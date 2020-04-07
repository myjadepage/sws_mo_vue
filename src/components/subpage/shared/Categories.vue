<template>
  <div class="subCatWrap" ref="subCategory" :class="{'fixed':scrolled}">
    <swiper-slide class="swiper-item home">
      <router-link to="/" class="link_gnb">홈</router-link>
    </swiper-slide>
    <swiper :options="swiperOption">
    <!-- slides -->
        <swiper-slide  :class="selectedCat(idx)"  v-for="(c,idx) in category" :key="idx">
            <!-- <router-link :to="'/category/'+ c.name"> -->
          <span @click="catClick(c.name)">
             {{c.name}}
          </span>
       <!-- </router-link> -->
        </swiper-slide>
  </swiper>
  </div>
</template>

<script>
import {getCategoryList} from '@/api/index.js'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        grabCursor: true
      },
      category: [],
      scrolled: false
    }
  },
  created () {
    var vm = this
    getCategoryList()
      .then(function (res) {
        vm.category = res.data.jsonData.categories
      })
      .catch(function (error) {
        console.log(error)
      })
    this.windowScrollY()
  },
  methods: {
    catClick (name) {
      this.$router.push(`/category/${name}`)
    },
    selectedCat (idx) {
      if (this.category[idx].name === this.$route.path.split('/')[2]) {
        return 'selected'
      }
    },
    windowScrollY () {
      this.scrolled = window.scrollY > 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.windowScrollY)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.windowScrollY)
  }
}
</script>

<style>
 .subCatWrap {
   position: absolute;
   top:45px;
   left:0;
   width:100%;
   font-size:0;
 }
 .subCatWrap.fixed{
   position:fixed;
   left:0;
   top:0;
   z-index:200;
   background:#fff;
 }
 .subCatWrap .home{
   display:inline-block;
   width:65px;
   vertical-align: middle;
 }
 .subCatWrap .swiper-container{
   display:inline-block;
   width:calc(100% - 65px);
   vertical-align: middle;
 }
 .subCatWrap .swiper-slide{
    position:relative;
    display:inline-block;
     width: auto;
     font-size: 15px;
     line-height: 44px;
     height: 44px;
 }
  .subCatWrap .swiper-item{
    margin-top:0;
  }
 .subCatWrap .swiper-slide.selected{
   color: #e61754;
     font-weight: 500;
 }
 .subCatWrap .swiper-slide.selected:after{
   content:'';
    position:absolute;
    left:0;
    bottom:0;
    display:block;
    width:100%;
    height:2px;
    background:#e61754;
 }
 .subCatWrap .link_gnb,
 .subCatWrap .swiper-slide span{
   position: relative;
   height:100%;
    padding: 0 25px 10px 25px;
   line-height:44px;
   box-sizing: border-box;
 }
</style>
