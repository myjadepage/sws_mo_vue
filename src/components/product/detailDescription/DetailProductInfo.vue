<template>
<div class="detailInfoWrap">
   <div class="descSection"></div>
    <div class="spreadDetail">
      <button>상세 정보 펼쳐보기</button>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.descSection{
        display: inline-block;
        background-color: lightblue;
        width: 100%;
        margin: 20px 0 ;
        height: 1200px;
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
