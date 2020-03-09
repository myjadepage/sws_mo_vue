<template>
<div class="detailInfoWrap">
   <div ref="descSection" :style="maxHeight" class="descSection">
     <div class="testImg">
     </div>
   </div>
    <div class="spreadDetail">
      <button @click="clickSpread">{{btnText}}</button>
      <!-- <button @click="clickSpread">상세 정보 펼쳐보기</button> -->
    </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      maxHeight: 'maxHeight:1200px;',
      btnText: '상세 정보 펼쳐보기'
    }
  },
  methods: {
    clickSpread () {
      if (this.maxHeight === 'maxHeight:fit-content;') {
        this.maxHeight = 'maxHeight:1200px;'
        this.btnText = '상세 정보 펼쳐보기'
      } else {
        this.maxHeight = 'maxHeight:fit-content;'
        this.btnText = '상세 정보 접기'
      }
    }
  }
}
</script>

<style>
    .descSection{
        display: inline-block;
        background-color: lightblue;
        width: 100%;
        margin: 20px 0 ;
        text-align: center;
        overflow: hidden;
        }

      .descSection .testImg{
        display: inline-block;
        width: 50%;
        background-color: cadetblue;
        margin: 50px 0;
        height: 1500px;
      }

    .spreadDetail{
      padding: 0 15px 0;
      height: 95px;
      text-align: center;
    }

    .spreadDetail button{
      width: 95%;
      height: 44px;
      border: 1px solid #e61754;
      color: #e61754;
      font-size: 15px;
    }
</style>
