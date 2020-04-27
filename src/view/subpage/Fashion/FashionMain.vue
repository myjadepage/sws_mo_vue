<template>
  <div class="FashionMainWrap">
      <Header/>
      <Categories @chngCat="chngCat"/>
      <div class="subSlide">
        <SubSlide />
      </div>
      <LiveSlide class="subSlide"></LiveSlide>
      <MdPick :categorySysId1="categorySysId1" :pickLists="pickLists"/>
      <WeeklyBest :categorySysId1="categorySysId1" :pickLists="pickLists"/>
      <All :categorySysId1="categorySysId1" :pickLists="pickLists"/>
      <Footer />
      <ScrollTopBtn />
  </div>
</template>

<script>
// import Bar from '@/components/subpage/shared/Bar'
import Header from '@/components/shared/Header'
import Categories from '@/components/subpage/shared/Categories'
import SubSlide from '@/components/slide/SubSlide'
import LiveSlide from '@/components/slide/LiveSlide'
import MdPick from '@/components/subpage/shared/MdPick'
import All from '@/components/subpage/shared/All'
import CategorySlide from '@/components/subpage/shared/CategorySlide'
// import Brand from '@/components/subpage/shared/Brand'
import WeeklyBest from '@/components/subpage/shared/WeeklyBest'
import ScrollTopBtn from '@/components/subpage/shared/ScrollTopBtn'
import Footer from '@/components/shared/Footer'
import { getPicksList } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 패션'
  },
  components: {
    Header, Categories, ScrollTopBtn, LiveSlide, MdPick, SubSlide, CategorySlide, Footer, All, WeeklyBest
  },
  beforeMount () {
    window.scrollTo(0, 0)

    if (sessionStorage.getItem('accessToken')) {
      getPicksList(sessionStorage.getItem('accessToken'), '?startIndex=0&rowCount=50')
        .then(res => {
          // console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.pickLists = res.data.jsonData.prdtPicks
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.$nextTick(() => {
      setTimeout(() => {
        document.querySelector('html').style.overflow = 'visible'
      }, 700)
    })
  },
  updated () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      categorySysId1: '',
      pickLists: []
    }
  },
  methods: {
    chngCat (categorySysId1) {
      this.categorySysId1 = categorySysId1
    }
  }
}
</script>

<style>

</style>
