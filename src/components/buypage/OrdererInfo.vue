<template>
  <div class="ordererInfoWrap">
      <div class="ordererHeader">
          주문자 정보<span v-if="isLogin===false" class="loginBtn">회원구매</span>
      </div>
          <div class="ordererBody">
      <div class="form-group">
        <label for="orderName">주문자 이름</label>
        <input v-model="name" id="orderName" type="text">
        </div>

        <div class="form-group">
        <label for="orderPhone">휴대폰 번호</label>
        <input v-model="phone" id="orderPhone" type="text" placeholder="“-” 없이 입력">
        </div>

        <div class="form-group">
        <label for="orderEmail">이메일 주소</label>
        <input v-model="email" id="orderEmail" type="email">
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
  created () {
    if (sessionStorage.getItem('accessToken')) {
      this.isLogin = true
    }
  },
  data () {
    return {
      isLogin: false
    }
  },
  props: ['member'],
  methods: {
    orderIsDestCheck () {
      if (this.$refs.orderIsDest.checked) {
        this.$store.commit('updateDestInfo', ['name', this.name])
        this.$store.commit('updateDestInfo', ['phone', this.phone])
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
  min-width: 66%;
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
margin-right: 33px;
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
