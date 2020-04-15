<template>
  <div class="qaWriteWrap">
      <div class="qaInfo">
        <span class="ico_qna"></span>
        <span class="highlight">상품, 배송, 취소, 교환, 반품</span>과 관련하여<br>
        궁금한 점이 있다면 판매자에게 문의해 보세요.
      </div>
      <div class="qnaForm">
        <select ref="qnaType" name="qnaType">
        <option value="">문의 유형을 선택해 주세요(필수)</option>
        <option value="0">상품</option>
        <option value="1">배송</option>
        <option value="2">취소</option>
        <option value="3">교환</option>
        <option value="4">반품</option>
      </select>
       <textarea ref="qnaDesc" name="qnaDesc" placeholder="문의 내용을 입력해 주세요."></textarea>

        <div class="qaFooter">
            <h3><span class="qaNotice"></span>문의 시 유의해 주세요.</h3>
            <ul>
                <li>연락처, 배송지, 환불계좌 정보 등 개인 정보가 포함된 글을 타인에게 노출될 경우 개인 정보 도용의 위험이 있으니 주의해 주시기 바랍니다.</li>
                <li>비방, 광고, 욕설 등의 부적절한 게시물을 등록할 경우에는 관리자에 의해 사전 동의 없이 삭제될 수 있으며 ID 이용이 제한이 될 수 있습니다.</li>
            </ul>
        </div>

       <div class="btnsWrap">
        <button class="btn_them gray border btn_cancle col2" @click="cancelClick">취소</button>
        <button class="btn_them btn_submit col2" @click="postQnA">문의하기</button>
      </div>
      </div>
  </div>
</template>

<script>
import {postPrdtQuestion, getAccessToken} from '@/api/index.js'

export default {
  methods: {
    cancelClick () {
      this.$emit('cancelClick')
    },

    postQnA () {
      if (this.$refs.qnaType.value !== '') {
        let item = {
          questionTypeCode: Number(this.$refs.qnaType.value),
          content: this.$refs.qnaDesc.value
        }

        postPrdtQuestion(sessionStorage.getItem('accessToken'), this.$route.params.prdtSysId, item)
          .then(res => {
            this.$emit('qaDone')
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
      }
    }
  }
}
</script>

<style>
.qaWriteWrap .qaInfo{
    background-color: #f2f2f2;
    padding: 28px 12px;
    font-size: 15px;
}

.qaWriteWrap .highlight{
    font-weight: 500;
    color : #e61754;
}

.qaWriteWrap .qaNotice{
    display: inline-block;
    background-image: url('../../../../assets/img/ico/ico_notice_qna.png');
    background-size: 100%;
    width: 18px;
    height: 18px;
    margin-right: 5px;
    position: relative;
    top: 4px;
}

.qaWriteWrap h3{
    font-size: 14px;
    font-weight: normal;
    color: #e61754;
}

.qaWriteWrap .qaFooter{
    margin-top: 20px;
}

.qaWriteWrap .qaFooter ul{
    margin-top: 10px;
    list-style-position: outside;
    padding: 0 0 0 20px;
}

.qaWriteWrap .qaFooter li{
    color: #666666;
    list-style: disc;
    margin-top: 10px;
}

.ico_qna{
    float: left;
    background-image: url('../../../../assets/img/ico/ico_qna.png');
    background-size: 100%;
    width: 42px;
    height: 38px;
    margin-right: 10px;
}
</style>
