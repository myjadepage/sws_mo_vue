<template>
  <div class="declareModalWrap">
      <div class="modalHeader">
          신고
      </div>
      <ul>
          <li><label for="radio1">광고/홍보성</label><input @change="nonContenCatClick" v-model="cat" type="radio" value="1" name="claimTypeCode" id="radio1"></li>
          <li><label for="radio2">음란성</label><input @change="nonContenCatClick" v-model="cat" type="radio" value="2" name="claimTypeCode" id="radio2"></li>
          <li><label for="radio3">욕설/비방</label><input @change="nonContenCatClick" v-model="cat" type="radio" value="3" name="claimTypeCode" id="radio3"></li>
          <li><label for="radio4">게시물 도배</label><input @change="nonContenCatClick" v-model="cat" type="radio" value="4" name="claimTypeCode" id="radio4"></li>
          <li><label for="radio5">개인정보 유출</label><input @change="nonContenCatClick" v-model="cat" type="radio" value="5" name="claimTypeCode" id="radio5"></li>
          <li><label for="radio0">기타</label><input v-model="cat" type="radio" value="0" name="claimTypeCode" id="radio0"></li>
      </ul>
        <textarea v-model="content" v-if="cat==='0'" name="content" rows="2"  placeholder="직접입력"></textarea>

        <div class="modalFooter">
            <button @click="cancelBtnClick">취소</button><button @click="declareBtnClick" class="btnHighlight">신고</button>
        </div>
  </div>
</template>

<script>
import {claimReview, getAccessToken} from '@/api/index.js'

export default {
  props: ['prdtReviewSysId'],
  data () {
    return {
      cat: null,
      content: ''
    }
  },
  methods: {
    cancelBtnClick () {
      this.$emit('cencelBtnClick')
    },
    declareBtnClick () {
      let item = {
        claimTypeCode: this.cat,
        content: this.content
      }
      claimReview(sessionStorage.getItem('accessToken'), this.$route.params.prdtSysId, this.prdtReviewSysId, item)
        .then(res => {
          console.log(res)
        })
        .catch(err => {
          if (err.response.status === 401) {
            getAccessToken(sessionStorage.getItem('refreshToken'))
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
    },
    nonContenCatClick () {
      this.content = ''
    }
  }
}
</script>

<style>
.declareModalWrap{
position: fixed;
width: 80%;
top: 15%;
left: 10%;
z-index: 100;
border-radius: 8px;
text-align: center;
background-color: #fff;
transition: ease-in-out 1s;
max-height: 70%;
overflow: scroll;
}

.declareModalWrap .modalHeader{
    height: 50px;
    line-height: 50px;
    color: #111111;
    font-size: 16px;
    font-weight: 500;
}

.declareModalWrap ul{
    padding: 0 30px;
}

.declareModalWrap  li{
    text-align: left;
    width: 100%;
    margin-bottom: 15px;
}

.declareModalWrap li label{
    font-size: 15px;
    color: #111111;
}

.declareModalWrap li input[type='radio']{
    all: unset;
    width: 20px;
    height: 20px;
    border-radius:20px;
    border: 2px solid #cccccc;
    float: right;
}

.declareModalWrap li input[type='radio']:checked{
    border: 2px solid #e61754;
}

.declareModalWrap li input[type='radio']:checked::before{
    content: '';
    display: inline-block;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background-color: #e61754;
    position: relative;
    left: 5px;
    bottom: 1.5px;
}

.declareModalWrap textarea{
    border:1px solid #eeeeee;
    margin-bottom: 30px;
    width: 70%;
}

.modalFooter{
    width: 100%;
    /* position: relative;
    bottom: 0; */
    border-top: 1px solid #eeeeee;
}

.declareModalWrap .modalFooter button{
    background-color: #fff;
    width: 50%;
    height: 44px;
    color: #666666;
    border-radius: 0 0 0 8px;
}

.declareModalWrap .modalFooter button.btnHighlight{
    color: #fff;
    background-color: #e61754;
    border-radius: 0 0 8px 0;
}

</style>
