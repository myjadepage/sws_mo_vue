<template>
  <div class="buyDeliveryWrap">
    <div class="buyDeliveryHeader">
      배송지 정보
      <button @click="deliveryBtnClick" class="deliveryConfigBtn">주소선택</button>
    </div>
    <div class="buyDeliveryBody">
      <div class="form-group">
        <label for="destName">배송자 이름</label>
        <input v-model="name" id="destName" type="text">
        </div>

        <div class="form-group">
        <label for="destPhone">휴대폰 번호</label>
        <input v-model="phone" id="destPhone" type="text" placeholder="“-” 없이 입력">
        </div>

        <div class="address">
        <label for="">주소</label>
        <input type="text" :value="address" disabled>
        <input type="text" :value="detailAddr" disabled>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['addresses'],
  methods: {
    deliveryBtnClick () {
      this.$emit('deliveryBtnClick')
    }
  },
  computed: {
    address () {
      if (this.$store.getters.getPostCode) {
        return this.$store.getters.getPostCode.address
      }
    },
    detailAddr () {
      if (this.$store.getters.getPostCode) {
        return this.$store.getters.getPostCode.detail
      }
    },
    name: {
      get () {
        return this.$store.getters.getDestInfo.name
      },
      set (value) {
        this.$store.commit('updateDestInfo', ['name', value])
      }
    },
    phone: {
      get () {
        return this.$store.getters.getDestInfo.phone
      },
      set (value) {
        this.$store.commit('updateDestInfo', ['phone', value])
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
  width: 70px;
  height: 30px;
  font-size: 13px;
  color: #666666;
  border: 1px solid #eeeeee;
  border-radius: 2px;
}
.buyDeliveryWrap .buyDeliveryBody .form-group{
text-align: right;
margin-bottom: 15px
}

.buyDeliveryWrap .buyDeliveryBody .address{
text-align: right;
}

.buyDeliveryWrap .buyDeliveryBody input[type="text"]{
  all: unset;
  height: 30px;
  border: 1px solid #eeeeee;
  padding-left: 5px;
  text-align: left;
  width: 66%;
}

.buyDeliveryWrap .buyDeliveryBody input[type="text"]::placeholder{
  font-size: 14px;
  font-weight: normal;
  color: #999999;
}

.buyDeliveryWrap .buyDeliveryBody .address input[type="text"]{
  margin-bottom: 5px;
  background-color: #f9f9f9;
  color: #999999;
}

.buyDeliveryWrap .buyDeliveryBody label{
text-align: left;
line-height: 30px;
float: left;
width: 73px;
font-size: 15px;
margin-right: 33px;
color: #111111;
}

.buyDeliveryWrap .buyDeliveryBody .address label{
  margin-bottom: 20px;
}

</style>
