<template>
  <div>
  <Bar :val="title" />
  <LogList :logs="logs" v-if="logs.length > 0" />
  <ListEmpty :titleText="'제재내역이 없습니다.'" v-else/>
  </div>
</template>

<script>
import Bar from '@/components/shared/Bar'
import LogList from '@/components/mypage/Setting/LogList'
import ListEmpty from '@/components/shared/ListEmpty'

export default {
  name: 'ReportLog',
  data () {
    return {
      title: '제재내역',
      logs: [
        { date: '2020.02.11',
          desc: '반복적인 방송 가이드라인 위반(욕설/비방/음란성)으로 회원님의 계정은 2020년 02월 11일로부터 1주일 간 방송금지 처리되었습니다.'
        },
        { date: '2020.02.10',
          desc: '반복적인 방송 가이드라인 위반(음란성)으로 회원님의 동영상은 삭제 처리되었습니다.'
        },
        { date: '2020.02.02',
          desc: '반복적인 방송 가이드라인 위반(욕설/비방/음란성)으로 회원님의 계정은 2020년 02월 02일로부터 1주일 간 방송금지 처리되었습니다.'
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
