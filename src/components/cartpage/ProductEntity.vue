<template>
  <div class="productEntityWrap">
    <div class="entityBody">
      <div @click="prdtClick" class="prdtSection">
      <div :class="product.isChecked?'imgBox selected':'imgBox'">
      <div @click.stop="selectBtnClick" class="checkBox"><span class="check"></span></div>
      <img :src="product.smallImageUrl">
      </div>
      <div class="title">[{{product.brandName}}]{{product.name}}</div>
      </div>

      <div class="entityText" v-if="optionMap.size === 1">

        <div class="option" v-for="(o,idx) in product.productOptions" :key="idx">
           [옵션명{{idx+1}}] {{o.optionKeyName}}
        </div>

          <select :value="product.productOptions[0].optionQty" @change="cntChange">
            <option v-for="x in 99" :value="x" :key="x">{{x}}</option>
          </select>
        <span class="price">{{totalPrice|makeComma}}원</span> <span v-if="product.discountRate" class="prdPrice">{{product.price|makeComma}}</span>
      </div>

      <div v-if="!product.isOptionNormal">
        <select v-model="product.basketQty" @change="cntChange">
            <option v-for="x in 99" :value="x" :key="x">{{x}}</option>
          </select>
        <span class="price">{{nonOptionPrice|makeComma}}원</span> <span v-if="product.discountRate" class="prdPrice">{{originPrice|makeComma}}</span>
      </div>

        <div v-if="optionMap.size>1" class="priceSection">
          <span class="price">{{totalPrice|makeComma}}원</span> <span v-if="product.discountRate" class="prdPrice">{{product.price|makeComma}}</span>
        </div>
    </div>
    <div v-if="optionMap.size > 1">
    <OptionEntity v-for="o in optionMap" @optionCntChange="optionCntChange" :product="product" :key="o[0]" :option="o" />
    </div>

     </div>
</template>

<script>
import OptionEntity from './OptionEntity'

export default {
  components: {
    OptionEntity
  },
  created () {
    let map = new Map()
    if (this.product.isOptionNormal) {
      for (const o of this.product.productOptions) {
        if (!map.has(o.optionGroupId)) {
          map.set(o.optionGroupId, [])
        }
        map.get(o.optionGroupId).push(o)
      }
    }

    this.optionMap = map
  },
  props: ['product', 'index'],
  data () {
    return {
      optionMap: null
    }
  },
  computed:
    {
      totalPrice () {
        let prdtPrice = this.product.price - (this.product.price * this.product.discountRate)
        let val = 0

        if (this.optionMap.size > 1) {
          for (const o of this.optionMap.values()) {
            let p = 0
            for (const oo of o) {
              p += oo.price
            }

            p += prdtPrice
            p *= o[0].optionQty

            val += p
          }

          return val
        } else {
          for (const o of this.optionMap.values()) {
            val += prdtPrice
            for (const oo of o) {
              val += oo.price
            }
            val *= o[0].optionQty
          }

          return val
        }
      },

      nonOptionPrice () {
        return (this.product.price - (this.product.price * this.product.discountRate)) * this.product.basketQty
      },

      originPrice () {
        return this.product.price * this.product.basketQty
      }

    },

  beforeMount () {
    if (this.product.isOptionNormal) {
      this.$emit('prdtPrice', [this.index, this.totalPrice])
    } else {
      this.$emit('prdtPrice', [this.index, this.nonOptionPrice])
    }
  },
  beforeUpdate () {
    let map = new Map()
    if (this.product.isOptionNormal) {
      for (const o of this.product.productOptions) {
        if (!map.has(o.optionGroupId)) {
          map.set(o.optionGroupId, [])
        }
        map.get(o.optionGroupId).push(o)
      }
    }
    this.optionMap = map

    if (this.product.isOptionNormal) {
      this.$emit('prdtPrice', [this.index, this.totalPrice])
    } else {
      this.$emit('prdtPrice', [this.index, this.nonOptionPrice])
    }
  },
  beforeDestroy () {
    this.optionMap.clear()
  },
  methods: {
    selectBtnClick () {
      this.$emit('selectItem', this.index)
    },
    cntChange (x) {
      if (this.product.isOptionNormal) {
        for (let i = 0; i < this.product.productOptions.length; i++) {
          this.product.productOptions[i].optionQty = Number(x.target.value)
        }
      }
      this.$emit('sigleItemCntChange', [this.product.basketSysId, x.target.value])
    },
    optionCntChange (x) {
      this.$emit('multiOptionCntChange', [this.product.basketSysId, x])
    },
    prdtClick () {
      this.$router.push(`/product/${this.product.prdtSysId}`)
    }
  }
}
</script>

<style>

.productEntityWrap{
    background-color: #fff;
    padding: 15px 12px 0;
    margin-bottom: 5px;
}

.productEntityWrap .prdPrice{
  text-decoration: line-through;
  font-size: 13px;
  color: #999999;
}

.productEntityWrap .entityBody{
  min-height: 70px;
  margin-bottom: 1px;
  padding-bottom: 15px;
}

.productEntityWrap .entityText{
  padding-left: 80px;
}

.productEntityWrap .price{
  font-weight: 500;
}

.productEntityWrap .option{
  color: #666666;
  margin: 5px 0 0 4px;
}

.productEntityWrap img{
  border: 1px solid #eeeeee;
/* float: left; */
 width: 70px;
 height: 70px;
 margin-right: 10px;
}

.productEntityWrap .imgBox{
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

.productEntityWrap .title{
  margin-bottom: 10px;
}

.productEntityWrap select{
  display: inline-block;
  width: 50px;
  height: 30px;
  line-height: 30px;
  padding-left: 10px;
  border: 1px solid #cccccc;
  margin: 10px 13px 0 4px;
  background:url('../../assets/img/ico/arrow_down.png') 40px 50% / 13px auto no-repeat;
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
