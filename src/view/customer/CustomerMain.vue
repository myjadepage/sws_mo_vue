<template>
<div class="customerBlock" >
    <Bar :val="title" />
    <qnaBtns />
    <section class="qnsSearchBlock compBorderBlock compBlock">
      <qnaSearchBlock @search="search" />
      <IconBlcok />
    </section>
    <qnaList :list="faqList" :pageType="pageType" :keyword="null" />
    <!-- <qnaList :faqList="faqList" :pageType="pageType" :keyword="null" v-if="faqList.length > 0" /> -->
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
import { getFaqList } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 고객센터'
  },
  data () {
    return {
      title: '고객센터',
      pageType: 'main',
      faqList: []
    }
  },
  created () {
    let str = `?startIndex=0&rowCount=5`
    getFaqList(str)
      .then(res => {
        console.log(res)
        if (res.data.jsonData.resultCode === '0001') {
          this.faqList = res.data.jsonData.siteFaqs
        } else if (res.data.jsonData.resultCode === '0004') {
          this.faqList = []
        }
      })
      .catch(err => {
        console.log(err)
      })
  },
  methods: {
    search (key) {
      this.keyword = key
      this.$router.push('/CustomerSearch/' + this.keyword)
    }
  },
  components: {
    Bar, qnaBtns, qnaSearchBlock, qnaList, csCenter, IconBlcok
  }
}
</script>
