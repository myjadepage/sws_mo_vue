<template>
  <div class="qaEntityWrap">
      <div class="dateAndWriter">
          <span class="date">{{questionDate}}</span> {{question.userId}}
      </div>
      <div class="qaBody" @click="entityClick">
        <span v-if="!qaVisibility" class="title">{{title}}</span>
        <span :class="question.treatFlag===0?'status':'status complete'">{{question.treatFlag===0?'답변대기':'답변완료'}}</span>
        <div v-if="qaVisibility" class="qaContent">
            <div class="contentTitle">상품문의</div>
            {{question.content}}
        </div>

        <div v-if="qaVisibility && question.answer" class="replyBody">
          <div class="contentTitle">답변</div>
            {{question.answer}}
        </div>
      </div>
  </div>
</template>

<script>
export default {
  props: ['question'],
  methods: {
    entityClick () {
      this.qaVisibility = !this.qaVisibility
    }
  },
  data () {
    return {
      qaVisibility: false
    }
  },
  computed: {
    title () {
      if (this.question.content.length > 30) {
        return this.question.content.replace(this.question.content.substring(29), '...')
      } else {
        return this.question.content
      }
    },
    questionDate () {
      let date = this.question.createdAt.replace(this.question.createdAt.substr(8, this.question.createdAt.length), '').split('')
      date.splice(4, 0, '.')
      date.splice(7, 0, '.')
      return date.join('')
    }
  }
}
</script>

<style>
.qaEntityWrap{
    padding: 18px 12px 15px;
    border-top: 1px solid #eeeeee;
}

.qaEntityWrap .dateAndWriter{
    font-size: 13px;
    color:#666666;
    margin-bottom: 10px;
}

.qaEntityWrap .dateAndWriter .date{
    font-family: Roboto;
}

.qaEntityWrap .qaBody .status{
    float: right;
    font-weight: 500;
}

.qaEntityWrap .qaBody .status.complete{
    color: #e61754;
}

.qaEntityWrap .replyBody{
    margin-top: 15px;
}

.qaEntityWrap .qaBody .replyBody .contentTitle{
  color: #e61754;
}
.qaEntityWrap .qaBody .contentTitle{
  font-size: 15px;
  font-weight: 500;
}

</style>
