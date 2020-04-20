<template>
  <div class="buyDeliveryWrap">
    <div class="buyDeliveryHeader">
      배송지 정보 <span v-if="isDefaultAddr" class="defaultAddrBadge">기본배송지</span>
      <button @click="deliveryBtnClick" class="deliveryConfigBtn">주소선택</button>
    </div>
    <div class="buyDeliveryBody">
      <div class="form-group">
        <label for="destName">배송자 이름</label>
        <input @change="isValidName" v-model="name" id="destName" type="text">
        </div>

        <div class="form-group">
        <label for="destPhone">휴대폰 번호</label>
        <input @change="isValidPhone" v-model="phone" id="destPhone" type="text" placeholder="“-” 없이 입력">
        </div>

        <div class="address">
        <label class="addressLabel">주소</label>
        <div class="addressInput">
          <input type="text" :value="address" disabled>
          <br>
          <input type="text" :value="detailAddr" disabled>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import {getAddingCosts} from '@/api/index.js'

export default {
  props: ['addresses'],
  data () {
    return {
      isDefaultAddr: false
    }
  },
  watch: {
    addresses (val) {
      for (const addr of val) {
        if (addr.initFlag) {
          this.$store.state.postCode = {address: addr.newAddress, detail: addr.addressDetail, zonecode: addr.zipCode}
          getAddingCosts(Number(addr.zipCode))
            .then(res => {
              if (res.data.jsonData.addingDeliveryAmount) {
                this.$store.commit('updateAddDeliveryCost', res.data.jsonData.addingDeliveryAmount)
              } else {
                this.$store.commit('updateAddDeliveryCost', 0)
              }
              this.isDefaultAddr = true
            })
            .catch(err => {
              console.log(err)
            })
          break
        }
      }
    }
  },
  methods: {
    deliveryBtnClick () {
      this.$emit('deliveryBtnClick')
    },
    isValidName (x) {
      let regex = /^[가-힣]+$/
      if (!regex.test(this.name)) {
        alert('정확한 이름을 입력 해주세요')
        this.name = ''
      }
    },
    isValidPhone (x) {
      let regex = /^[0-9]+$/
      if (!regex.test(this.phone)) {
        alert('정확한 번호를 입력 해주세요')
        this.phone = ''
      }
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

.buyDeliveryWrap .addressInput{
  height: 72px;
}

.buyDeliveryWrap .buyDeliveryBody .address input[type="text"]{
  margin-bottom: 5px;
  background-color: #f9f9f9;
  color: #999999;
  float: right;
}

.buyDeliveryWrap .buyDeliveryBody label{
  text-align: left;
  line-height: 30px;
  float: left;
  width: 73px;
  font-size: 15px;
  color: #111111;
}

.buyDeliveryWrap .defaultAddrBadge{
  width: 55px;
  height: 15px;
  line-height: 15px;
  border-radius: 8px;
  text-align: center;
  font-size: 8px;
  border: 1px solid black
}

</style>
