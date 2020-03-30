<template>
  <div class="pointList compBlock" :class="listCount===0?'empty':''">
    <input type="radio" name="type" id="all" checked />
    <label for="all" @click="changeTab('all')">전체</label>
    <input type="radio" name="type" id="save" />
    <label for="save" @click="changeTab('save')">적립</label>
    <input type="radio" name="type" id="use" />
    <label for="use" @click="changeTab('use')">사용</label>
    <ul class="list all_list">
      <li class="item">
        <div class="txt">
          <p class="title">스크린커버 락 이벤트 당첨</p>
          <p class="date">2019.05.24 10:26:24</p>
        </div>
        <p class="point">+100<br/><span class="desc">이벤트</span></p>
      </li>
      <li class="item">
        <div class="txt">
          <p class="title">스크린커버 락 이벤트 당첨 스크린커버 락 이벤트 당첨</p>
          <p class="date">2019.05.24 10:26:24</p>
        </div>
        <p class="point c_them">-220,000<br/><span class="desc">상품구매</span></p>
      </li>
      <li class="item">
        <div class="txt">
          <p class="title">스크린커버 락 이벤트 당첨</p>
          <p class="date">2019.05.24 10:26:24</p>
        </div>
        <p class="point">+30<br/><span class="desc">친구추천</span></p>
      </li>
    </ul>
    <ul class="list save_list">
      <li class="item">
        <div class="txt">
          <p class="title">스크린커버 락 이벤트 당첨</p>
          <p class="date">2019.05.24 10:26:24</p>
        </div>
        <p class="point">+100<br/><span class="desc">이벤트</span></p>
      </li>
      <li class="item">
        <div class="txt">
          <p class="title">스크린커버 락 이벤트 당첨</p>
          <p class="date">2019.05.24 10:26:24</p>
        </div>
        <p class="point">+30<br/><span class="desc">친구추천</span></p>
      </li>
    </ul>
    <ul class="list use_list emptyBox">
      <li class="emptyItem">
        <img src="../../../assets/img/ico/ico_logo_gray.png" alt="" />
        <p>조회내역이 없습니다</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props: ['list', 'listCount'],
  data () {
    return {
    }
  },
  methods: {
    changeTab (typeStr) {
      this.$emit('type', typeStr)
    }
  }
}
</script>

<style>

</style>
