<template>
  <div class="productOptionWrap" v-if="false">
    <select name="prdtNormalOptionSysId" id="prdtNormalOptionSysId">
      <option value="">옵션선택</option>
      <option v-for="(o,index) in product.normalOptions" :key="index" :value="o.prdtNormalOptionSysId">{{`0${index+1}. ${o.content}`}}</option>
    </select>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {'normalOptions': [
        {'prdtNormalOptionSysId': 1, 'name': '사이즈', 'content': '95, 100, 105 사이즈 판매합니다.'},
        {'prdtNormalOptionSysId': 2, 'name': '색상', 'content': '흰색, 핑크색, 노랜색, 검정색 판매합니다.'}
      ]}
    }
  }
}
</script>

<style>
.productOptionWrap{
    height: 250px;
    text-align: center;
}
</style>
