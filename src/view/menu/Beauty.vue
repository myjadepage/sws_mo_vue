<template>
  <div>뷰티카테고리 진입
      <Header></Header>
      <Gnb></Gnb>
  </div>
</template>

<script>
import Header from '@/components/shared/Header'
import Gnb from '@/components/shared/Gnb'
export default {
  name: 'Beauty',
  components: {
    Gnb,
    Header
  }
}
</script>

<style>

</style>
