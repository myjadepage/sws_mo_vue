<template>
<div class="customerBlock search" >
    <Bar :val="title" />
    <section class="qnsSearchBlock compBorderBlock compBlock">
      <qnaSearchBlock :keyword="keyword" @search="search" />
    </section>
    <EmptyBlock :param="emptyMessage" v-if="list.length === 0" />
    <div v-else >
      <qnaList :list="list" :pageType="pageType" :keyword="keyword" />
      <div class="reportBlock compBlock">
        <p>더 궁금하신 사항이 있으신가요?</p>
        <router-link to="/contact" class="c_them">1:1 문의하기</router-link>
      </div>
    </div>
</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import EmptyBlock from '@/components/shared/EmptyBlock'
import qnaSearchBlock from '@/components/customer/qnaSearchBlock'
import qnaList from '@/components/customer/qnaList'
import { getFaqList } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - 문의 조회/검색'
  },
  data () {
    return {
      title: '고객센터',
      pageType: 'search',
      emptyMessage: '검색 결과가 없습니다.',
      typeCode: 0,
      list: [
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
      ],
      keyword: this.$route.params.faqKeyword
    }
  },
  created () {
    // 임시주석. 현재 faq 등록된 것이 없으므로
    this.getList()
    if (this.$route.params.type) {
      this.typeCode = this.$route.params.code
    }
  },
  methods: {
    getList () {
      getFaqList({
        startIndex: 0,
        rowCount: 20,
        keyword: this.keyword
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
    search (key) {
      this.keyword = key
      this.getList()
    }
  },
  components: {
    Bar, qnaSearchBlock, qnaList, EmptyBlock
  }
}
</script>
