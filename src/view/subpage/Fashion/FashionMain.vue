<template>
  <div class="FashionMainWrap">
      <Header/>
      <Categories @chngCat="chngCat"/>
      <div class="subSlide">
        <SubSlide />
      </div>
      <LiveSlide class="subSlide"></LiveSlide>
      <!-- <CategorySlide /> -->
      <Brand class="brandMargin" :categorySysId1="categorySysId1" />
      <Theme :categorySysId1="categorySysId1" />
      <Sale :categorySysId1="categorySysId1"/>
      <All :categorySysId1="categorySysId1"/>
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
import Sale from '@/components/subpage/shared/Sale'
import All from '@/components/subpage/shared/All'
import CategorySlide from '@/components/subpage/shared/CategorySlide'
import Brand from '@/components/subpage/shared/Brand'
import Theme from '@/components/subpage/shared/Theme'
import ScrollTopBtn from '@/components/subpage/shared/ScrollTopBtn'
import Footer from '@/components/shared/Footer'

export default {
  metaInfo: {
    title: 'Shall We Shop - 패션'
  },
  components: {
    Header, Categories, ScrollTopBtn, LiveSlide, Sale, SubSlide, CategorySlide, Brand, Theme, Footer, All
  },
  created () {
    window.scrollTo(0, 0)
  },
  data () {
    return {
      categorySysId1: ''
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
