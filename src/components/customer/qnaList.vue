<template>
  <div class="qnaList compBlock compBorderBlock">
    <h3 v-if="pageType==='search'" class="searchResult"><span class="c_them">{{keyword}}</span>에 대한 <span class="c_them">{{list.length}}</span>개의 검색 결과</h3>
    <ul>
      <li class="item" v-for="(item, index) in list" :key="item.siteFaqSysId">
        <h3 @click="toggle($event)">
          <span class="num">{{index+1}}.</span>
          <span class="title" v-html="wordWrap(item.title)"></span>
        </h3>
        <div class="answer">
          <h4 class="c_them">답변</h4>
          <p>{{item.content}}</p>
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
      if ($(event.target).parents('h3').next().is(':visible')) {
        $(event.target).parents('.item').css('background', '#fff')
      } else {
        $(event.target).parents('.item').css('background', '#f3f3f3')
      }
      $(event.target).parents('h3').next().slideToggle('fast')
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
