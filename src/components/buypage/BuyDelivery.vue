<template>
  <div class="buyDeliveryWrap">
    <div class="buyDeliveryHeader">
      배송정보
      <button class="deliveryConfigBtn">변경</button>
    </div>
    <div class="buyDeliveryBody">
      <table>
        <tr>
          <td>{{member.name}}</td>
        </tr>
        <tr>
          <td>{{member.addr}}</td>
        </tr>
        <tr>
          <td>{{member.phone}}</td>
        </tr>
      </table>
    </div>
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
.buyDeliveryWrap{
  margin-top: 5px;
  background-color: #fff;
  padding: 17px 12px 15px;
}

.buyDeliveryWrap .buyDeliveryHeader{
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}

.buyDeliveryWrap .buyDeliveryHeader button{
  float: right;
  width: 50px;
  height: 30px;
  font-size: 13px;
  color: #666666;
  border: 1px solid #eeeeee;
  border-radius: 2px;
}

.buyDeliveryWrap .buyDeliveryBody table{
  width: 100%;
}

.buyDeliveryWrap .buyDeliveryBody td{
  font-size: 15px;
}
</style>
