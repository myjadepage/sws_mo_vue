<template>
  <div class="payInfoWrap">
      <div class="infoBody">
      <div class="infoTitle">
          결제 정보
      </div>
      <table>
          <tr>
              <th>상품금액</th>
              <td class="price">{{price|makeComma}}원</td>
          </tr>
          <tr>
              <th class="delivery">배송비
                <!-- <span @click="deliveryBtnClick" class="deliveryInfoBtn" >?</span> -->
                </th>
              <td class="delivery">{{deliveryPrice|makeComma}}원</td>
          </tr>
          <tr>
              <th class="totalPrice">총 결제 금액</th>
              <td class="totalPrice">{{price + deliveryPrice|makeComma}}원</td>
          </tr>
      </table>
      <div class="btnSection">
          <button @click="buySelectedItemClick" class="BuySelectBtn">선택상품 구매</button><button @click="buyAllClick" class="BuyAllBtn">전체상품 구매</button>
      </div>
      </div>
    <div class="infoFooter">
        <ul>
            <li>장바구니에 담긴 상품은 최대 30일까지 보관되며, 판매가 종료되거나 매진될 경우 자동으로 삭제됩니다.</li>
            <li>결제예정금액은 쿠폰할인 및 포인트 적용 전의 가격입니다.</li>
        </ul>
    </div>
  </div>
</template>

<script>

export default {
  props: ['products'],
  computed: {
    deliveryPrice () {
      let price = 0
      for (let i = 0; i < this.products.length; i++) {
        const product = this.products[i]
        if (product.isChecked === false) {
          continue
        }

        switch (product.deliveryPriceTypeCode) {
          case 1: price += 0
            break
          case 2: price += product.debitAmount
            break
          case 3: price += product.prepaymentAmount
            break
          case 4: price += 2500
            break
          case 5: price += 2500
            break
          default: price += 2500
            break
        }
      }
      return price
    },
    price () {
      let val = 0

      for (let i = 0; i < this.products.length; i++) {
        if (this.products[i].isChecked === false) {
          continue
        }
        val += this.products[i].totalPrice
      }
      return val
    }
  },
  methods: {
    deliveryBtnClick () {
      this.$emit('deliveryInfoBtnClick')
    },
    buySelectedItemClick () {
      this.$emit('selectedItemBuy')
    },
    buyAllClick () {
      this.$emit('allItemBuy')
    }
  }
}
</script>

<style>
.payInfoWrap{
    background-color: #fff;
}

.payInfoWrap .infoTitle{
    font-size: 16px;
    font-weight: 500;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 5px;
    margin-bottom: 15px;
}

.payInfoWrap .infoBody{
    padding: 15px 12px;
}

.payInfoWrap .infoBody th{
    font-weight: normal;
    text-align: left;
    padding-bottom: 5px;
}
.payInfoWrap .infoBody td{
    text-align: right;
}

.payInfoWrap .infoBody table{
    width: 100%;
}

.payInfoWrap .price{
    font-weight: 500;
}

.payInfoWrap .delivery{
    border-bottom: 1px solid black;
    padding-bottom: 8px;
}

.payInfoWrap .btnSection{
    text-align: center;
}

.payInfoWrap .totalPrice{
    padding-top: 8px;
    font-size: 18px;
    color: #e61754;
    font-weight: 500 !important;
}

.payInfoWrap .btnSection button{
    font-size: 15px;
    width: 48%;
    height: 50px;
    border-radius: 2px;
}

.payInfoWrap .deliveryInfoBtn{
    position: relative;
    user-select: none;
    cursor: pointer;
    bottom: 10px;
    display: inline-block;
    text-align: center;
    width: 12px;
    height: 12px;
    line-height: 12px;
    font-size: 10px;
    background-color: #666666;
    border-radius: 20px;
    color: white;

}

.payInfoWrap .btnSection{
    margin-top: 35px;
}
.payInfoWrap .btnSection button.BuySelectBtn{
    border: 1px solid #e61754;
    color: #e61754;
    margin-right: 10px;
}
.payInfoWrap .btnSection button.BuyAllBtn{
    background-color: #e61754;
    color: white;
}

.payInfoWrap .infoFooter{
  position:  relative;
  bottom: 0;
padding: 15px 12px;
color: #666666;
background-color: #f3f3f3;
}

.payInfoWrap .infoFooter ul{
    padding: 0 15px
}

.payInfoWrap .infoFooter li{
    list-style: disc;
}

</style>
