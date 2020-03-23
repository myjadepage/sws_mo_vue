<template>
  <div class="buyDeliveryWrap">
    <div class="buyDeliveryHeader">
      배송정보
      <button @click="deliveryBtnClick" class="deliveryConfigBtn">변경</button>
    </div>
    <div class="buyDeliveryBody">
      <table>
        <tr>
          <td>{{ordererInfo.name}}</td>
        </tr>
        <tr>
          <td>{{member.addr}}</td>
        </tr>
        <tr>
          <td>{{ordererInfo.phone}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['member', 'ordererInfo'],
  methods: {
    deliveryBtnClick () {
      this.$emit('deliveryBtnClick')
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
