<template>
  <div class="lookUp compBlock">
    <div class="btnsWrap">
      <button class="btn_them border" :class="{'gray':state !== 0}" @click="setToday">오늘</button>
      <button class="btn_them border" :class="{'gray':state !== 1}" @click="setWeek">1주일</button>
      <button class="btn_them border" :class="{'gray':state !== 2}" @click="set3Month">3개월</button>
      <button class="btn_them border" :class="{'gray':state !== 3}" @click="set6Month">6개월</button>
      <button class="btn_them border" :class="{'gray':state !== 4}" @click="setYear">1년</button>
    </div>
    <p>조회기간 <span>{{startDateStr}} ~ {{todayStr}}</span></p>
  </div>
</template>

<script>

export default {
  props: [],
  data () {
    return {
      state: 1,
      today: '',
      todayStr: '',
      startDate: '',
      startDateStr: ''
    }
  },
  methods: {
    setToday () {
      this.state = 0
      this.startDate = new Date()
      this.startDateStr = this.dateFormat(this.startDate)
      this.sendDate()
    },
    setWeek () {
      this.state = 1
      this.startDate = new Date()
      this.startDate.setDate(this.startDate.getDate() - 7)
      this.startDateStr = this.dateFormat(this.startDate)
      this.sendDate()
    },
    set3Month () {
      this.state = 2
      this.startDate = new Date()
      this.startDate.setMonth(this.startDate.getMonth() - 3)
      this.startDateStr = this.dateFormat(this.startDate)
      this.sendDate()
    },
    set6Month () {
      this.state = 3
      this.startDate = new Date()
      this.startDate.setMonth(this.startDate.getMonth() - 6)
      this.startDateStr = this.dateFormat(this.startDate)
      this.sendDate()
    },
    setYear () {
      this.state = 4
      this.startDate = new Date()
      this.startDate.setFullYear(this.startDate.getFullYear() - 1)
      this.startDateStr = this.dateFormat(this.startDate)
      this.sendDate()
    },
    dateFormat (date) {
      return date.getFullYear() + '.' + this.dateStringLength(date.getMonth() + 1) + '.' + this.dateStringLength(date.getDate())
    },
    dateStringLength (num) {
      let str = String(num)
      if (str.length < 2) {
        str = '0' + str
      }
      return str
    },
    sendDate () {
      this.$emit('sendDate', this.todayStr, this.startDateStr)
    }
  },
  created () {
    this.today = new Date()
    this.startDate = new Date()
    this.startDate.setDate(this.startDate.getDate() - 7)

    this.todayStr = this.dateFormat(this.today)
    this.startDateStr = this.dateFormat(this.startDate)
  },
  mounted () {
    this.sendDate()
  }
}
</script>

<style>

</style>
