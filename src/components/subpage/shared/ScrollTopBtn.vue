<template>
  <div @click="goTop" class="scrollTop">
    <span class="ico_top_arr"></span>
  </div>
</template>

<script>
export default {
  methods: {
    goTop () {
      window.scrollTo(0, 0)
    }
  }
}
</script>

<style>
    .scrollTop{
        text-align: center;
        background-color: #fff;
        display: inline-block;
        position: fixed;
        top: 90%;
        left: 80%;
        border:1px solid #cccccc;
        border-radius: 30px;
        width: 45px;
        height: 45px;
        line-height: 60px;
    }

    .scrollTop .ico_top_arr{
      display: inline-block;
      background: url('../../../assets/img/ico/ico_top_arr.png');
      background-size: 100%;
      width: 20px;
      height: 25px;
    }
</style>
