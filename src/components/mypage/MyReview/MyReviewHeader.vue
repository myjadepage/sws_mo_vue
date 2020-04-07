<template>
<div class="myReviewHeaderWrap">
  <div v-if="tabState">
    <input :checked="isCheckAll" ref="checkAll" @click="checkAll" id="checkAll" type="checkbox"> <label for="checkAll">전체선택 (<span class="selectCnt"></span>{{selectCnt}}/{{reviews.length}}개)</label>
    <button @click="clickDeleteBtn" class="deleteBtn">선택삭제</button>
  </div>
</div>
</template>

<script>
export default {
  props: ['tabState', 'reviews', 'isCheckAll'],
  methods: {
    checkAll (x) {
      if (x.target.checked) {
        for (let i = 0; i < this.reviews.length; i++) {
          this.reviews[i].isSelected = true
        }
      } else {
        for (let i = 0; i < this.reviews.length; i++) {
          this.reviews[i].isSelected = false
        }
      }
    },
    clickDeleteBtn () {

    }
  },
  computed: {
    selectCnt () {
      let val = 0
      for (const r of this.reviews) {
        if (r.isSelected) {
          val++
        }
      }
      return val
    }
  }
}
</script>

<style>
 .myReviewHeaderWrap{
        top:50px;
        left:0;
        width:100%;
        font-size: 16px;
        font-weight: 500;
        background-color: #fff;
        margin-top: 5px;
        margin-bottom: 1px;
        padding: 0px 12px;
        line-height: 53px;
        height: 53px;
        box-sizing: border-box;
    }

    .myReviewHeaderWrap .selectCnt{
        color: #e61754;
    }

    .myReviewHeaderWrap .deleteBtn{
      position: relative;
      top: 10.5px;
      float: right;
      width: 20%;
      height: 32px;
      color: #111111;
      border-radius: 2px;
      font-size: 13px;
    }

    .myReviewHeaderWrap #checkAll{
      all: unset;
      display: inline-block;
      position: relative;
      top: 8px;
      margin-right: 10px;
      width: 26px;
      height: 26px;
      border: 1px solid #eeeeee;
    }
    .myReviewHeaderWrap #checkAll::before{
      content: '';
      display: inline-block;
      background: url('../../../assets/img/ico/ico_checkbox_label_un.png');
      background-size: 100%;
      width:14px;
      height: 11px;
      position: absolute;
      top: 8px;
      left: 6px;
    }
    .myReviewHeaderWrap #checkAll:checked{
      background-color: #e61754;
    }

    .myReviewHeaderWrap #checkAll:checked::before{
      content: '';
      display: inline-block;
      background: url('../../../assets/img/ico/ico_checkbox_label.png');
      background-size: 100%;
      width:14px;
      height: 11px;
      position: absolute;
      top: 8px;
      left: 6px;
    }
</style>
