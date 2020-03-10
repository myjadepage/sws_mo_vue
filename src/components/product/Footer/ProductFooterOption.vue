<template>
  <div class="productOptionWrap" v-if="false">
    <select @select="optionSelected" v-for="(o,idx) in product.normalOptions" :key="idx" ref="option">
      <option value="">{{o.name}}</option>
      <option v-for="(c, idx) in o.content" :key="idx" :value="c" >{{`0${idx+1}. ${c}`}}</option>
    </select>
    <div class="selectedOption">

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      product: {'normalOptions': [
        {
          name: '사이즈',
          content: [90, 95, 100],
          price: 29900
        },
        {
          name: '색상',
          content: ['흰색', '핑크색', '노랑', '검정'],
          price: 0
        }
      ]}
    }
  },
  methods: {
    optionSelected () {
      let option = this.$refs.option
      console.log(option.values)
    }
  }
}
</script>

<style>
.productOptionWrap{
    height: 250px;
    text-align: center;
}

.productOptionWrap select{
  padding: 10px;
  border: 1px solid #eeeeee;
  width: 90%;
  margin-bottom: 10px;
}
</style>
