<template>
  <div class="nonMemberOrderWrap">
      <span @click="logoClick" class="logo"></span>
      <div class="title">비회원 주문조회</div>
      <div class="formbody">
          <div class="phone">
          <div class="inputTitle">휴대폰 번호</div>
          <input class="" type="text" placeholder="“-” 없이 입력해 주세요.">
          <!-- <button @click="authMineBtnClick">본인인증</button> -->
          </div>
         <div class="orderNumber">
          <div class="inputTitle">주문 번호</div>
          <input type="text" placeholder="주문번호를 입력해 주세요">
         </div>
         <button>비회원으로 조회</button>
      </div>
  </div>
</template>

<script>
export default {
  metaInfo: {
    title: 'Shall We Shop - 비회원 주문조회'
  },
  methods: {
    authMineBtnClick () {
    //   this.$IMP().certification({}, (res) => {
    //     console.log(res)
    //   })
    },
    logoClick () {
      this.$router.push('/')
    }
  }
}
</script>

<style>
.nonMemberOrderWrap{
    text-align: center;
    padding: 65px 22px;
}

.nonMemberOrderWrap .logo{
    background: url('../../assets/img/sws-bi-black@3x.png');
    background-size: 100%;
    background-repeat: no-repeat;
    display: inline-block;
    width: 70px;
    height: 27px;
    margin-bottom: 30px;
}

.nonMemberOrderWrap .title{
    font-size: 22px;
    font-weight: 500;
}
.nonMemberOrderWrap .inputTitle{
    text-align: left;
    font-size: 16px;
    margin-top: 50px;
    margin-bottom: 15px;
}

.nonMemberOrderWrap input[type="text"]{
    all: unset;
    text-align: left;
    border-bottom: 1px solid #eeeeee;
    width: 100%;
}

.nonMemberOrderWrap input[type="text"]:focus{
    border-bottom: 1px solid black;
}

.nonMemberOrderWrap button{
    width: 100%;
    height: 50px;
    border: 1px solid #e61754;
    color: #e61754;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 50px;
}

</style>
