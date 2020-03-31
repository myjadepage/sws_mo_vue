<template>
  <div class="liveListWrap">
    <section class="liveListContain">
      <h3 v-if="mode==='all'">오후 1시 (2)</h3>
      <ul class="liveList">
        <li class="item">
          <div class="itemTop">
            <div class="thumBox" :style="{backgroundImage:'url(/static/images/1.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_1" v-model="list[0].alarm" @click="alarmChk($event, 0)" />
                <label for="temp_1"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <p class="info">2020.03.16 12:30 | 지난방송</p>
          </div>
        </li>
        <li class="item" v-if="mode==='my'">
          <div class="itemTop">
            <!-- thumBox에 onair 붙이면 방송중 -->
            <div class="thumBox onair" :style="{backgroundImage:'url(/static/images/2.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_2" v-model="list[3].alarm" @click="alarmChk($event, 3)" />
                <label for="temp_2"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_3.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <!-- 방송중일떄 span.c_them  -->
            <p class="info">2020.03.16 12:30 | <span class="c_them">방송중</span></p>
          </div>
        </li>
        <li class="item" v-if="mode==='my'">
          <div class="itemTop">
            <!-- thum -->
            <div class="thumBox" :style="{backgroundImage:'url(/static/images/2.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_3" v-model="list[4].alarm" @click="alarmChk($event, 4)" />
                <label for="temp_3"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_3.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <p class="info">2020.03.16 12:30 | 방송예정</p>
          </div>
        </li>
        <li class="item" v-if="mode==='my'">
          <div class="itemTop">
            <!-- thumBox에 onair 붙이면 방송중 -->
            <div class="thumBox onair" :style="{backgroundImage:'url(/static/images/2.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_4" v-model="list[5].alarm" @click="alarmChk($event, 5)" />
                <label for="temp_4"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_3.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <!-- 방송중일떄 span.c_them  -->
            <p class="info">2020.03.16 12:30 | <span class="c_them">방송중</span></p>
          </div>
        </li>
        <li class="item" v-if="mode==='my'">
          <div class="itemTop">
            <!-- thum -->
            <div class="thumBox" :style="{backgroundImage:'url(/static/images/2.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_5" v-model="list[6].alarm" @click="alarmChk($event, 6)" />
                <label for="temp_5"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_3.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <p class="info">2020.03.16 12:30 | 방송예정</p>
          </div>
        </li>
      </ul>
    </section>

    <section class="liveListContain"  v-if="mode==='all'">
      <h3>오후 2시 (6)</h3>
      <ul class="liveList">
        <li class="item">
          <div class="itemTop">
            <!-- thumBox에 onair 붙이면 방송중 -->
            <div class="thumBox onair" :style="{backgroundImage:'url(/static/images/2.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_2" v-model="list[1].alarm" @click="alarmChk($event, 1)" />
                <label for="temp_2"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_3.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <!-- 방송중일떄 span.c_them  -->
            <p class="info">2020.03.16 12:30 | <span class="c_them">방송중</span></p>
          </div>
        </li>
        <li class="item">
          <div class="itemTop">
            <!-- thum -->
            <div class="thumBox" :style="{backgroundImage:'url(/static/images/2.jpg)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}">
              <router-link to=""></router-link>
            </div>
            <div class="rightBox">
              <p class="txt"><span class="c_them">924명</span> 알림예약!</p>
              <div class="switchBtn">
                <input type="checkbox" id="temp_3" v-model="list[2].alarm" @click="alarmChk($event, 2)" />
                <label for="temp_3"></label>
              </div>
              <swiper :options="swiperOption" class="picsSlider" >
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_1.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_2.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_them_3.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
                <swiper-slide :style="{backgroundImage:'url(/static/images/temp_weekly_02.png)', backgroundSize: 'cover', backgroundPosition: '50%', backgroundRepeat:'no-repeat'}"></swiper-slide>
              </swiper>
            </div>
          </div>
          <div class="itemBot">
            <router-link to="">
              <h4>No광고! 취향저격 당한 샤넬 신상컬렉션으로 풀 메이크업 해보기!</h4>
              <p>샤넬 신상컬렉션으로 풀 메이크업 해보기!</p>
            </router-link>
            <p class="info">2020.03.16 12:30 | 방송예정</p>
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

export default {
  props: ['mode', 'list'],
  data () {
    return {
      swiperOption: {
        slidesPerView: 'auto',
        spaceBetween: 15,
        touchReleaseOnEdges: true,
        onSlideChangeEnd: function () {
          this.onSwipe()
        }
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
      alarmMessageOff: '알림을 삭제했습니다'
    }
  },
  components: {
    swiper, swiperSlide, PopDoubleButton, alarmSet
  },
  methods: {
    alarmChk (e, idx) {
      if (this.list[idx].alarm) {
        e.preventDefault()
        this.modalVisiblity = true
        this.modalCancle = true
        this.selected = idx
      } else {
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
    },
    closeModal () {
      this.modalVisiblity = false
      this.modalCancle = false
    },
    submit () {
      this.closeModal()
      this.list[this.selected].alarm = !this.list[this.selected].alarm
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
  }
}
</script>
