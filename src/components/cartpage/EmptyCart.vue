<template>
  <div class="emptyCartWrap">
      <span class="ico_logo_gray"></span>
      <div class="emptyMessage">
         장바구니에 담은 상품이 없습니다.<br>
        다양한 상품을 구경해 보세요.
      </div>
    <button @click="goShopBtnClick" class="goShopBtn">쇼핑하기</button>
  </div>
</template>

<script>
export default {
  methods: {
    goShopBtnClick () {
      this.$router.push('/')
    }
  }
}
</script>

<style>

.emptyCartWrap{
    padding-top: 50%;
    margin-top: 1px;
    text-align: center;
    font-size: 15px;
    color: #666666;
    background-color: #fff;
}

.emptyCartWrap .emptyMessage{
    margin: 25px 0 36px;
}

.ico_logo_gray{
    background: url('../../assets/img/ico/ico_logo_gray.png');
    background-size: 100%;
    width: 67px;
    height: 25px;
    display: inline-block;
}

.emptyCartWrap .goShopBtn{
    height: 42px;
    width: 40%;
    background-color: #e61754;
    color: white;
    font-size: 14px;
    border-radius: 2px;
}
</style>
