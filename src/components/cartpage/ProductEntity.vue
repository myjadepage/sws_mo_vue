<template>
  <div class="productEntityWrap">
    <div ref="imgBox" @click="selectBtnClick" :class="isChecked?'imgBox selected':'imgBox'">
    <div class="checkBox"><span class="check"></span></div>
    <img :src="product.smallImageUrl">
    </div>
    <div class="entityBody">
    <div class="title">[{{product.brandName}}]{{product.name}}</div>
    <div v-if="cartItem.isOptionNormal">
    <div class="option" v-for="(o,idx) in cartItem.productOptions" :key="idx">
      {{o.optionKeyName}}
      <!-- <div v-for="(c,idx) in o.productOptions" :key="idx">{{c.optionKeyName}}</div> -->
    </div>
    </div>
    <select ref="prdtCnt" :value="prdtCnt" @change="prdtQtyCheck">
        <option value="0">0</option>
        <option v-for="x in 99" :value="x" :key="x">{{x}}</option>
    </select>
    <span class="price">{{totalPrice|makeComma}}원</span> <span v-if="product.discountRate" class="prdPrice">{{product.price|makeComma}}</span>
    <span @click="removeBtnClick" class="ico_times removeBtn"></span>
    </div>
  </div>
</template>

<script>
export default {
  created () {
    for (const o of this.product.normalOptions) {
      this.options.push(o.content.split(';'))
    }

    for (let i = 0; i < this.options.length; i++) {
      const o = this.options[i]
      for (let oo of o) {
        oo = oo.split('^')

        if (this.cartItem.productOptions) {
          for (const og of this.cartItem.productOptions) {
            if (oo[0] === og.optionKeyName) {
              this.optionPrice += Number(oo[1])
            }
          }
        }
      }
    }

    this.$store.commit('addcartItemOptionPrice', this.optionPrice)
  },
  props: ['product', 'index', 'isChecked', 'cartItem'],
  data () {
    return {
      options: [],
      optionPrice: 0
    }
  },
  computed:
    {
      totalPrice () {
        return this.product.price - (this.product.price * this.product.discountRate) + this.optionPrice
      },
      prdtCnt () {
        if (this.cartItem.basketQty) {
          return this.cartItem.basketQty
        } else {
          let cnt = 0
          for (const o of this.cartItem.productOptions) {
            cnt += o.optionQty
          }
          return cnt
        }
      }
    },

  methods: {
    removeBtnClick () {
      this.$emit('removeItem', this.index)
    },
    selectBtnClick () {
      this.$emit('selectItem', this.index)
    },
    prdtQtyCheck (x) {
      // if (this.product.isSoldout) {
      //   this.$emit('soldOut', this.index)
      //   x.target.value = '0'
      // } else if (x.target.value > this.product.salesQty) {
      //   this.$emit('salesLimitOver', this.index)
      //   x.target.value = '0'
      // }

      if (this.$store.state.isLogin) {
        this.$emit('prdtCntChange', [this.cartItem.basketSysId, this.index, this.$refs.prdtCnt.value])
      } else {
        this.$emit('prdtCntChange', [this.index, this.$refs.prdtCnt.value])
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

.productEntityWrap .entityBody{
  margin-left: 80px;
}

.productEntityWrap img{
  border: 1px solid #eeeeee;
/* float: left; */
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
  float: left;
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
