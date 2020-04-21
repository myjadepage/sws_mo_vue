<template>
  <div class="pointList compBlock" :class="emptyValue?'empty':''">
    <input type="radio" id="all" :value="0" v-model="type" />
    <label for="all" >전체</label>
    <input type="radio" id="save" :value="1" v-model="type" />
    <label for="save" >적립</label>
    <input type="radio" id="use" :value="2" v-model="type" />
    <label for="use" >사용</label>
    <!-- 전체 리스트 -->
    <ul class="list all_list" :class="{'emptyBox': lists.length === 0 }">
      <li class="item" v-for="list in lists" v-bind:key="list.pointHistSysId">
        <div class="txt">
          <p class="title">임시 제목</p>
          <p class="date">{{dateForm(list.createdAt)}}</p>
        </div>
        <p class="point">{{formatPoint(list.point, list.treatFlag)}}<br/><span class="desc">이벤트</span></p>
      </li>

      <!-- 조회 내역이 없을때 -->
      <li class="emptyItem" v-if="lists.length === 0">
        <img src="../../../assets/img/ico/ico_logo_gray.png" alt="" />
        <p>조회내역이 없습니다</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['lists', 'treatFlag'],
  data () {
    return {
      type: this.treatFlag,
      emptyValue: false
    }
  },
  methods: {
    dateForm (date) {
      let str = String(date)
      return `${str.substr(0, 4)}.${str.substr(4, 2)}.${str.substr(6, 2)} ${str.substr(8, 2)}:${str.substr(10, 2)}:${str.substr(12, 2)}`
    },
    formatPoint (point, treatFlag) {
      let str = ''
      if (treatFlag === 1) {
        str = '+'
      } else if (treatFlag === 2) {
        str = '-'
      }
      return str + point.toString().toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    }
  },
  watch: {
    type: {
      handler () {
        this.$emit('tab', this.type)
      }
    }
  }
}
</script>

<style>

</style>
