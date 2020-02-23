<template>
  <div class="section_ITEM">
            <div class="box_recomm_item box_recomm_item_has_sold">
                <a href="/" id="1337565"  class="link_goods">
                    <img class="thumb_img_holder" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAoAAAAHCAQMAAABFe+qaAAAAA1BMVEXw8fM7rT1QAAAAOklEQVR42u3BMQEAAADCIPuntsROYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAARA6OYgABBjukPwAAAABJRU5ErkJggg==" alt="">
                    <img src="//mud-kage.kakaocdn.net/dn/gEca0/bIcBkylg70W/Inl7c7c71y6iLcrkd7LgWK/img.jpg?convert=crop&amp;w=640&amp;h=450" class="thumb_img">
                </a>
                <div class="goods_recomm">
                    <div class="wrap_badge"></div>
                    <a href="/" class="link_goods">
                        <strong class="tit_goods">깨지지 않는 아이 컬러 팔레트</strong>
                        <span class="txt_goods">말랑말랑한 점토 제형으로 떨어뜨려도 부서지지 않고 가루 날림이 없습니다. 밀착력이 뛰어난 하이픽스 타입이어서 오래도록 처음 모습 그대로 유지됩니다. 활용도가 높은 컬러만 골라 담았습니다.</span>
                    </a>
                    <span class="condition_order">
                        <span class="num_condition">1,004</span>명이 주문중입니다.
                    </span>
                    <div class="like_goods">
                        <button type="button" class="btn_like" >
                            <span class="ico_makers ico-like">좋아요</span>
                            <span class="cnt-like-item">2,716명</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
  name: 'Item'
}
</script>

<style scope>
.box_recomm_item .link_goods{position:relative;display:block;overflow:hidden}
.box_recomm_item .link_goods .thumb_img{position:absolute;top:0;left:0}
.box_recomm_item .goods_recomm{position:relative;padding:19px 15px 0}
.box_recomm_item .goods_recomm .tit_goods{display:block;position:relative;margin-right:12%;font-size:27px;word-break:keep-all;line-height:1.3;color:#1a1a1a;font-weight:700}
.box_recomm_item .goods_recomm .txt_goods{display:block;margin-top:8px;font-size:16px;color:#1a1a1a;word-wrap:break-word;word-break:keep-all;line-height:1.5}
.box_recomm_item.box_recomm_item_has_not_sold .condition_order{display:none}
.condition_order{display:block;margin-top:18px;font-weight:600;color:#db635d;line-height:1.17;letter-spacing:.5px}
.like_goods{overflow:hidden;margin-top:18px}
.like_goods .btn_like{position:relative;display:inline-block;padding:14px 16px 12px 42px;border:1px solid #ebebeb;font-weight:700;font-size:12px;color:#4a4a4a;line-height:1em;background-color:#ffffff}
.like_goods .btn_like .ico-like{position:absolute;top:9px;left:16px;background-image:url(//t1.daumcdn.net/makers/static/web/item/sprite-small-min.png);display:inline-block;width:21px;height:19px;background-size:21px auto;background-position:0 -19px;background-repeat:no-repeat;font-size:0;text-indent:-9999px;line-height:0;overflow:hidden;-webkit-transform:scale(0.86);transform:scale(0.86)}
.like_goods .btn_like.on .ico-like{margin-top:1px;margin-left:1px;background-position:0 0}
.list_goods .btn_like .ico-product{background-image:url(//t1.daumcdn.net/makers/static/web/item/sprite-small-min.png);position:relative;display:inline-block;width:21px;height:18px;background-size:21px auto;background-position:0 -20px;background-repeat:no-repeat;font-size:0;text-indent:-9999px;line-height:0;vertical-align:top;overflow:hidden}
.list_goods .btn_like.on .ico-product{top:1px;left:1px;background-position:0 0}
</style>
