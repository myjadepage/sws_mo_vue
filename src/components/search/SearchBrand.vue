<template>
  <div class="searchBrandWrap">
      <img :src="brand.imageUrl" alt="브랜드 이미지"><span class="name">{{brand.name}}</span>
      <button>팔로우</button>
  </div>
</template>

<script>
export default {
  props: ['brand']
}
</script>

<style>
    .searchBrandWrap{
        color: #111111;
        padding: 15px 12px;
        background-color: #fff;
    }

    .searchBrandWrap .name{
        display: inline-block;
        position: relative;
        bottom: 15px;
    }

    .searchBrandWrap img{
        display: inline-block;
        width: 45px;
        height: 45px;
        border-radius: 100px;
        margin-right: 10px;
    }

    .searchBrandWrap button{
        float: right;
        border: 1px solid #e61754;
        color: #e61754;
        width: 70px;
        height: 28px;
        border-radius: 14px;
        position: relative;
        top: 10px;
    }
</style>
