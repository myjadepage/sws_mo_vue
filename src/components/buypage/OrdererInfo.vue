<template>
  <div class="ordererInfoWrap">
      <div class="ordererHeader">
          주문자 정보
      </div>
          <div class="ordererBody">
      <div class="form-group">
        <label for="orderName">주문자 이름</label>
        <input ref="name" @change="isValidName" v-model="name" id="orderName" type="text">
        </div>

        <div class="form-group">
        <label for="orderPhone">휴대폰 번호</label>
        <input ref="phone" @change="isValidPhone" v-model="phone" id="orderPhone" type="text" placeholder="“-” 없이 입력">
        </div>

        <div class="form-group">
        <label for="orderEmail">이메일 주소</label>
        <input ref="email" @change="isValidEmail" v-model="email" id="orderEmail" type="email">
        </div>

        <div class="orderIsDest">
        <input @change="orderIsDestCheck" type="checkbox" ref="orderIsDest" id="orderIsDest">
        <label class="title" for="orderIsDest">주문자와 배송지 정보가 동일</label>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['user'],
  watch: {
    user (val) {
      this.email = val.userId
    }
  },
  methods: {
    orderIsDestCheck () {
      if (this.$refs.orderIsDest.checked) {
        this.$store.commit('updateDestInfo', ['name', this.name])
        this.$store.commit('updateDestInfo', ['phone', this.phone])
      }
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
    },
    isValidEmail (x) {
      let regex = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
      if (!regex.test(this.email)) {
        alert('정확한 이메일 주소를 입력 해주세요')
        this.email = ''
      }
    }
  },
  computed: {
    name: {
      get () {
        return this.$store.getters.getOrdererInfo.name
      },
      set (value) {
        this.$store.commit('updateOrdererInfo', ['name', value])
      }
    },
    phone: {
      get () {
        return this.$store.getters.getOrdererInfo.phone
      },
      set (value) {
        this.$store.commit('updateOrdererInfo', ['phone', value])
      }
    },
    email: {
      get () {
        return this.$store.getters.getOrdererInfo.email
      },
      set (value) {
        this.$store.commit('updateOrdererInfo', ['email', value])
      }
    }
  }
}
</script>

<style>
.ordererInfoWrap{
   margin-top: 5px;
  background-color: #fff;
  padding: 17px 12px 15px;
}

.ordererInfoWrap .ordererHeader{
 font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
}

.ordererInfoWrap .ordererBody .form-group{
text-align: right;
margin-bottom: 15px
}

.ordererInfoWrap .ordererBody input[type="text"],.ordererInfoWrap .ordererBody input[type="email"]{
  all: unset;
  height: 30px;
  border: 1px solid #eeeeee;
  padding-left: 5px;
  text-align: left;
  width: 66%;
}

.ordererInfoWrap .ordererBody input[type="text"]::placeholder{
  font-size: 14px;
  font-weight: normal;
  color: #999999;
}

.ordererInfoWrap .ordererBody .form-group label{
text-align: left;
float: left;
width: 73px;
font-size: 15px;
line-height: 30px;
color: #111111;
}

.ordererInfoWrap .ordererBody .orderIsDest{
  text-align: right;
}

  .ordererInfoWrap .ordererBody .orderIsDest label.title{
    font-size: 13px;
  }

.ordererInfoWrap .ordererBody .orderIsDest input[type="checkbox"]{
all: unset;
display: inline-block;
border: 1px solid #cccccc;
width: 18px;
height: 18px;
border-radius: 20px;
}

.ordererInfoWrap .ordererBody .orderIsDest input[type="checkbox"]::before{
content: '';
background: url('../../assets/img/ico/ico_checkbox_label_un.png');
background-size: 100%;
float: right;
width: 10px;
height: 7px;
position: relative;
right: 4px;
top: 6px;
}

.ordererInfoWrap .ordererBody .orderIsDest input[type="checkbox"]:checked{
  border: 0;
  width: 20px;
  height: 20px;
  background-color: #e61754;
}

.ordererInfoWrap .ordererBody .orderIsDest input[type="checkbox"]:checked::before{
  content: '';
  background: url('../../assets/img/ico/ico_checkbox_label.png');
  background-size: 100%;
  float: right;
  width: 10px;
  height: 7px;
  position: relative;
  right: 5px;
  top: 7px;
}

</style>
