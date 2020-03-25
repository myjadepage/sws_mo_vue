<template>
  <div class="qaEntityWrap">
      <div class="dateAndWriter">
          <span class="date">{{qa.date}}</span> {{qa.writer}}
      </div>
      <div class="qaBody" @click="entityClick">
        <span class="title">{{qa.title}}</span>
        <span :class="qa.status===0?'status':'status complete'">{{qa.status===0?'답변대기':'답변완료'}}</span>
        <div v-if="qaVisibility" class="qaContent">
            {{qa.content}}
        </div>

        <!-- <div v-if="" class="replyBody">
            {{qa.reply}}
        </div> -->
      </div>
  </div>
</template>

<script>
export default {
  props: ['qa'],
  methods: {
    entityClick () {
      this.qaVisibility = !this.qaVisibility
    }
  },
  data () {
    return {
      qaVisibility: false
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

</style>
