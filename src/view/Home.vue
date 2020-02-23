<template>
<div id="swsWrap" class="makers_main">
      <Header></Header>
      <SideMenu></SideMenu>
      <MainContent></MainContent>
      <Footer></Footer>
</div>
</template>

<script>
import Header from '@/components/shared/Header'
import Footer from '@/components/shared/Footer'
import SideMenu from '@/components/shared/SideMenu'
import MainContent from '@/components/MainContent'

export default {
  name: 'Home',
  data () {
    return {
    }
  },
  components: {
    Header,
    SideMenu,
    MainContent,
    Footer
  }
}
</script>

<style>
</style>
