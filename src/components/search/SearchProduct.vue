<template>
  <div class="searchProductWrap">
    <div ref="img" class="img">
      <img :src="product.smallImageUrl" alt="">
    </div>
    <div class="title">
      <router-link :to="'/product/'+product.prdtSysId">
      [{{product.brandName}}] {{product.name}}
      </router-link>
    </div>
    <div class="price">
     <span class="discount">{{product.discountRate * 100}}%</span>
     <span class="totalPrice">{{product.price - (product.price * product.discountRate) | makeComma}}원</span>
     <span class="p_price">{{product.price|makeComma}}</span>
    </div>
    <div class="p_info">
      <span class="info"><span class="ico ico_rates_star"></span>{{rate}}</span>
      <span class="info"><span class="ico ico_likes"></span>{{like}}</span>
      <span class="info"><span class="ico ico_comments"></span>{{comments}}</span>
    </div>
    <footer>
      <span v-if="deliveryPriceTypeCode===1" class="delivery">무료배송</span>
      <span v-if="pointRate" class="point">{{pointRate*10}}%적립</span>
      <span v-if="!hasCart" @click="clickCart" class="ico_uncart"></span>
      <span v-if="hasCart" @click="clickCart" class="ico_cart"></span>
      <span v-if="!hasLike" @click="clickLike" class="ico_unlike_search"></span>
      <span v-if="hasLike" @click="clickLike"  class="ico_like_search"></span>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['product'],
  data () {
    return {
      rate: 4.5,
      like: 2343,
      comments: 232,
      deliveryPriceTypeCode: 1,
      pointRate: 0.5,
      hasCart: true,
      hasLike: true
    }
  },
  methods: {
    clickCart () {
      this.hasCart = !this.hasCart
    },
    clickLike () {
      this.hasLike = !this.hasLike
    }
  }
}
</script>

<style>
  .searchProductWrap{
     /* height: 163px; */
     margin-bottom: 6px;
     padding:  15px 0 1px;
     background-color: #fff;
}

.searchProductWrap .price{
  margin: 5px 0 11px 0;
}

  .searchProductWrap img{
    background-color: lightcoral;
    width: 70px;
    height:70px;
    margin: 0 10px 30px 12px;
    float: left;
  }

  .searchProductWrap .discount{
    color: #e61754;
    font-weight: bold;
  }

  .searchProductWrap .totalPrice{
    font-weight: 500;
  }

  .searchProductWrap .p_price{
    font-size: 13px;
    color: #999999;
    text-decoration: line-through;
  }

  .searchProductWrap .p_info{
    font-size: 12px;
    color: #999999;
  }

  .ico_rates_star{
    background: url('../../assets/img/ico/rates.png');
    background-size: 100%;
    display: inline-block;
    width: 13px;
    margin-right: 1px;
    height: 13px;
    position: relative;
    top: 1px;
  }
  .ico_likes{
    background: url('../../assets/img/ico/like.png');
    background-size: 100%;
    display: inline-block;
    width: 14px;
    height: 13px;
    margin-right: 1px;
    position: relative;
    top: 2px;
  }
  .ico_comments{
    background: url('../../assets/img/ico/comment.png');
    background-size: 100%;
    display: inline-block;
    width: 12px;
    height: 13px;
    margin-right: 1px;
    position: relative;
    top: 2px;
  }

  .searchProductWrap .ico_cart{
    cursor: pointer;
    margin: 0 22px 0 30px;
     background: url('../../assets/img/ico/cart.png');
     float: right;
    background-size: 100%;
    width: 17px;
    height: 20px;
  }
  .searchProductWrap .ico_uncart{
    cursor: pointer;
    margin: 0 22px 0 30px;
    background: url('../../assets/img/ico/uncart.png');
    background-size: 100%;
     float: right;
    width: 17px;
    height: 20px;
  }
  .searchProductWrap .ico_like_search{
    cursor: pointer;
     background: url('../../assets/img/ico/ico_like_search.png');
     float: right;
    background-size: 100%;
    width: 19px;
    height: 17px;
  }
  .searchProductWrap .ico_unlike_search{
    cursor: pointer;
    background: url('../../assets/img/ico/ico_unlike_search.png');
    background-size: 100%;
     float: right;
    width: 19px;
    height: 17px;
  }

  .searchProductWrap .info{
    margin-right: 15px;
  }

  .searchProductWrap footer{
    margin: 16px 0 10px;
    padding: 10px 12px 0;
    border-top: 1px solid #f3f3f3;
  }

  .searchProductWrap .delivery,.searchProductWrap .point{
   font-size: 12px;
   font-weight: 500;
   border-radius: 2px;
   margin-right: 5px;
   padding: 3px;
  }

  .searchProductWrap .delivery{
    color:  #e61754;
    border: 1px solid #e61754;
  }

  .searchProductWrap .point{
    border: 1px solid black;
  }

</style>
