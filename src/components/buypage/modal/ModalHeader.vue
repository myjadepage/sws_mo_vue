<template>
  <div class="modalHeader">
      {{title}}
  <span @click="closeBtnClick" class="modalCloseBtn"></span>
  </div>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    closeBtnClick () {
      this.$emit('modalClose')
    }
  }
}
</script>

<style>
  .modalHeader{
    text-align: center;
    line-height: 50px;
    height: 50px;
    background-color: #fff;
    font-size: 16px;
  }

  .modalHeader .modalCloseBtn{
    position: relative;
    top: 18px;
    right: 24px;
    float: right;
    background: url('../../../assets/img/ico/ico_times_black.png');
    background-size: 100%;
    width: 14px;
    height: 14px;
  }
</style>
