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
      faqList: [
        {
          siteFaqSysId: 0,
          title: '빠른 환불 서비스란 무엇인가요?',
          content: '주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.'
        },
        {
          siteFaqSysId: 1,
          title: '빠른 환불 서비스란 무엇인가요?222',
          content: '주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면222 쿠폰 적용이 안료됩니다.'
        },
        {
          siteFaqSysId: 2,
          title: '빠른 환불 서비스란 무엇인가요22333?',
          content: '주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 333안료됩니다.'
        },
        {
          siteFaqSysId: 3,
          title: '빠른 환불 서비스란 무엇인가요?444',
          content: '주문서 페이지에서 [쿠폰적용] 버튼을 클릭 한 후 팝업창에서 이용 원하시는 쿠폰을 선택하고 [쿠폰적용]버튼을 누르면 쿠폰 적용이 안료됩니다.4444'
        }
      ]
    }
  },
  created () {
    // 임시주석. 현재 faq 등록된 것이 없으므로
    getFaqList({
      startIndex: 0,
      rowCount: 5
    })
      .then(res => {
        console.log(res)
        if (res.data.jsonData.resultCode === '0001') {
          this.faqList = res.data.jsonData.siteFaqs
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
