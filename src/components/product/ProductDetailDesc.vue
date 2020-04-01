<template>
  <div class="detailDescWrap">
    <Info v-if="selectedMenu===0" />
    <Review :reviews="reivews" v-if="selectedMenu===1" />
    <QA :questions="questions" v-if="selectedMenu===2" />
    <Delivery v-if="selectedMenu===3" />
  </div>
</template>

<script>
import {getPrdtReviewList, getPrdtQuestionList} from '@/api/index.js'
import Info from './detailDescription/DetailProductInfo'
import Review from './detailDescription/DetailReview'
import QA from './detailDescription/DetailQA'
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
    Info, Review, QA, Delivery
  },
  data () {
    return {
      reivews: [],
      questions: []
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
