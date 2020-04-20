<template>
  <div class="completeAccountWrap">
    <div class="message">아래 내용을 확인하신 후 입금해주세요.<br>
      입금이 확인되면 주문이 정상적으로 처리됩니다.
    </div>
    <div class="accountTable">
    <table>
      <tr>
        <th>입금할 금액</th>
        <td>{{info.amount|makeComma}}원</td>
      </tr>
      <tr>
        <th>입금은행</th>
        <td>{{vbankInfo.vbank_name}}</td>
      </tr>
      <tr>
        <th>수취인</th>
        <td>{{vbankHolder}}</td>
      </tr>
      <tr>
        <th>입금계좌</th>
        <td>{{vbankInfo.vbank_num}}</td>
      </tr>
      <tr>
        <th>입금기한</th>
        <td>{{vbankInfo.vbank_date}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  props: ['info', 'vbankInfo'],
  computed: {
    vbankHolder () {
      return this.vbankInfo.vbank_holder.trim()
    }

    // vbankTerm () {
    //   // return
    // }
  }
}
</script>

<style>
.completeAccountWrap{
  background-color: #fff;
  font-size: 15px;

}

.completeAccountWrap .message{
 padding: 25px 0 15px 12px;
}

.completeAccountWrap .accountTable{
  padding: 15px 12px 25px;
}

.completeAccountWrap .accountTable table{
  border: 1px solid #eeeeee;
  width: 100%;
}

.completeAccountWrap .accountTable th{
  font-size: 15px;
  background-color: #f9f9f9;
  color: #666666;
  font-weight: normal;
  padding: 10px 20px 10px 10px;
  text-align: left;
}

.completeAccountWrap .accountTable td{
  padding-left: 10px;
  font-size: 15px;
}

</style>
