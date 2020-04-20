<template>
<div class="customerBlock" >
    <Bar :val="title" />
    <EmptyBlock :param="emptyMessage" v-if="list.length === 0" />
    <MyQna :list="list" v-else />
</div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import EmptyBlock from '@/components/shared/EmptyBlock'
import MyQna from '@/components/customer/MyQna'

export default {
  metaInfo: {
    title: 'Shall We Shop - 문의 내역'
  },
  data () {
    return {
      title: '문의내역',
      emptyMessage: '문의내역이 없습니다.',
      list: [
        {
          viewAble: false
        },
        {
          viewAble: false
        },
        {
          viewAble: false
        },
        {
          viewAble: false
        },
        {
          viewAble: false
        }
      ]
    }
  },
  components: {
    Bar, MyQna, EmptyBlock
  }
}
</script>
