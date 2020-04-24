<template>
  <div class="productOptionWrap" v-if="buyMode">

    <div class="selectSection" v-if="options">
    <select  @change="optionSelected" v-for="(o,idx) in optionContents" :key="o.prdtNormalOptionSysId" :name="o.name" :ref="'option'+idx">
      <option value="">{{options[idx].name}}</option>
      <option v-for="(c,idx) in o" :key="idx" :value="[c[0]+'**'+c[1]]">{{c[0]}}</option>
    </select>
    </div>

    <div class="optionListSection" v-if="$store.getters.getSelectedOptions">
      <div class="selectedOption" v-for="(item,idx) in $store.getters.getSelectedOptions" :key="idx">
        <div v-for="(o,i) in item.contentGroup" :key="i">
          <span v-if="options.legnth>0">{{options[i].name}}</span>{{o.name}}
        </div>
        <br>
        <div class="countBtnSection">
        <button class="countBtn" @click="countDecraese(idx)"><span class="ico_minus"></span></button><input @keypress.enter="countSet(idx)" @blur="countSet(idx)" class="count" type="number" min="0" max="999" :value="optionCnt(idx)">
        <button class="countBtn" @click="countIncrease(idx)"><span class="ico_plus"></span></button>
        </div>
        <div class="optionPrice">{{calcPrice(idx)|makeComma}}<span class="won">원</span> <span v-if="options.length > 0" @click="deleteOption(idx)"  class="ico_times"></span></div>
      </div>
    </div>

    <div class="addPrdtHeader" v-if="addPrdts.length">추가상품<button @click="showAP = !showAP" class="showAddPrdtsBtn">{{showAP?'&minus;':'&plus;'}}</button></div>
    <div class="selectSection" v-if="showAP">
      <select @change="addPrdtSelected(idx)"  v-for="(ap,idx) in addPrdts" :key="ap.base.prdtAddingProductSysId" :name="ap.base.itemGroup" :ref="'addPrdt'+idx">
        <option value="">{{ap.base.itemGroup}}</option>
        <option v-for="(apd,idx) in ap.details" :key="apd.prdtAddingProductDetailSysId" :value="idx">{{idx+1}}. {{apd.item}}+{{apd.price|makeComma}}원</option>
      </select>
    </div>

    <div class="optionListSection" v-if="$store.getters.getSelectedAddPrdts && showAP">
      <div class="selectedOption" v-for="(ap,idx) in $store.getters.getSelectedAddPrdts" :key="idx">
        {{ap.item}} +{{ap.price|makeComma}}원
        <br>
        <div class="countBtnSection">
        <button class="countBtn" @click="apDecrease(idx)"><span class="ico_minus"></span></button><input @keypress.enter="apCountSet(idx)" @blur="apCountSet(idx)" class="apCount" type="number" min="0" max="999" :value="addPrdtCnt(idx)">
        <button class="countBtn" @click="apIncrease(idx)"><span class="ico_plus"></span></button>
        </div>
        <div class="optionPrice">{{calcAddPrdtPrice(idx)|makeComma}}<span class="won">원</span> <span @click="deleteAddPrdt(idx)"  class="ico_times"></span></div>
      </div>
    </div>

    <div  class="totalPrice">총 상품금액 <span class="price">{{calcTotalPrice|makeComma}}</span><span class="won">원</span></div>
    </div>
</template>

<script>
export default {
  created () {
    if (this.options.length > 0) { // 옵션이 있는 상품의 경우
      for (const o of this.options) {
        let first = o.content.split(';')
        let second = []
        for (const f of first) {
          if (!f.includes('품절')) {
            second.push([f.split('^')[0], Number(f.split('^')[1])])
          }
        }
        if (o.content.includes('선택') && !second[0].includes('선택없음')) {
          second.splice(0, 0,
            ['선택없음', 0])
        }
        this.optionContents.push(second)
      }
    } else { // 옵션이 없는 상품의 경우
      let p = this.$store.getters.getProduct
      let item = {
        contentGroup: [{name: p.name, prdtNormalOptionSysId: null, price: null}],
        count: 1,
        price: p.price,
        contentName: ''
      }

      this.$store.state.selectedOptions = [item]
    }
  },
  props: ['buyMode', 'options', 'addPrdts'],
  data () {
    return {
      optionContents: [],
      showAP: false
    }
  },
  methods: {
    optionCnt (idx) {
      return this.$store.getters.getOptionCnt(idx)
    },

    addPrdtCnt (idx) {
      return this.$store.getters.getAddPrdtCnt(idx)
    },

    countDecraese (idx) {
      if (this.$store.getters.getOptionCnt(idx) > 1) {
        this.$store.commit('decreaseOptionCnt', idx)
      }
    },
    countIncrease (idx) {
      if (Number(this.$el.getElementsByClassName('count')[idx].value) >= 99) {
        return
      }

      if (this.$el.getElementsByClassName('count')[idx].value <= this.$store.getters.getProduct.stockQty) {
        this.$store.commit('increaseOptionCnt', idx)
      }
    },

    apDecrease (idx) {
      if (this.$store.getters.getAddPrdtCnt(idx) > 1) {
        this.$store.commit('decreaseAddPrdtCnt', idx)
      }
    },

    apIncrease (idx) {
      if (Number(this.$el.getElementsByClassName('apCount')[idx].value) >= 99) {
        return
      }

      if (this.$el.getElementsByClassName('apCount')[idx].value <= this.$store.getters.getSelectedAddPrdts[idx].stockQty) {
        this.$store.commit('increaseAddPrdtCnt', idx)
      }
    },

    countSet (idx) {
      if (Number(this.$el.getElementsByClassName('count')[idx].value) > 99) {
        this.$el.getElementsByClassName('count')[idx].value = 99
      }

      if (Number(this.$el.getElementsByClassName('count')[idx].value) > this.$store.getters.getProduct.stockQty) {
        this.$el.getElementsByClassName('count')[idx].value = this.$store.getters.getProduct.stockQty
      }

      if (this.$el.getElementsByClassName('count')[idx].value < 1) {
        this.$el.getElementsByClassName('count')[idx].value = 1
      }
      this.$store.commit('setOptionCnt', [idx, this.$el.getElementsByClassName('count')[idx].value])
    },

    apCountSet (idx) {
      if (Number(this.$el.getElementsByClassName('apCount')[idx].value) > 99) {
        this.$el.getElementsByClassName('apCount')[idx].value = 99
      }

      if (Number(this.$el.getElementsByClassName('apCount')[idx].value) > this.$store.getters.getProduct.stockQty) {
        this.$el.getElementsByClassName('apCount')[idx].value = this.$store.getters.getProduct.stockQty
      }

      if (this.$el.getElementsByClassName('apCount')[idx].value < 1) {
        this.$el.getElementsByClassName('apCount')[idx].value = 1
      }
      this.$store.commit('setAddPrdtCnt', [idx, this.$el.getElementsByClassName('apCount')[idx].value])
    },

    optionSelected () {
      for (let i = 0; i < this.optionContents.length; i++) { // 선택 가능한 필수옵션 모두 선택했는지 체크
        if (!this.$refs['option' + i][0].value) {
          return
        }
      }
      // 빈 옵션 아이템 객체 생성
      let item = {
        contentGroup: [], count: 1, price: 0, contentName: ''
      }

      for (let i = 0; i < this.optionContents.length; i++) { // 빈 객체에 현재 선택된 값을 주입
        let o = this.$refs['option' + i][0].value.split('**')
        item.contentGroup.push({name: o[0], prdtNormalOptionSysId: this.options[i].prdtNormalOptionSysId, price: Number(o[1])})
        item.price += Number(o[1])
      }
      item.contentGroup.forEach(c => {
        if (item.contentGroup[item.contentGroup.length - 1] === c) {
          item.contentName += ' ' + c.name
        } else {
          item.contentName += c.name
        }
      })

      for (const o of this.$store.getters.getSelectedOptions) { // 옵션 중복 체크
        if (o.contentName === item.contentName) {
          for (let i = 0; i < this.optionContents.length; i++) {
            this.$refs['option' + i][0].value = ''
          }
          return
        }
      }

      this.$store.commit('addOption', item)

      for (let i = 0; i < this.optionContents.length; i++) {
        this.$refs['option' + i][0].value = ''
      }
    },

    addPrdtSelected (idx) {
      if (!this.$refs['addPrdt' + idx][0].value) {
        return
      }

      let item = {
        prdtAddingProductSysId: this.addPrdts[idx].base.prdtAddingProductSysId,
        prdtAddingProductDetailSysId: this.addPrdts[idx].details[this.$refs['addPrdt' + idx][0].value].prdtAddingProductDetailSysId,
        addingQty: 1,
        item: this.addPrdts[idx].details[this.$refs['addPrdt' + idx][0].value].item,
        price: this.addPrdts[idx].details[this.$refs['addPrdt' + idx][0].value].price,
        isSoldout: this.addPrdts[idx].details[this.$refs['addPrdt' + idx][0].value].isSoldout,
        stockQty: this.addPrdts[idx].details[this.$refs['addPrdt' + idx][0].value].stockQty
      }

      this.$store.commit('addAddPrdt', item)
    },

    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    calcPrice (idx) {
      if (this.$store.getters.getSelectedOptions[idx].contentName) {
        return (this.$store.getters.getOptionPrice(idx) + this.$store.getters.getProduct.price) * this.$store.getters.getOptionCnt(idx)
      } else {
        return this.$store.getters.getOptionCnt(idx) * this.$store.getters.getProduct.price
      }
    },

    calcAddPrdtPrice (idx) {
      return this.$store.getters.getAddPrdtPrice(idx) * this.$store.getters.getAddPrdtCnt(idx)
    },

    deleteOption (idx) {
      this.$store.commit('deleteOption', idx)
    },

    deleteAddPrdt (idx) {
      this.$store.commit('deleteAddPrdt', idx)
    }
  },
  computed: {
    isOptionSelected () {
      return this.$store.getters.getSelectedOptionsLength === this.optionContents.length
    },
    calcTotalPrice () {
      let apPrices = 0
      if (this.addPrdts.length > 0) {
        for (const ap of this.$store.getters.getSelectedAddPrdts) {
          apPrices += ap.price * ap.addingQty
        }
      }

      if (this.options.length > 0) {
        let o = this.$store.getters.getSelectedOptions
        let val = 0
        let cnt = 0
        for (const item of o) {
          cnt += item.count
          val += (item.price + this.$store.getters.getProduct.price) * item.count
        }

        if (val) {
          return val + apPrices
        } else {
          return (this.$store.getters.getProduct.price * cnt) + apPrices
        }
      } else {
        return this.$store.getters.getProduct.price * this.$store.getters.getSelectedOptions[0].count + apPrices
      }
    }
  }

}
</script>

<style>
.productOptionWrap{
    text-align: center;
    user-select: none;
    max-height: 500px;
overflow: scroll;
}

.productOptionWrap .optionListSection{
  text-align: center;
}
.productOptionWrap select{
  padding: 10px;
  border: 1px solid #eeeeee;
  width: 90%;
  margin-bottom: 10px;
}

.productOptionWrap .selectedOption{
  margin: 0 3% 10px;
  padding: 10px;
  background-color: #eeeeee;
  /* height: 65px; */
  text-align: left;
}

.productOptionWrap .selectSection{
  margin-top: 15px;
}

.productOptionWrap .optionPrice{
  float: right;
  font-size: 18px;
  font-weight: bold;
}

.productOptionWrap .won{
  font-size: 13px;
  font-weight: normal;
}

.productOptionWrap .totalPrice{
  padding: 0 29px 15px;
  text-align: right;
}

.productOptionWrap .totalPrice .price{
  font-size: 20px;
  color: #e61754;
  margin-left: 10px;
  font-weight: bold;
}

.productOptionWrap .totalPrice .won{
  color: #e61754;
  font-size: 13px;
}

.productOptionWrap .count{
border: none;
width: 50px;
height: 100%;
text-align: center;
font-weight: bold;
}
.productOptionWrap input[type=number].count::-webkit-outer-spin-button,.productOptionWrap input[type=number].count::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}

.productOptionWrap .apCount{
border: none;
width: 50px;
height: 100%;
text-align: center;
font-weight: bold;
}
.productOptionWrap input[type=number].apCount::-webkit-outer-spin-button,.productOptionWrap input[type=number].apCount::-webkit-inner-spin-button{
  -webkit-appearance: none;
  margin: 0;
}

.productOptionWrap .countBtnSection{
  display: inline-block;
  text-align: center;
  background-color: #fff;
  width: 130px;
  height: 35px;
}

.productOptionWrap .countBtn{
  display: inline-block;
  text-align: center;
  height: 100%;
  width: 28%;
}

.productOptionWrap .ico_times{
  display: inline-block;
  background: url('../../../assets/img/ico/ico_times.png');
  background-size: 100%;
  margin-left: 10px;
  cursor: pointer;
  width: 9px;
  height: 9px;
  position: relative;
  /* top: px; */
}
.productOptionWrap .ico_plus{
  display: inline-block;
  background: url('../../../assets/img/ico/ico_plus.png');
  background-size: 100%;
  width: 10px;
  height: 10px;

}
.productOptionWrap .ico_minus{
  display: inline-block;
  background: url('../../../assets/img/ico/ico_minus.png');
  background-size: 100%;
  position: relative;
  bottom: 3px;
  width: 10px;
  height: 2px;
}

.productOptionWrap .addPrdtHeader{
  font-weight: 500;
  text-align: left;
  padding-left: 20px;
  margin-bottom: 10px;
}

.showAddPrdtsBtn{
  margin-left: 5px;
  border: 1px solid #000000;
  width: 15px;
  height: 15px;
  line-height:5px;
  border-radius: 2px;
  position: relative;
  bottom: 1px;
}

</style>
