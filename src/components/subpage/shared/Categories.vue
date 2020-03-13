<template>
  <div class="subCatWrap">
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
      category: []
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
  },
  methods: {
    catClick (name) {
      this.$router.push(`/category/${name}`)
    },
    selectedCat (idx) {
      if (this.category[idx].name === this.$route.path.split('/')[2]) {
        return 'selected'
      }
    }
  }
}
</script>

<style>
 .subCatWrap .swiper-slide{
     margin: 0 30px;
     width: fit-content;
     font-size: 15px;
     line-height: 44px;
     height: 44px;
 }

 .subCatWrap .swiper-slide.selected{
     color: #e61754;
     font-weight: 500;
 }
</style>
