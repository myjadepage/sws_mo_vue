<template>
<div id="swsWrap" class="sws_main">
      <Header></Header>
      <MainContent></MainContent>
      <Footer></Footer>
</div>
</template>

<script>

import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import MainContent from '@/components/MainContent'

export default {
  metaInfo: {
    title: 'Shall We Shop, 쉐리샵'
  },
  created () {
    window.scrollTo(0, 0)
    sessionStorage.removeItem('products')
    sessionStorage.removeItem('selectedOptions')
    sessionStorage.removeItem('selectedAddPrdts')
  },
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Header,
    MainContent,
    Footer
  }
}
</script>

<style>
</style>
