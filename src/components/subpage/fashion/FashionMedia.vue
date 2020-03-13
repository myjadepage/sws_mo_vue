<template>
  <div class="fashionMediaWrap">
      <div class="mediaSection">
          <div class="media"><img :src="'../../static/images/'+img+'.jpg'" alt="">
          <span class="userProfile"><span class="img"></span></span>
          </div>
      </div>

    <div class="mediaInfoSection">
      <div class="mediaTitle">{{props.briefComment}}</div>
      <div class="mediaText">{{props.briefDescription}}</div>
    <div class="prdName">[{{props.brandName}}] {{props.name}}</div>
    <div class="prdPriceSection">{{props.price|makeComma}}원<span class="discount">{{props.discountRate*10}}%</span></div>
    <div class="tags"><span v-for="(t,idx) in tags" :key="idx">#{{t}}</span></div>
</div>
  </div>
</template>

<script>
export default {
  props: ['props', 'img'],
  data () {
    return {
      tags: ['메이크업신동', '코랄핑크덕후']
    }
  }
}
</script>

<style>

.fashionMediaWrap  .media{
    /* background-color: gray; */
    width: 100%;
    /* padding-top: 56.25%; */
}

.fashionMediaWrap .media img{
  width: 100%;
  height: 100%;
 /* padding-top: 56.25%; */
}

.fashionMediaWrap .userProfile{
    float: right;
    /* display: inline-block; */
    width: 32px;
    height: 32px;
    background-color: #671fff;
    position: relative;
    bottom: 330px;
    right: 50px;
    border-radius: 15px;
}

.fashionMediaWrap .mediaTitle{
    font-size: 20px;
    font-weight: 500;
}

.fashionMediaWrap .mediaText{
    margin: 5px 0 15px;
}

.fashionMediaWrap .prdPriceSection{
    font-weight: bold;
}

.fashionMediaWrap .prdName{
    color: #333333;
}

.fashionMediaWrap .prdPriceSection .discount{
    margin-left: 5px;
    color: #e3231b;
}

.fashionMediaWrap .tags{
    margin:15px 0;
}

.fashionMediaWrap .mediaInfoSection{
    padding: 10px 12px 35px;
}

.fashionMediaWrap .tags span{
    height: 25px;
    color: #671fff;
    padding: 3px;
    margin-right: 5px;
    background-color: rgba(103, 31, 255, 0.05);

}
</style>
