<template>

  <div class="itemList">
    <ul>
      <li class="item">
        <div class="itemHead">
          <p class="date">2019.03.15 18:43</p>
          <p class="state c_them">취소완료</p>
        </div>
        <div class="itemMeta">
          <p class="orderNum">주문번호:12345678</p>
          <p class="metaDate">취소요청일:2019.12.31 21:40</p>
        </div>
        <div class="itemBody">
          <div class="imgBox"></div>
          <!-- 환불완료시 txtBox에 .chngFin 붙여주면 됨 -->
          <a href="/tracking/detail" class="txtBox">
            <h2 class="itemTitle">[헤라] 센슈얼 립 세럼 글로우1호 + 클렌징 오일 정품 50ml 추가증정</h2>
            <p class="itemOption">[옵션명1] LRS200007G 작은원석 [원석컬러] 06일 라벤더</p>
          </a>
          <!-- <div class="itemAmount">
            <p class="price">32,500원</p>
          </div> -->
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
export default {
  data () {
    return {
      product: {}
    }
  }
}
</script>

<style>

</style>
