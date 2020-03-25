<template>
  <div class="detailQaWrap">
    <div class="qaHeader">
      상품문의 총 {{qaList.length}}개
      <button @click="goQAbtnClick">상품 문의하기</button>
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
          title: '할인 기간은 언제까지에요?',
          content: '할인 기간은 언제까지에요?',
          reply: '',
          status: 0
        },
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          title: '할인 기간은 언제까지에요?',
          content: '할인 기간은 언제까지에요?할인 기간은 언제까지에요?',
          reply: '할인은 언제까지 입니다.',
          status: 1
        },
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          title: '할인 기간은 언제까지에요?',
          content: '할인 기간은 언제까지에요?할인 기간은 언제까지에요?',
          reply: '할인은 언제까지 입니다.',
          status: 1
        },
        {
          date: '2020.02.11',
          writer: 'abcdefgh',
          title: '할인 기간은 언제까지에요?',
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

</style>
