<template>
  <div class="FashionMainWrap">
      <Header/>
      <Categories/>
      <div class="subSlide">
        <SubSlide />
      </div>
      <LiveSlide class="subSlide"></LiveSlide>
      <CategorySlide />
      <Brand class="brandMargin" />
      <Theme />
      <Sale />
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
import CategorySlide from '@/components/subpage/shared/CategorySlide'
import Brand from '@/components/subpage/shared/Brand'
import Theme from '@/components/subpage/shared/Theme'
import ScrollTopBtn from '@/components/subpage/shared/ScrollTopBtn'
import Footer from '@/components/shared/Footer'

export default {
  components: {
    Header, Categories, ScrollTopBtn, LiveSlide, Sale, SubSlide, CategorySlide, Brand, Theme, Footer
  }
}
</script>

<style>

</style>
