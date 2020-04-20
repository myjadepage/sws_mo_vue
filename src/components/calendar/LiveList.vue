<template>
  <div class="liveListWrap">
    <section class="liveListContain" v-for="(time, index) in times" :key="'timeSection_' + index" >
      <h3 v-if="mode==='all'">{{showTime(time)}}</h3>
      <ul class="liveList">
        <li class="item" v-for="(it, index) in time.item" :key="'item_' + time.time + '_' + index">
          <div class="itemTop">
            <!-- thumBox에 onair 붙이면 방송중 -->
            <div class="thumBox" :class="{'onair' : it.treatFlag === 1}" :style="{backgroundImage:'url(' + it.broadcastPrdts[0].bigImageUrl + ')', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">{{it.reservationCnt}}명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" :id="'temp_' + it.broadcastSysId" v-model="it.reservationFlag" @click="alarmChk($event, it.broadcastSysId, it.reservationFlag, it.broadcastScheduleSysId, it.userBroadcastReservationSysId)" />
                <label :for="'temp_' + it.broadcastSysId"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(' + it.broadcastPrdts[0].smallImageUrl + ')', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}" v-for="(prd, index) in it.broadcastPrdts" :key="'prd_'+ time.time + '_' + it.prdtSysId + '_' + index"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>{{it.title}}</h4>
              <p>{{it.title}}</p>
            </router-link>
            <p class="info">{{dtFormat(it.startDate, it.startTime)}} | <span :class="{'c_them': it.treatFlag === 1}">{{movState(it.treatFlag)}}</span></p>
          </div>
        </li>
      </ul>
    </section>

    <section v-if="modalVisiblity" class="modalBg">
      <PopDoubleButton v-if="modalCancle" @close="closeModal" @submit="submit" :title="modalTitle" :message="modalMessage" />
    </section>
    <alarmSet v-if="alarmModal && alarmState" :alarmAni="alarmAni" :alarmState="alarmState" :alarmMessage="alarmMessageOn" ref="alarm" />
    <alarmSet v-if="alarmModal && !alarmState" :alarmAni="alarmAni" :alarmState="alarmState" :alarmMessage="alarmMessageOff" ref="alarm" />
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import PopDoubleButton from '@/components/shared/PopDoubleButton'
import alarmSet from '@/components/calendar/modal/alarmSet'
import { setReservateBroadCast, getAccessToken, removeReservateBroadCast } from '@/api/index.js'

export default {
  props: ['mode', 'list'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        touchReleaseOnEdges: true
      },
      modalTitle: '방송 예약 취소',
      modalMessage: '방송 예약을 취소하시겠습니까?',
      modalVisiblity: false,
      modalCancle: false,
      selected: 0,
      alarmModal: false,
      alarmState: false,
      alarmAni: false,
      alarmMessageOn: '알림을 설정했습니다',
      alarmMessageOff: '알림을 삭제했습니다',
      times: []
    }
  },
  components: {
    swiper, swiperSlide, PopDoubleButton, alarmSet
  },
  methods: {
    alarmChk (e, broadcastSysId, reservationFlag, broadcastScheduleSysId, userBroadcastReservationSysId) {
      this.selected = broadcastSysId
      if (reservationFlag === true) {
        e.preventDefault()
        this.modalVisiblity = true
        this.modalCancle = true
      } else {
        setReservateBroadCast(sessionStorage.getItem('accessToken'), broadcastScheduleSysId)
          .then(res => {
            console.log(res)
            if (res.data.jsonData.resultCode === '0001') {
              for (let i = 0; i < this.times.length; i++) {
                for (let j = 0; j < this.times[i].item.length; j++) {
                  if (this.times[i].item[j].broadcastSysId === this.selected) {
                    this.times[i].item[j].reservationFlag = true
                    this.times[i].item[j].userBroadcastReservationSysId = res.data.jsonData.res.userBroadcastReservationSysId
                  }
                }
              }
              this.alarmModal = true
              this.alarmState = true
              setTimeout(() => {
                this.alarmAni = true
                setTimeout(() => {
                  this.alarmAni = false
                  setTimeout(() => {
                    this.alarmModal = false
                    this.alarmState = false
                  }, 300)
                }, 1000)
              }, 50)
            }
          })
          .catch(err => {
            console.log(err)
            if (err.response.status === 401) {
              getAccessToken(sessionStorage.getItem('refreshToken'))
                .then(res => {
                  sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                  setReservateBroadCast(sessionStorage.getItem('accessToken'), broadcastScheduleSysId)
                    .then(res => {
                      console.log(res)
                      if (res.data.jsonData.resultCode === '0001') {
                        for (let i = 0; i < this.times.length; i++) {
                          for (let j = 0; j < this.times[i].item.length; j++) {
                            if (this.times[i].item[j].broadcastSysId === this.selected) {
                              this.times[i].item[j].reservationFlag = true
                              this.times[i].item[j].userBroadcastReservationSysId = res.data.jsonData.res.userBroadcastReservationSysId
                            }
                          }
                        }
                        this.alarmModal = true
                        this.alarmState = true
                        setTimeout(() => {
                          this.alarmAni = true
                          setTimeout(() => {
                            this.alarmAni = false
                            setTimeout(() => {
                              this.alarmModal = false
                              this.alarmState = false
                            }, 300)
                          }, 1000)
                        }, 50)
                      }
                    })
                    .catch(err => {
                      if (err.response.status === 401) {
                        this.$store.dispatch('logOut')
                        this.$router.push('/Login')
                      }
                    })
                })
                .catch(err => {
                  if (err.response.status === 401) {
                    this.$store.dispatch('logOut')
                    this.$router.push('/Login')
                  }
                })
            }
          })
      }
    },
    closeModal () {
      this.modalVisiblity = false
      this.modalCancle = false
    },
    submit () {
      for (let i = 0; i < this.times.length; i++) {
        for (let j = 0; j < this.times[i].item.length; j++) {
          if (this.times[i].item[j].broadcastSysId === this.selected) {
            removeReservateBroadCast(sessionStorage.getItem('accessToken'), this.times[i].item[j].userBroadcastReservationSysId)
              .then(res => {
                console.log(res)
                if (res.data.jsonData.resultCode === '0001') {
                  this.closeModal()
                  this.times[i].item[j].reservationFlag = false
                  this.times[i].item[j].userBroadcastReservationSysId = ''
                  this.alarmModal = true
                  this.alarmState = false
                  setTimeout(() => {
                    this.alarmAni = true
                    setTimeout(() => {
                      this.alarmAni = false
                      setTimeout(() => {
                        this.alarmModal = false
                      }, 300)
                    }, 1500)
                  }, 50)
                }
              })
          }
        }
      }
    },
    showTime (time) {
      return `${parseInt(time.time) < 13 ? '오전' : '오후'} ${parseInt(time.time) < 13 ? time.time : (parseInt(time.time) - 12)}시 (${time.length})`
    },
    dtFormat (date, time) {
      return `${date.replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1.$2.$3')} ${time.substring(0, 4).replace(/([0-9]{2})([0-9]{2})/, '$1:$2')}`
    },
    movState (stat) {
      if (stat === 0) {
        return '방송예정'
      } else if (stat === 1) {
        return '방송중'
      } else if (stat === 2) {
        return '일시정지'
      } else if (stat === 3) {
        return '지난방송'
      }
    }
  },
  mounted () {
    for (let i = 0; i < this.list.length; i++) {
      let idx = this.times.map(x => x.time).indexOf(this.list[i].startTime.substring(0, 2))
      this.list[i].reservationFlag === 1 ? this.list[i].reservationFlag = true : this.list[i].reservationFlag = false
      if (idx === -1 || this.mode === 'my') {
        // eslint-disable-next-line
        this.times.push({
          time: this.list[i].startTime.substring(0, 2),
          length: 1,
          item: [this.list[i]]
        })
      } else {
        this.times[idx].length++
        this.times[idx].item.push(this.list[i])
      }
    }
    this.times.sort()
  }
}
</script>
