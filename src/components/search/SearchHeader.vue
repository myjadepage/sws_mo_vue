<template>
  <div class="searchHeaderWrap">
      <span @click="goBack" class="ico_back_arr"></span>
      <input ref="input" @focus="enFocused" @blur="unFocused"  @keydown="inputKeyPressed" @keydown.enter="clickSearchBtn" v-model="keyword" type="text" placeholder="검색어를 입력해주세요.">
      <span @click="clickSearchBtn" class="ico_search_btn"></span>
      <span v-if="keyword" @click="deleteInput" class="ico_delete_btn"></span>
      <div>
        <ul v-if="products && inputFocus" >
          <li @click="keywordClick(p)" v-for="p in products" :key="p.prdtSysId">
            {{p.briefComment}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {getProductList} from '@/api/index.js'

export default {
  created () {
    this.searchMode = this.$store.getters.getSearchCat // searchMode 1:상품 2:브랜드 3:방송
  },
  data () {
    return {
      searchMode: 0,
      keyword: '',
      products: {},
      timer: null,
      inputFocus: false
    }
  },
  methods: {
    keywordClick (p) {
      this.products = {p}
      this.clickSearchBtn()
    },

    enFocused () {
      this.$emit('inputFoucsed')
      this.inputFocus = true
    },
    unFocused () {
      this.$emit('inputOutFoucsed')
      setTimeout(() => { this.inputFocus = false }, 100)
    },

    goBack () {
      this.$router.go(-1)
    },
    deleteInput () {
      this.keyword = ''
      this.products = {}
    },
    inputKeyPressed () {
      let self = this
      if (this.keyword) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(function () {
          if (self.searchMode === 0) {
            getProductList('name=' + self.keyword).then((res) => {
              self.products = res.data.jsonData.products
            }
            ).catch((e) => console.log(e)
            )
          }
          // else if (self.searchMode === 1) {
          //   getBrandList().then((res) => {
          //     console.log(res)
          //   }
          //   ).catch((e) => console.log(e)
          //   )
          // } else if (self.searchMode === 2) {

          // }
        }, 200)
      } else {
        this.products = {}
      }
    },
    clickSearchBtn () {
      this.$emit('clickSearch', this.products)
      this.$refs.input.blur()
      this.unFocused()
    }
  }
}
</script>

<style>
.searchHeaderWrap{
    display: inline-block;
    width: 100%;
    background-color: #fff;
    height: 65px;
    line-height: 65px;
    border-bottom: 1px solid black;
}

.searchHeaderWrap .ico_back_arr{
    position: relative;
    cursor: pointer;
    top: 25px;
    left: 22px;
}

.searchHeaderWrap input{
    all: unset;
    margin-left: 30px;
    font-size: 15px;
    width: 65%;
    display: inline-block;
}

.ico_delete_btn{
    position: relative;
    float: right;
    background: url('../../assets/img/ico/delete.png');
    background-size: 100%;
    width: 18px;
    height: 18px;
    top: 25px;
    right: 40px;
}

.searchHeaderWrap input::placeholder{
    color: #cccccc;
}

.searchHeaderWrap .ico_search_btn{
    cursor: pointer;
    position: relative;
    float: right;
    background: url('../../assets/img/ico/search@3x.png');
    background-size: 100%;
    width: 21px;
    height: 16px;
    top: 25px;
    right: 22px;
}

.searchHeaderWrap ul{
  background-color:#fff;
  height: 100%;
}

.searchHeaderWrap li{
  background-color:#fff;
  margin-left: 40px;
  font-size: 15px;
  width: 100%;
  height: 45px;
}
.searchHeaderWrap li:last-child{
  height: 100%;
}
</style>
