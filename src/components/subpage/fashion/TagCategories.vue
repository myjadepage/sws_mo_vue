<template>
  <div class="tagCategoryWrap">
      <div class="cats">
      <span class="cat" @click="clickCat(idx)" v-for="(c,idx) in cats" :key="idx">{{c}}</span>
      </div>
      <div class="tags" >
          <span class="tag" @click="clickTag(idx)" v-for="(t,idx) in tags[selectedTag]" :key="idx">
              {{t}}
          </span>
      </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      selectedTag: 1,
      cats: ['전체', '화장품/향수', '바디/헤어', '명품화장품'],
      tags: [[], ['전체', '스킨케어', '페이스', '립', '아이', '메이크업도구'], [], []]
    }
  },
  mounted () {
    this.$el.getElementsByClassName('cat')[this.selectedTag].classList.add('selected')
  },
  methods: {
    clickCat (idx) {
      this.$el.getElementsByClassName('cat')[this.selectedTag].classList.remove('selected')
      this.selectedTag = idx
      this.$el.getElementsByClassName('cat')[this.selectedTag].classList.add('selected')
    },
    clickTag (idx) {
      if (this.$el.getElementsByClassName('tag')[idx].classList.contains('selected')) {
        this.$el.getElementsByClassName('tag')[idx].classList.remove('selected')
      } else {
        this.$el.getElementsByClassName('tag')[idx].classList.add('selected')
      }
    }
  }
}
</script>

<style>
.tagCategoryWrap .cats{
    width: 100%;
    text-align: center;
}

 .tagCategoryWrap .cat{
     display: inline-block;
     margin: 32px 0 0;
    text-align: center;
    font-size: 15px;
    cursor: pointer;
    user-select: none;
 }

.tagCategoryWrap .cat:nth-child(1){
    width: 15%;
}
.tagCategoryWrap .cat:nth-child(2){
    width: 30%;
}
.tagCategoryWrap .cat:nth-child(3){
    width: 25%;
}
.tagCategoryWrap .cat:nth-child(4){
    width: 30%;
}

 .tagCategoryWrap .cat.selected{
     font-weight: 500;
     color: #671fff;
     border-bottom: 4px solid #671fff;
 }

 .tagCategoryWrap .tags{
   user-select: none;
     height: 98px;
     padding: 16px;
     background-color:rgba(141, 97, 234, 0.05)
 }

 .tagCategoryWrap .tag{
      text-align: center;
     line-height: 34px;
     display: inline-block;
     width: 90px;
     height: 34px;
     background: #fff;
     border-radius: 17px;
     margin: 0 10px 15px 0;
 }

 .tagCategoryWrap .tag.selected{
     text-align: center;
     line-height: 34px;
     display: inline-block;
     width: 90px;
     height: 34px;
     background: #671fff;
     font-weight: 500;
     border-radius: 17px;
     color: white;
 }

 .tagCategoryWrap label{
 }
</style>
