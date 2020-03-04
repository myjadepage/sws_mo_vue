<template>
  <div class="detailPayWrap">
    <div class="payHeader">결제정보</div>
    <div class="payBody">
      <div class="payPrice">
        <table>
          <tr>
            <th class="mainPrice">상품금액</th>
            <td></td>
          </tr>
          <tr>
            <th>배송비</th>
            <td></td>
          </tr>
        </table>
      </div>
      <div class="discountPrice">
        <table>
          <tr>
            <th>총 할인금액</th>
            <td></td>
          </tr>
          <tr>
            <th>할인쿠폰</th>
            <td></td>
          </tr>
          <tr class="pointCell">
            <th>포인트사용</th>
            <td></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="payFooter">
      <table>
        <tr>
          <th>총 결제 금액</th>
          <td></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style>
.detailPayWrap{
  font-family: "Noto Sans KR";
  height: 293px;
  margin-top: 5px;
  background-color: white;
  padding:15px 12px;
}

.detailPayWrap .payHeader{
  font-size: 16px;
  font-weight: 500;
  padding-bottom: 4px;
  border-bottom: 1px solid #eeeeee;
}

.detailPayWrap .payPrice{
  margin: 15px 0 7px 0;
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 8px;
}

.detailPayWrap .discountPrice{
  border-bottom: 1px solid #eeeeee;
  padding-bottom: 8px;
}

.detailPayWrap .pointCell{

}

.detailPayWrap .payPrice th, .discountPrice th{
  font-weight: normal;
  font-size: 14px;
}
.detailPayWrap .payPrice td, .discountPrice td{
  font-size: 14px;
  text-align: right;
}

</style>
