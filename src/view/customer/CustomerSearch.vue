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
      startIndex: 0,
      list: [],
      keyword: this.$route.params.faqKeyword
    }
  },
  created () {
    // 임시주석. 현재 faq 등록된 것이 없으므로
    if (this.$route.params.type) {
      this.typeCode = this.$route.params.code
    }
    this.getList()
  },
  methods: {
    getList () {
      let str = `?startIndex=${this.startIndex}&rowCount=20`
      if (this.keyword !== '' && this.keyword !== undefined) {
        str += `&keyword=${this.keyword}`
      }
      if (this.typeCode !== 0) {
        str += `&faqTypeCode=${this.typeCode}`
      }
      getFaqList(str)
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.list = res.data.jsonData.siteFaqs
            this.startIndex = res.data.jsonData.startIndex
          } else if (res.data.jsonData.resultCode === '0004') {
            this.list = []
            this.startIndex = 0
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
