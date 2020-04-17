<template>
<div class="customerBlock search" >
    <Bar :val="title" />
    <section class="qnsSearchBlock compBorderBlock compBlock">
      <qnaSearchBlock :keyword="keyword" />
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

export default {
  metaInfo: {
    title: 'Shall We Shop - 문의 조회/검색'
  },
  data () {
    return {
      title: '고객센터',
      pageType: 'search',
      emptyMessage: '검색 결과가 없습니다.',
      list: [
        'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'
      ],
      keyword: '환불'
    }
  },
  components: {
    Bar, qnaSearchBlock, qnaList, EmptyBlock
  }
}
</script>
