<template>
  <div class="FashionMainWrap">
      <Bar/>
      <Categories/>
      <SwipeSection/>
      <Tags/>
      <MediaSection/>
      <ScrollTopBtn/>
  </div>
</template>

<script>
import Bar from '@/components/subpage/shared/Bar'
import Categories from '@/components/subpage/shared/Categories'
import SwipeSection from '@/components/subpage/fashion/FashionSwipe'
import Tags from '@/components/subpage/fashion/TagCategories'
import MediaSection from '@/components/subpage/fashion/MediaSection'
import ScrollTopBtn from '@/components/subpage/shared/ScrollTopBtn'

export default {
  components: {
    Bar, Categories, SwipeSection, Tags, MediaSection, ScrollTopBtn
  }
}
</script>

<style>

</style>
