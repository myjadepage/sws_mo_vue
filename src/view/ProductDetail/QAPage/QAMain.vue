<template>
  <div class="qaPageWrap">
      <Bar :val="'상품상세'" />
      <Header/>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import Header from '@/components/product/detailDescription/qa/QAPage/QAHeader'

export default {
  components: {
    Bar, Header
  }

}
</script>

<style>

</style>
