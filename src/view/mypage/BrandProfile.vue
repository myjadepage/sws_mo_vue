<template>
<div class="brandProfile">
  <PrDetail :userId="userId" />
  <PrList :list="list" />
</div>
</template>

<script>
import PrDetail from '@/components/mypage/BrandProfile/PrDetail'
import PrList from '@/components/mypage/BrandProfile/PrList'

export default {
  metaInfo: {
    title: 'Shall We Shop - 인플루언서'
  },
  data () {
    return {
      userId: 'aa',
      list: {
        movie: [
          'a'
        ],
        product: [
          'a'
        ]
      }
    }
  },
  components: {
    PrDetail, PrList
  }
}
</script>
<style>

</style>
