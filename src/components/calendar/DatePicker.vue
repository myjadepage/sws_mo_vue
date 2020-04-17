<template>
  <ul class="dateList">
    <li class="item" :class="{'on': selected === index}" v-for="(list, index) in dateList" :key="index">
      <button @click="selected = index">
        <p>{{list.date.getDate()}}<br/>{{list.str}}</p>
      </button>
    </li>
  </ul>
</template>

<script>

export default {
  data () {
    return {
      today: new Date(),
      dateList: [],
      selected: 0
    }
  },
  mounted () {
    for (let i = 0; i < 7; i++) {
      let tempData = new Date()
      let day
      tempData.setDate(tempData.getDate() + i)
      if (tempData.getDay() === 0) {
        day = '일'
      } else if (tempData.getDay() === 1) {
        day = '월'
      } else if (tempData.getDay() === 2) {
        day = '화'
      } else if (tempData.getDay() === 3) {
        day = '수'
      } else if (tempData.getDay() === 4) {
        day = '목'
      } else if (tempData.getDay() === 5) {
        day = '금'
      } else if (tempData.getDay() === 6) {
        day = '토'
      }

      this.dateList.push({
        date: tempData,
        str: day
      })
    }
    this.sendDate()
  },
  methods: {
    sendDate () {
      this.$emit('setDate', this.dateList[this.selected])
    }
  },
  watch: {
    selected: {
      handler () {
        this.sendDate()
      }
    }
  }
}
</script>
