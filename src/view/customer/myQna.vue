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
  data () {
    return {
      title: '문의내역',
      emptyMessage: '문의내역이 없습니다.',
      list: [
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
