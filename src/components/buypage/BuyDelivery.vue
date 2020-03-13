<template>
  <div class="buyDeliveryWrap">
    <!-- <div class="buyDeliveryHeader">
      배송정보
    </div>
    <div class="buyDeliveryBody">
      <table>
        <tr>
          <th>수령인</th>
          <td>{{member.name}}</td>
        </tr>
        <tr>
          <th>연락처</th>
          <td>{{member.phone}}</td>
        </tr>
        <tr>
          <th>배송지</th>
          <td>{{member.addr}}</td>
        </tr>
      </table>
    </div> -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      member: {
        name: '임동욱',
        phone: '010-1234-1234',
        addr: '서울특별시 구로구 디지털로 272 (구로동 한신아이티타워) 201호 인라이플'
      }
    }
  }
}
</script>

<style>

</style>
