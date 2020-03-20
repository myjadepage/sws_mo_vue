<template>
  <div class="ordererInfoWrap">
      <div class="ordererHeader">
          주문인 정보
      </div>
        <div class="buyDeliveryBody">
      <table v-if="member.name">
        <tr>
          <!-- <td>{{name}}</td> -->
        </tr>
        <tr>
          <td></td>
        </tr>
        <tr>
          <td></td>
        </tr>
      </table>
      <button>주문인 정보를 입력 해주세요.</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member']
}
</script>

<style>
.ordererInfoWrap{
   margin-top: 5px;
  background-color: #fff;
  padding: 17px 12px 15px;
}
.ordererInfoWrap .ordererHeader{
 font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}
</style>
