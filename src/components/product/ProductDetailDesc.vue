<template>
  <div class="detailDescWrap">
    <Info v-if="selectedMenu===0" />
    <Review :reviews="reivews" v-if="selectedMenu===1" />
    <QA @QABtnClick="QABtnClick" :questions="questions" v-if="selectedMenu===2&&!QAWriteMode" />
    <QAWrite @qaDone="qaDone" @cancelClick="QAWriteMode=false" v-if="selectedMenu===2&&QAWriteMode" />
    <Delivery v-if="selectedMenu===3" />
  </div>
</template>

<script>
import {getPrdtReviewList, getPrdtQuestionList} from '@/api/index.js'
import Info from './detailDescription/DetailProductInfo'
import Review from './detailDescription/DetailReview'
import QA from './detailDescription/DetailQA'
import QAWrite from './detailDescription/qa/QAWrite'
import Delivery from './detailDescription/DetailDelivery'

export default {
  created () {
    let id = this.$route.params.prdtSysId

    getPrdtReviewList(id)
      .then(res => {
        this.reivews = res.data.jsonData.reviews
      })
      .catch(err => {
        console.log(err)
      })

    getPrdtQuestionList(id)
      .then(res => {
        this.questions = res.data.jsonData.questions
      })
      .catch(err => {
        console.log(err)
      })
  },
  props: ['selectedMenu'],
  components: {
    Info, Review, QA, QAWrite, Delivery
  },
  data () {
    return {
      reivews: [],
      questions: [],
      QAWriteMode: false
    }
  },
  watch: {
    selectedMenu (newVal) {
      if (newVal === 2) {
        this.QAWriteMode = false
      }
    }
  },
  methods: {
    QABtnClick () {
      this.QAWriteMode = true
    },
    qaDone () {
      this.QAWriteMode = false
    }
  }
}
</script>

<style>
.detailDescWrap{
  display: inline-block;
  width: 100%;
}
</style>
