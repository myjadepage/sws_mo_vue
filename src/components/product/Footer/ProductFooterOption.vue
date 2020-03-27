<template>
  <div class="productOptionWrap" v-if="buyMode">
    <div class="selectSection" v-if="options">
    <select @change="optionSelected" v-for="(o,idx) in optionContents" :key="o.prdtNormalOptionSysId" :name="o.name" :ref="'option'+idx">
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

    <div  class="totalPrice">총 상품금액 <span class="price">{{calcTotalPrice|makeComma}}</span><span class="won">원</span></div>
    </div>
</template>

<script>
export default {
  created () {
    if (this.options.length) { // 옵션이 있는 상품의 경우
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
        price: p.price - (p.price * p.discountRate),
        contentName: ''
      }

      this.$store.state.selectedOptions = [item]
    }
  },
  props: ['buyMode', 'options'],
  data () {
    return {
      optionContents: [],
      isListContainsOptional: false
    }
  },
  methods: {

    optionCnt (idx) {
      return this.$store.getters.getOptionCnt(idx)
    },

    countDecraese (idx) {
      if (this.$store.getters.getOptionCnt(idx) !== 1) {
        this.$store.commit('decreaseOptionCnt', idx)
      }
    },
    countIncrease (idx) {
      this.$store.commit('increaseOptionCnt', idx)
    },
    countSet (idx) {
      this.$store.commit('setOptionCnt', [idx, this.$el.getElementsByClassName('count')[idx].value])
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
          alert('이미 선택된 옵션입니다.')
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
    formatPrice (money) {
      return (money + '').replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },

    calcPrice (idx) {
      return this.$store.getters.getOptionPrice(idx) * this.$store.getters.getOptionCnt(idx)
    },
    deleteOption (idx) {
      this.$store.commit('deleteOption', idx)
    }
  },
  computed: {
    isOptionSelected () {
      return this.$store.getters.getSelectedOptionsLength === this.optionContents.length
    },
    calcTotalPrice () {
      if (this.options.length) {
        let o = this.$store.getters.getSelectedOptions
        let val = 0
        let cnt = 0
        for (const item of o) {
          cnt += item.count
          val += (item.count * item.price)
        }

        if (val) {
          return val + (this.$store.getters.getProduct.price - (this.$store.getters.getProduct.price * this.$store.getters.getProduct.discountRate))
        } else {
          return (this.$store.getters.getProduct.price - (this.$store.getters.getProduct.price * this.$store.getters.getProduct.discountRate)) * cnt
        }
      } else {
        return (this.$store.getters.getProduct.price - (this.$store.getters.getProduct.price * this.$store.getters.getProduct.discountRate)) * this.$store.getters.getSelectedOptions[0].count
      }
    }
  }

}
</script>

<style>
.productOptionWrap{
    /* display: inline-block; */
    height: fit-content;
    text-align: center;
    user-select: none;
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
  top: 10px;
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

</style>
