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
  created () {
    window.scrollTo(0, 0)
    sessionStorage.removeItem('products')
    sessionStorage.removeItem('selectedOptions')
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
