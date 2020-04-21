<template>
  <div class="qnaList compBlock compBorderBlock">
    <h3 v-if="pageType==='search'" class="searchResult"><span class="c_them">{{keyword}}</span>에 대한 <span class="c_them">{{list.length}}</span>개의 검색 결과</h3>
    <ul>
      <li class="item" v-for="(item, index) in list" :key="item.siteFaqSysId" @click="toggle($event)">
        <h3>
          <span class="num">{{index+1}}.</span>
          <span class="title" v-html="wordWrap(item.title)"></span>
        </h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <div v-html="item.content"></div>
        </div>
      </li>
    </ul>
    <button class="btn_more" v-if="list.length > 10 && pageType==='search'">더보기</button>
  </div>
</template>

<script>
export default {
  props: ['list', 'pageType', 'keyword'],
  data () {
    return {
    }
  },
  methods: {
    toggle (event) {
      let el
      if ($(event.target).hasClass('item')) {
        el = $(event.target)
      } else {
        el = $(event.target).parents('.item')
      }
      if (el.find('.answer').is(':visible')) {
        el.css('background', '#fff')
      } else {
        el.css('background', '#f3f3f3')
      }
      el.find('.answer').slideToggle('fast')
    },
    wordWrap (txt) {
      let val = new RegExp(this.keyword, 'gi')
      return txt.replace(val, '<span class="c_them">' + this.keyword + '</span>')
    }
  }
}
</script>

<style>

</style>
