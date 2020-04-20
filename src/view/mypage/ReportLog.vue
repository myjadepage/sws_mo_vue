<template>
  <div>
  <Bar :val="title" />
  <LogList :logs="logs" v-if="logs.length > 0" />
  <ListEmpty :titleText="'신고내역이 없습니다.'" v-else/>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import LogList from '@/components/mypage/Setting/LogList'
import ListEmpty from '@/components/shared/ListEmpty'

export default {
  metaInfo: {
    title: 'Shall We Shop - 신고내역'
  },
  name: 'ReportLog',
  data () {
    return {
      title: '신고내역',
      logs: [
        { date: '2020.02.11',
          desc: '반복적인 방송 가이드라인 위반(욕설/비방/음란성)으로 회원님의 계정은 신고 처리 되었습니다.'
        },
        { date: '2020.02.10',
          desc: '반복적인 방송 가이드라인 위반(욕설/비방/음란성)으로 회원님의 계정은 신고 처리 되었습니다.'
        },
        { date: '2020.02.09',
          desc: '반복적인 방송 가이드라인 위반(욕설/비방/음란성)으로 회원님의 계정은 신고 처리 되었습니다.'
        }
      ]
    }
  },
  components: {
    Bar, LogList, ListEmpty
  }
}
</script>
<style>

</style>
