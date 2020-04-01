<template>
  <div v-if="questions" class="detailQaWrap">
    <div class="qaHeader">
      상품문의 총 {{questions.length}}개
      <button class="goQaBtn" @click="goQAbtnClick">상품 문의하기</button>
    </div>
    <Entity v-for="(question,idx) in questions" :key="idx" :question="question" />
  </div>
</template>

<script>
import Entity from './qa/QAentity'

export default {
  props: ['questions'],
  components: {
    Entity
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
