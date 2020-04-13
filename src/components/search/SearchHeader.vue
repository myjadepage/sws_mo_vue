<template>
  <div class="searchHeaderWrap">
      <span @click="goBack" class="ico_back_arr"></span>
      <input ref="input" @change="inputKeyPressed" @focus="enFocused" @blur="unFocused"  @keydown="inputKeyPressed" @keydown.enter="clickSearchBtn" v-model="keyword" type="text" placeholder="검색어를 입력해주세요.">
      <span @click="clickSearchBtn" class="ico_search_btn"></span>
      <span v-if="keyword" @click="deleteInput" class="ico_delete_btn"></span>
      <div class="searchList">
        <ul v-if="cat===0 && searchResults && inputFocus" >
          <li @click="keywordClick(p)" v-for="(p,idx) in searchResults" :key="idx">
            {{p.name|shortString}}
          </li>
        </ul>
        <ul v-if="cat===1 && searchResults && inputFocus" >
          <li @click="keywordClick(p)" v-for="(p,idx) in searchResults" :key="idx">
            {{p.name|shortString}}
          </li>
        </ul>
        <ul v-if="cat===2 && searchResults && inputFocus" >
          <li @click="keywordClick(p)" v-for="(p,idx) in searchResults" :key="idx">
            {{p.title|shortString}}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
import {searchProducts, searchBrands, searchBroadcasts} from '@/api/index.js'

export default {
  props: ['cat'], // searchMode 0:상품 1:브랜드 2:방송
  data () {
    return {
      keyword: '',
      searchResults: [],
      timer: null,
      inputFocus: false
    }
  },
  watch: {
    cat () {
      this.searchResults = []
    }
  },
  methods: {
    keywordClick (p) {
      this.searchResults = {p}
      this.clickSearchBtn()
    },

    enFocused () {
      this.$emit('inputFoucsed')
      this.inputKeyPressed()
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
      this.searchResults = []
    },
    inputKeyPressed () {
      let self = this
      if (this.keyword && this.keyword !== '') {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(function () {
          if (self.cat === 0) {
            searchProducts(self.keyword)
              .then((res) => {
                console.log(res)
                self.searchResults = res.data.jsonData.products
              }
              ).catch((e) => console.log(e)
              )
          } else if (self.cat === 1) {
            searchBrands(self.keyword)
              .then((res) => {
                console.log(res)
                self.searchResults = res.data.jsonData.brands
              }
              ).catch((e) => console.log(e)
              )
          } else if (self.cat === 2) {
            searchBroadcasts(self.keyword)
              .then((res) => {
                console.log(res)
                self.searchResults = res.data.jsonData.broadcasts
              }
              ).catch((e) => console.log(e)
              )
          }
        }, 200)
      } else {
        this.searchResults = []
      }
    },
    clickSearchBtn () {
      this.$emit('clickSearch', this.searchResults)
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
}

.searchHeaderWrap li{
  background-color: #fff;
  line-height: 45px;
  cursor: pointer;
  margin-left: 40px;
  font-size: 15px;
  height: 45px;
}
.searchHeaderWrap li:hover{
  border: 1px solid gray;
}

/* .searchHeaderWrap li:last-child{
  height: 100%;
} */
</style>
