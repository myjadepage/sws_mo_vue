<template>
  <div class="reviewEntityWrap">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full sm"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half sm"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none sm"></span>
    <span class="reviewDeclare">신고하기</span><span class="reviewDelimiter">|</span><span class="reviewDate">{{date}}</span><span class="reviewWriter">{{concealedWriter}}</span>
      <div class="reviewContent">{{content}}</div>
      <div v-if="photo.length===1" class="photoSection"></div>
      <div v-if="photo.length>2" class="multiPhotoSection">
        <span v-for="(p,idx) in photo" :key="idx" class="subPhoto"></span>
      </div>
      <div v-if="media" class="mediaSection"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rate: 3.5,
      writer: 'abcdefg',
      date: '2020.02.11',
      content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
      photo: [1],
      media: false
    }
  },
  computed: {
    fullStarCnt () {
      return Math.floor(this.rate)
    },
    halfStarCnt () {
      return this.rate % 1
    },
    noneStarCnt () {
      if (this.halfStarCnt) {
        return 4 - this.fullStarCnt
      } else {
        return 5 - this.fullStarCnt
      }
    },
    concealedWriter () {
      let val = this.writer
      val = val.split('')
      for (let i = 3; i < val.length; i++) {
        val[i] = '*'
      }
      val = val.join('')

      return val
    }
  }
}
</script>

<style>
.reviewEntityWrap{
  padding-top: 13px;
  padding-bottom: 15px;
  border-top: 1px solid #eeeeee;
}

.reviewEntityWrap .sm{
    width: 13px;
    height: 13px;
}

.reviewEntityWrap .reviewDeclare{
  cursor: pointer;
}

.reviewEntityWrap .reviewWriter,.reviewDate,.reviewDelimiter,.reviewDeclare{
  font-size: 13px;
  color: #666666;
  float: right;
  margin-right: 5px;
}

.reviewEntityWrap .reviewDelimiter{
  font-size: 7px;
  font-weight: 500;
  line-height: 19px;
}

.reviewEntityWrap .reviewContent{
  margin-top: 13px;
}

.reviewEntityWrap .photoSection{
  display: inline-block;
  width: 100%;
  height: 230px;
  background-color: #ebd1c4;
}

.reviewEntityWrap .subPhoto{
  display: inline-block;
  margin: 10px 10px 15px 0;
  width: 74px;
  height: 55px;
  background-color: #ebd1c4;
}

.reviewEntityWrap .mediaSection{
  display: inline-block;
  width: 100%;
  height: 230px;
  background-color: gray;
}
</style>
