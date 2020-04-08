<template>
<div class="itemList" >

  <div class="itemList">
    <ul>
      <li class="item">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state c_them">배송완료</p>
        </div>
        <div class="itemMeta">
          <p class="orderNum">주문번호:12345678</p>
        </div>
        <div class="itemBody">
          <div class="imgBox" :style="{backgroundImage:'url('+ product.smallImageUrl +')', backgroundSize:'cover', backgroundPosition:'50%', backgroundRepeat:'no-repeat'}"></div>
          <router-link to="/tracking/detail" class="txtBox">
            <h2 class="itemTitle">[{{product.brandName}}] {{product.name}}</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </router-link>
          <div class="row ibBtns" >
            <router-link to="/Tracking" class="btn_them border col3 btn-first">배송조회</router-link>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>

</template>

<script>
export default {
  props: ['product'],
  name: 'DetailItem'
}
</script>

<style>

</style>
