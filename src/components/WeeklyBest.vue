<template>
  <div class="section_ITEM">
    <h4>Weekly Best</h4>
    <div class="box_best_item">
        <a href="/" class="link_goods">
            <img class="thumb_img_holder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHCAQMAAABFe+qaAAAAA1BMVEXw8fM7rT1QAAAAOklEQVR42u3BMQEAAADCIPuntsROYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARA6OYgABBjukPwAAAABJRU5ErkJggg==" alt="">
            <img src="//mud-kage.kakaocdn.net/dn/gEca0/bIcBkylg70W/Inl7c7c71y6iLcrkd7LgWK/img.jpg?convert=crop&amp;w=640&amp;h=450" class="thumb_img">
        </a>
        <div class="goods_best">
            <a href="/" class="link_goods">
                <span class="tit_goods">깨지지 않는 아이 컬러 팔레트</span>
                <span class="txt_goods">당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디숍을 만나보세요.</span>
            </a>
            <span class="condition_order">
                <span class="num_condition">[보타니스트]</span>보태니컬 바 스킨숍
            </span>
            <div class="item_price">
                <strong>12,500원</strong>
                <span class="discount">25%</span>
            </div>
        </div>
    </div>

    <div class="box_best_item">
        <a href="/" class="link_goods">
            <img class="thumb_img_holder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHCAQMAAABFe+qaAAAAA1BMVEXw8fM7rT1QAAAAOklEQVR42u3BMQEAAADCIPuntsROYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARA6OYgABBjukPwAAAABJRU5ErkJggg==" alt="">
            <img src="//mud-kage.kakaocdn.net/dn/gEca0/bIcBkylg70W/Inl7c7c71y6iLcrkd7LgWK/img.jpg?convert=crop&amp;w=640&amp;h=450" class="thumb_img">
        </a>
        <div class="goods_best">
            <a href="/" class="link_goods">
                <span class="tit_goods">깨지지 않는 아이 컬러 팔레트</span>
                <span class="txt_goods">당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디숍을 만나보세요.</span>
            </a>
            <span class="condition_order">
                <span class="num_condition">[보타니스트]</span>보태니컬 바 스킨숍
            </span>
            <div class="item_price">
                <strong>12,500원</strong>
                <span class="discount">25%</span>
            </div>
        </div>
    </div>

    <div class="box_best_item">
        <a href="/" class="link_goods">
            <img class="thumb_img_holder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHCAQMAAABFe+qaAAAAA1BMVEXw8fM7rT1QAAAAOklEQVR42u3BMQEAAADCIPuntsROYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARA6OYgABBjukPwAAAABJRU5ErkJggg==" alt="">
            <img src="//mud-kage.kakaocdn.net/dn/gEca0/bIcBkylg70W/Inl7c7c71y6iLcrkd7LgWK/img.jpg?convert=crop&amp;w=640&amp;h=450" class="thumb_img">
        </a>
        <div class="goods_best">
            <a href="/" class="link_goods">
                <span class="tit_goods">깨지지 않는 아이 컬러 팔레트</span>
                <span class="txt_goods">당신의 삶의 질을 높여 줄 착한 성분으로 더 예쁜 바디숍을 만나보세요.</span>
            </a>
            <span class="condition_order">
                <span class="num_condition">[보타니스트]</span>보태니컬 바 스킨숍
            </span>
            <div class="item_price">
                <strong>12,500원</strong>
                <span class="discount">25%</span>
            </div>
        </div>
    </div>
   </div>
</template>

<script>
export default {
  name: 'WeeklyBest'
}
</script>

<style scope>
.section_ITEM h4{display: block;
    margin:7% 0 3% 5%;
    font-size: 20px;
    word-break: keep-all;
    line-height: 1.3;
    color: #1a1a1a;
    font-weight: 700;}
.box_best_item{padding-bottom: 50px;}
.box_best_item .link_goods{position:relative;display:block;overflow:hidden}
.box_best_item .link_goods .thumb_img{position:absolute;top:0;left:0}
.box_best_item .goods_best{position:relative;padding:19px 15px 0}
.box_best_item .goods_best .tit_goods{display:block;position:relative;margin-right:12%;font-size:27px;word-break:keep-all;line-height:1.3;color:#1a1a1a;}
.box_best_item .goods_best .txt_goods{display:block;margin-top:8px;font-size:16px;color:#1a1a1a;word-wrap:break-word;word-break:keep-all;line-height:1.5}
.condition_order{display:block;margin-top:18px;font-weight:600;line-height:1.17;letter-spacing:.5px}
.item_price{overflow:hidden;margin-top:5px}
.item_price .discount{color: red;}
</style>
