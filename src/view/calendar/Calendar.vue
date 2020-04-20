<template>
<div class="calendarBlock" :class="list.length === 0? 'emptyHeight': ''">
    <Header />
    <datePicker @setDate="getList"/>
    <EmptyBlock :param="emptyMessage" v-if="list.length === 0"  />
    <liveList v-else :mode="mode" :list="list" />
    <liveFloatingBtn v-if="isLogin"/>
</div>
</template>

<script>
import Header from '@/components/shared/Header'
import datePicker from '@/components/Calendar/DatePicker'
import liveList from '@/components/Calendar/LiveList'
import EmptyBlock from '@/components/shared/EmptyBlock'
import liveFloatingBtn from '@/components/Calendar/LiveFloatingBtn'
import { getBroadCastSchedules } from '@/api/index.js'

export default {
  metaInfo: {
    title: 'Shall We Shop - Live 편성표'
  },
  data () {
    return {
      mode: 'all',
      list: [
        // {
        //   broadcastScheduleSysId: 1,
        //   startDate: '20200416',
        //   startTime: '120005',
        //   endTime: '130000',
        //   reservationCnt: 25,
        //   reservationFlag: 0,
        //   broadcastSysId: 1,
        //   title: '크릴오일 리뷰',
        //   treatFlag: 1,
        //   broadcastPrdts: [
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     }
        //   ]
        // },
        // {
        //   broadcastScheduleSysId: 2,
        //   startDate: '20200416',
        //   startTime: '140005',
        //   endTime: '150000',
        //   reservationCnt: 12,
        //   reservationFlag: 0,
        //   broadcastSysId: 2,
        //   title: '크릴오일 리뷰',
        //   treatFlag: 0,
        //   broadcastPrdts: [
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     }
        //   ]
        // },
        // {
        //   broadcastScheduleSysId: 3,
        //   userBroadcastReservationSysId: 3,
        //   startDate: '20200416',
        //   startTime: '123005',
        //   endTime: '140000',
        //   reservationCnt: 45,
        //   reservationFlag: 1,
        //   broadcastSysId: 3,
        //   title: '크릴오일 리뷰',
        //   treatFlag: 0,
        //   broadcastPrdts: [
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     }
        //   ]
        // },
        // {
        //   broadcastScheduleSysId: 4,
        //   startDate: '20200416',
        //   startTime: '150005',
        //   endTime: '160000',
        //   reservationCnt: 60,
        //   reservationFlag: 0,
        //   broadcastSysId: 4,
        //   title: '크릴오일 리뷰',
        //   treatFlag: 0,
        //   broadcastPrdts: [
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     },
        //     {
        //       prdtSysId: 42,
        //       name: '크릴오일 30개입',
        //       bigImageUrl: '/static/images/temp_them_3.png',
        //       middleImageUrl: '/static/images/temp_them_3.png',
        //       smallImageUrl: '/static/images/temp_them_3.png'
        //     }
        //   ]
        // }
      ],
      emptyMessage: '등록된 편성표가 없습니다.',
      isLogin: false
    }
  },
  components: {
    Header, datePicker, liveList, liveFloatingBtn, EmptyBlock
  },
  created () {
    window.scrollTo(0, 0)

    if (sessionStorage.getItem('accessToken')) {
      this.isLogin = true
    }
  },
  methods: {
    getList (date) {
      let dd = new Date(date)
      let month = dd.getMonth() + 1
      let d = dd.getDate()
      let startDate = dd.getFullYear() + (String(month).length < 2 ? '0' + month : month) + (String(d).length < 2 ? '0' + d : d)
      getBroadCastSchedules(startDate, sessionStorage.getItem('accessToken'))
        .then(res => {
          console.log(res)
          if (res.data.jsonData.resultCode === '0001') {
            this.list = res.data.jsonData.broadcasts
          } else if (res.data.jsonData.resultCode === '0004') {
            this.list = []
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>
