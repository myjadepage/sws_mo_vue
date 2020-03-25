<template>
  <div class="detailQaWrap">
    <div class="qaHeader">
      상품문의 총 {{qaList.length}}개
      <button class="goQaBtn" @click="goQAbtnClick">상품 문의하기</button>
    </div>
    <Entity v-for="(qa,idx) in qaList" :key="idx" :qa="qa" />
  </div>
</template>

<script>
import Entity from './qa/QAentity'

export default {
  components: {
    Entity
  },
  data () {
    return {
      qaList: [
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          content: '할인 기간은 언제까지에요?',
          reply: '',
          status: 0
        },
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          content: '할인 기간은 언제까지에요?abcdefghijklmfopqrstuvwxyz',
          reply: '할인은 언제까지 입니다.',
          status: 1
        },
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          content: '할인 기간은 언제까지에요?abcdefghijklmfopqrstuvwxyz',
          reply: '할인은 언제까지 입니다.',
          status: 1
        },
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          content: '할인 기간은 언제까지에요?',
          reply: '',
          status: 0
        }
      ]
    }
  },
  methods: {
    goQAbtnClick () {

    }
  }
}
</script>

<style>
.detailQaWrap .qaHeader{
  padding: 20px 12px 20px 16px;
  font-size: 15px;
  font-weight: 500;
  height: 36px;
  line-height: 36px;
}

.detailQaWrap .goQaBtn{
  float: right;
  width: 100px;
  height: 36px;
  color: #e61754;
  border: 1px solid #e61754;
  border-radius: 2px;
}
</style>
