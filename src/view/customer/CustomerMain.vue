<template>
<div class="customerBlock" >
    <Bar :val="title" />
    <qnaBtns />
    <section class="qnsSearchBlock compBorderBlock compBlock">
      <qnaSearchBlock />
      <IconBlcok />
    </section>
    <qnaList :list="list" :pageType="pageType" :keyword="null" />
    <csCenter />
</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import qnaBtns from '@/components/customer/qnaBtns'
import qnaSearchBlock from '@/components/customer/qnaSearchBlock'
import qnaList from '@/components/customer/qnaList'
import csCenter from '@/components/customer/csCenter'
import IconBlcok from '@/components/customer/qnaIconBlock'

export default {
  data () {
    return {
      title: '고객센터',
      pageType: 'main',
      list: [
        'a', 'b', 'c', 'd', 'e'
      ]
    }
  },
  components: {
    Bar, qnaBtns, qnaSearchBlock, qnaList, csCenter, IconBlcok
  }
}
</script>
