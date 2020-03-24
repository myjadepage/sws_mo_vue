<template>
  <div class="deliveryAddrModal">
    <ModalHeader @modalClose="modalClose" :title="'배송지 변경'" />
    <div class="modalBody">
      <div class="catSelect">
        <button @click="deliveryBtnClick(0)" class="selected">배송지 목록</button><button @click="deliveryBtnClick(1)">신규 배송지</button>
        </div>
      <ul v-if="currentCat===0" class="addressList">
        <li v-for="(addr,idx) in addresses" :key="addr.userAddressSysId"><input type="radio" class="addrRadio" name="addrRadio" :id="'radio'+idx" :value="idx">
        <label class="checkmark" :for="'coupon'+idx"></label>
        <label class="radioLabel" :for="'radio'+idx">{{addr.newAddress}} {{addr.addressDetail}}</label></li>
      </ul>

      <div v-if="currentCat===1" class="searchAddrSection">
        <input type="text" ref="zipcode"  class="zipcode" :value="zipcode" hidden>
        <input type="text" ref="addr" readonly class="address" :value="mainAddress"><button @click="searchAddrBtnClick" class="searchAddrBtn">주소 검색</button>
        <input type="text" ref="jibun" readonly class="jibun" :value="jibunAddress">
        <input type="text" ref="detailAddr" class="detailAddr" placeholder="상세주소">
        <div class="defualtAddrCheck">
        <input ref="defaultAddrCheck" type="checkbox" id="defaultAddrCheck"><label for="defaultAddrCheck">기본 배송지로 설정</label>
        <label class="checkmark" for="defaultAddrCheck"></label>
        </div>
      </div>

      <button v-if="currentCat===0" @click="selectAddrClick" class="doneBtn">선택하기</button>
      <button v-if="currentCat===1" @click="addAddrClick" class="doneBtn">추가하기</button>
    </div>
  </div>
</template>

<script>
import ModalHeader from './ModalHeader'
import {addMemberAddress, getAccessToken} from '@/api/index.js'

export default {
  props: ['addresses'],
  components: {
    ModalHeader
  },
  created () {
  },
  data () {
    return {
      currentCat: 0,
      searchResult: {}
    }
  },
  methods: {
    modalClose () {
      this.$emit('modalClose')
    },

    deliveryBtnClick (idx) {
      this.$el.getElementsByTagName('button')[this.currentCat].classList.remove('selected')
      this.currentCat = idx
      this.$el.getElementsByTagName('button')[idx].classList.add('selected')
    },
    searchAddrBtnClick () {
      this.searchWindow = window.open('/buyproduct/searchPost', '_blank', 'width=500, height=500, toolbar=no, menubar=no, scrollbars=no, resizable=yes')
      this.searchWindow.onunload = () => {
        this.searchResult = JSON.parse(localStorage.getItem('postCode'))
        this.$forceUpdate()
        localStorage.removeItem('postCode')
      }
    },
    addAddrClick () {
      // 비동기 주소 등록 로직 추가하기

      if (this.$refs.addr.value && this.$refs.jibun.value) {
        let item = {...this.searchResult}
        item.detail = this.$refs.detailAddr.value

        let addrInfo = {
          zipCode: this.$refs.zipcode.value,
          address: this.$refs.jibun.value,
          newAddress: this.$refs.addr.value,
          addressDetail: this.$refs.detailAddr.value,
          initFlag: this.$refs.defaultAddrCheck.checked ? 1 : 0}

        if (sessionStorage.getItem('accessToken')) {
          addMemberAddress(sessionStorage.getItem('accessToken'), addrInfo).then(res => {
            this.$store.state.postCode = item
            this.$emit('addrModalClose')
          }).catch(err => {
            if (err.response.status === 401) {
              getAccessToken(sessionStorage.getItem('accessToken'))
                .then(res => {
                  sessionStorage.setItem('accessToken', res.data.jsonData.accessToken)
                })
                .catch(err => {
                  if (err.response.status === 401) {
                    this.$store.dispatch('logOut')
                    this.$router.push('/Login')
                  }
                })
            }
          })
        }
      }
    },
    selectAddrClick () {
      let x = this.$el.getElementsByClassName('addrRadio')
      let val
      for (const i of x) {
        if (i.checked === true) {
          val = i.value
        }
      }
      if (!val) {
        return
      }

      this.$store.state.postCode = {address: this.addresses[val].newAddress, detail: this.addresses[val].addressDetail, zonecode: this.addresses[val].zipCode}

      this.$emit('addrModalClose')
    }
  },
  computed: {
    mainAddress () {
      if (this.searchResult) {
        return this.searchResult.address
      }
    },
    jibunAddress () {
      if (this.searchResult) {
        return this.searchResult.jibunAddress
      }
    },
    zipcode () {
      if (this.searchResult) {
        return this.searchResult.zonecode
      }
    }
  }
}
</script>

<style>
.deliveryAddrModal{
    z-index: 1000;
    position: fixed;
    top: 20px;
    left: 5%;
    width: 90%;
    height: 95%;
    background-color: #fff;
  }

  .deliveryAddrModal .modalBody{
    text-align: center;
    padding: 0 14px;
  }

  .deliveryAddrModal .catSelect{
    margin-bottom: 20px;
  }

  .deliveryAddrModal button{
    font-size: 15px;
    height: 40px;
    width: 50%;
    border:1px solid #eeeeee;
  }

  .deliveryAddrModal button.selected{
    border:1px solid #e61754;
    color: #e61754;
  }

  .deliveryAddrModal button.searchAddrBtn{
    background-color: black;
    float: right;
    color: white;
    border-radius: 2px;
    height: 40px;
    width: 30%;
  }

  .deliveryAddrModal button.doneBtn{
    font-size: 14px;
    background-color: #e61754;
    height: 42px;
    color: white;
    border-radius: 2px;
  }

  .deliveryAddrModal .defualtAddrCheck{
    text-align: left;
    margin-bottom: 100px;
  }

  .deliveryAddrModal .searchAddrSection input[type='text']{
    border: 1px solid #eeeeee;
    height: 40px;
    width: 100%;
    margin-right: 10px;
  }

  .deliveryAddrModal .searchAddrSection{
    text-align: left;
  }

  .deliveryAddrModal .searchAddrSection input[type='text'].address{
    width: 65%;
  }

  .deliveryAddrModal .searchAddrSection input[type='text'].jibun{
    margin: 10px 0;
  }

  .deliveryAddrModal .searchAddrSection input[type='text'].detailAddr{
    margin-bottom: 10px;
  }

  .deliveryAddrModal .addressList{
    margin: 36px 5% 50px;
    text-align: left;
  }

.deliveryAddrModal .addressList input[type='radio']{
    all: unset;
    border: 1.5px solid #cccccc;
    border-radius: 20px;
    float: left;
    margin: 0 15px 10px 0;
    width: 20px;
    height: 20px;
}

.deliveryAddrModal .addressList input[type="radio"]:checked{
    border: 1.5px solid #e61754;
    margin: 0 0 10px 0;
}

.deliveryAddrModal .addressList input[type="radio"]:checked+.checkmark{
    float: left;
    position: relative;
    top: 7px;
    right: 16px;
    background: #e61754;
    border-radius: 8px;
    margin: 0 6px 25px 0;
    width: 9px;
    height: 9px;
}

  .deliveryAddrModal .addressList li{
    margin-bottom: 30px;
  }

  .deliveryAddrModal .modalBody .defualtAddrCheck input[type="checkbox"]{
all: unset;
display: inline-block;
border: 1px solid #cccccc;
width: 18px;
height: 18px;
border-radius: 20px;
margin-right: 5px;
}

.deliveryAddrModal .modalBody .defualtAddrCheck input[type="checkbox"]::before{
content: '';
background: url('../../../assets/img/ico/ico_checkbox_label_un.png');
background-size: 100%;
float: right;
width: 10px;
height: 7px;
position: relative;
right: 4px;
top: 6px;
}

.deliveryAddrModal .modalBody .defualtAddrCheck input[type="checkbox"]:checked{
  border: 0;
  width: 20px;
  height: 20px;
  background-color: #e61754;
}

.deliveryAddrModal .modalBody .defualtAddrCheck input[type="checkbox"]:checked::before{
  content: '';
  background: url('../../../assets/img/ico/ico_checkbox_label.png');
  background-size: 100%;
  float: right;
  width: 10px;
  height: 7px;
  position: relative;
  right: 5px;
  top: 7px;
}

</style>
