<template>
  <div class="pointList compBlock" :class="emptyValue?'empty':''">
    <input type="radio" name="type" id="all" value="0" v-model="type" checked />
    <label for="all" >전체</label>
    <input type="radio" name="type" id="save" value="1" v-model="type" />
    <label for="save" >적립</label>
    <input type="radio" name="type" id="use" value="2" v-model="type" />
    <label for="use" >사용</label>
    <!-- 전체 리스트 -->
    <ul class="list all_list" :class="{'emptyBox': lists.length === 0 }">
      <li class="item" v-for="list in lists" v-bind:key="list.pointHistSysId">
        <div class="txt">
          <p class="title">임시 제목</p>
          <p class="date">{{list.createdAt}}</p>
        </div>
        <p class="point" v-if="list.point > 0">+{{list.point}}<br/><span class="desc">임시</span></p>
        <p class="point c_them" v-if="list.point < 0">-{{list.point}}<br/><span class="desc">임시</span></p>
      </li>

      <!-- 조회 내역이 없을때 -->
      <li class="emptyItem" v-if="lists.length === 0">
        <img src="../../../assets/img/ico/ico_logo_gray.png" alt="" />
        <p>조회내역이 없습니다</p>
      </li>
    </ul>

    <!-- 적립 리스트 -->
    <ul class="list save_list" :class="{'emptyBox': saveList.length === 0 }">
      <li class="item" v-for="list in saveList" v-bind:key="list.pointHistSysId">
        <div class="txt">
          <p class="title">임시 제목</p>
          <p class="date">{{list.createdAt}}</p>
        </div>
        <p class="point" v-if="list.point > 0">+{{list.point}}<br/><span class="desc">임시</span></p>
      </li>

      <!-- 조회 내역이 없을때 -->
      <li class="emptyItem" v-if="saveList.length === 0">
        <img src="../../../assets/img/ico/ico_logo_gray.png" alt="" />
        <p>조회내역이 없습니다</p>
      </li>
    </ul>

    <!-- 사용 리스트 -->
    <ul class="list use_list" :class="{'emptyBox': useList.length === 0 }">
      <li class="item" v-for="list in useList" v-bind:key="list.pointHistSysId">
        <div class="txt">
          <p class="title">임시 제목</p>
          <p class="date">{{list.createdAt}}</p>
        </div>
        <p class="point" v-if="list.point > 0">+{{list.point}}<br/><span class="desc">임시</span></p>
      </li>

      <!-- 조회 내역이 없을때 -->
      <li class="emptyItem" v-if="useList.length === 0">
        <img src="../../../assets/img/ico/ico_logo_gray.png" alt="" />
        <p>조회내역이 없습니다</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['lists'],
  data () {
    return {
      type: 0,
      emptyValue: false,
      items: this.lists,
      saveList: [],
      useList: []
    }
  },
  methods: {
  },
  mounted () {
    if (this.lists.length > 0) {
      this.items.forEach(obj => {
        if (obj.treatFlag === 1) {
          this.saveList.push(...obj)
        }
      })

      this.items.forEach(obj => {
        if (obj.treatFlag === 2) {
          this.useList.push(...obj)
        }
      })
    }

    if (this.type === 0 && this.lists.length === 0) {
      this.emptyValue = true
    } else if (this.type === 1 && this.saveList.length === 0) {
      this.emptyValue = true
    } else if (this.type === 2 && this.useList.length === 0) {
      this.emptyValue = true
    } else {
      this.emptyValue = false
    }
  }
}
</script>

<style>

</style>
