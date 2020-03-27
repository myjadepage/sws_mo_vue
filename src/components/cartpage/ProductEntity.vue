<template>
  <div class="productEntityWrap">
    <div ref="imgBox" @click="selectBtnClick" :class="isChecked?'imgBox selected':'imgBox'">
    <div class="checkBox"><span class="check"></span></div>
    <img :src="product.smallImageUrl">
    </div>
    <div class="title">[{{product.brandName}}]{{product.name}}</div>
    <div class="option" v-for="(o,idx) in product.productOptions" :key="idx">{{o.optionKeyName}}</div>
    <select :value="product.cnt" @change="prdtQtyCheck" name="" id="">
        <option value="0">0</option>
        <option v-for="x in 99" :value="x" :key="x">{{x}}</option>
    </select>
    <span class="price">{{totalPrice|makeComma}}원</span> <span class="prdPrice">{{product.price|makeComma}}</span>
    <span @click="removeBtnClick" class="ico_times removeBtn"></span>
  </div>
</template>

<script>
export default {
  props: ['product', 'index', 'isChecked'],
  data () {
    return {
      options: []
    }
  },
  computed:
    {
      totalPrice () {
        let optionPrice = 0 // 옵션 가격 정보 api로 받아와서 추가해야함

        return this.product.price - (this.product.price * this.product.discountRate) + optionPrice
      }
    },

  methods: {
    removeBtnClick () {
      this.$emit('removeItem')
    },
    selectBtnClick () {
      this.$emit('selectItem', this.index)
    },
    prdtQtyCheck (x) {
      if (this.product.isSoldout) {
        this.$emit('soldOut')
        x.target.value = '0'
      } else if (x.target.value > this.product.salesQty) {
        this.$emit('salesLimitOver')
        x.target.value = '0'
      }
    }
  }
}
</script>

<style>

.productEntityWrap{
    /* height: 135px; */
    background-color: #fff;
    margin-bottom: 1px;
    padding: 15px 12px;
}

.productEntityWrap img{
  border: 1px solid #eeeeee;
float: left;
 width: 70px;
 height: 70px;
 margin-right: 10px;
}

.productEntityWrap .option{
    margin: 5px 0 10px;
    color: #666666;
}

.productEntityWrap .price{
    font-weight: 500;
}

.productEntityWrap .prdPrice{
    font-size: 13px;
    color: #999999;
    text-decoration: line-through;
}

.productEntityWrap select{
    margin-right: 13px;
    border-radius: 2px;
    line-height: 30px;
    padding-left: 10px;
    border: 1px solid #cccccc;
    height: 30px;
    width: 50px;
}

.ico_times{
    float: right;
    background: url('../../assets/img/ico/ico_times.png');
    background-size: 100%;
    width: 11px;
    height: 11px;
}

.ico_times.removeBtn{
  position: relative;
  top: 12px;
}

.imgBox{
  position: relative;
  user-select: none;
}

.productEntityWrap .imgBox .checkBox{
  display: block;
  position: absolute;
  top: 1px;
  left:1px;
  z-index: 100;
  width: 26px;
  height: 26px;
  text-align: center;
  background-color: #fff;
}

.productEntityWrap .imgBox .check{
  display: inline-block;
  background: url('../../assets/img/ico/ico_checkbox_label_un.png');
  background-size: 100%;
  width:14px;
  height: 11px;
  position: relative;
  top: 4px;
}

.productEntityWrap .imgBox.selected .checkBox{
display: block;
position: absolute;
top: 1px;
left:1px;
z-index: 100;
width: 26px;
height: 26px;
text-align: center;
background-color: #e61754;
}

.productEntityWrap .imgBox.selected .check{
  display: inline-block;
  background: url('../../assets/img/ico/ico_checkbox_label.png');
  background-size: 100%;
  width:14px;
  height: 11px;
  position: relative;
  top: 4px;
}

</style>
