<template>
  <div class="detailDestWrap">
    <div class="destHeader">
      배송지 정보
    </div>
    <div class="destBody">
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
.detailDestWrap{
  font-family: "Noto Sans KR";
  margin-top: 5px;
  background-color: white;
  padding: 15px 12px;
}

.detailDestWrap .destHeader{
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 1px solid #eeeeee;
}

.detailDestWrap .destBody{
  margin: 15px 0 0 0;
}

.detailDestWrap .destBody th{
  width: 39px;
  color:#666666;
  font-weight: normal;
  font-size: 14px;
  padding-right: 23px;
}
.detailDestWrap .destBody td{
  font-size: 14px;
}
</style>
