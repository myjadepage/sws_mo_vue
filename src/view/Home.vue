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
