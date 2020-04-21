<template>
  <div class="qnaList compBlock compBorderBlock">
    <h3 v-if="pageType==='search'" class="searchResult"><span class="c_them">{{listTitle}}</span>에 대한 <span class="c_them">{{list.length}}</span>개의 검색 결과</h3>
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
  props: ['list', 'pageType', 'keyword', 'typeCode'],
  data () {
    return {
      keyStr: this.keyword,
      type: parseInt(this.typeCode)
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
      if (this.keyword !== '' && this.keyword !== undefined) {
        let val = new RegExp(this.keyword, 'gi')
        return txt.replace(val, '<span class="c_them">' + this.keyword + '</span>')
      } else {
        return txt
      }
    }
  },
  computed: {
    listTitle () {
      if (this.keyword !== '' && this.keyword !== undefined) {
        return this.keyword
      } else if (this.type !== 0) {
        let txt = ''
        if (this.type === 1) { txt = '아이디/비밀번호찾기' }
        if (this.type === 2) { txt = '회원정보' }
        if (this.type === 3) { txt = '배송관련' }
        if (this.type === 4) { txt = '상품문의' }
        if (this.type === 5) { txt = '반품/교환/취소/환불' }
        if (this.type === 6) { txt = '주문결제' }
        if (this.type === 7) { txt = '적립금/쿠폰' }
        if (this.type === 8) { txt = '방송/시청' }
        if (this.type === 9) { txt = '서비스/기타' }
        return txt
      }
    }
  }
}
</script>

<style>

</style>
