<template>
  <div class="cartCountWrap">
      <input type="checkbox"> <label for="">전체선택 (<span class="selectCnt">{{propsdata[0]}}</span>/{{propsdata[1]}}개)</label>
  </div>
</template>

<script>
export default {
  props: ['propsdata']
}
</script>

<style>
    .cartCountWrap{
        font-size: 16px;
        font-weight: 500;
        background-color: #fff;
        margin-top: 5px;
        margin-bottom: 1px;
        padding: 23px 12px 10px;
    }

    .cartCountWrap .selectCnt{
        color: #e61754;
    }
</style>
