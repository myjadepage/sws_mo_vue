<template>
  <div class="searchBrandWrap">
      <img :src="brand.imageUrl" alt="브랜드 이미지"><span class="name">{{brand.name}}</span>
      <button :class="isFallow?'unactive':'active'" @click="fallowBtnClick">{{title}}</button>
  </div>
</template>

<script>
export default {
  props: ['brand'],
  data () {
    return {
      isFallow: true,
      title: '팔로우'
    }
  },
  methods: {
    fallowBtnClick () {
      this.isFallow = !this.isFallow
      this.title = this.isFallow ? '팔로우' : '팔로잉'
    }
  }
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
        width: 70px;
        height: 28px;
        border-radius: 14px;
        position: relative;
        top: 10px;
    }
    .searchBrandWrap button.unactive{
        border: 1px solid #e61754;
        color: #e61754;
    }

    .searchBrandWrap button.active{
        border: 1px solid #cccccc;
        color: #666666;
    }
</style>
