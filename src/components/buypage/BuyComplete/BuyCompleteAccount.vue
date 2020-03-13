<template>
  <div class="completeAccountWrap">
    <div class="message">아래 내용을 확인하신 후 입금해주세요.<br>
      입금이 확인되면 주문이 정상적으로 처리됩니다.
    </div>
    <div class="accountTable">
    <table>
      <tr>
        <th>입금할 금액</th>
        <td>{{accountInfo.price|makeComma}}원</td>
      </tr>
      <tr>
        <th>입금은행</th>
        <td>{{accountInfo.bank}}</td>
      </tr>
      <tr>
        <th>수취인</th>
        <td>{{accountInfo.receiver}}</td>
      </tr>
      <tr>
        <th>입금계좌</th>
        <td>{{accountInfo.account}}</td>
      </tr>
      <tr>
        <th>입금기한</th>
        <td>{{TermInfo}}</td>
      </tr>
    </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      accountInfo: {
        price: 34900,
        bank: '국민은행',
        receiver: '쉘위샵',
        account: '1111-1111-1111-1111',
        termDate: '2020.01.31',
        termTime: '23:59'
      }
    }
  },
  computed: {
    TermInfo () {
      let date = this.accountInfo.termDate.split('.')
      let time = this.accountInfo.termTime.split(':')

      let val = `${date[0]}년 ${date[1]}월 ${date[2]}일 ${time[0]}시 ${time[1]}분까지`
      return val
    }
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
  background-color: #eeeeee;
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
