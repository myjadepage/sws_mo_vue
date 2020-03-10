<template>
  <div class="reviewHeaderWrap">
      <span class="reviewCnt">리뷰 총 {{totalReviewCnt}}개</span>
      <div class="rating">
       <span><span v-for="(n,nid) of fullStarCnt" :key="nid" class="ico_star_full"></span></span>
        <span v-if="halfStarCnt" class="ico_star_half"></span>
        <span v-for="(j,jid) of noneStarCnt" :key="jid" class="ico_star_none"></span><span class="ratePoint"> {{reviewAvgRate}}</span>
      </div>
        <div class="reviewCategory">
          <span @click="catClick(0)" class="selected">전체</span>
          <span @click="catClick(1)">포토</span>
          <span @click="catClick(2)">동영상</span>
        </div>
        <div v-if="currentCat===0">
        <Entity v-for="r in reviews.photos" :key="r.r_no" :review="r" />
        <Entity v-for="r in reviews.normals" :key="r.r_no" :review="r" />
        <Entity v-for="m in reviews.medias" :key="m.r_no" :review="m" />
        </div>
        <div v-if="currentCat===1">
          <Entity v-for="r in reviews.photos" :key="r.r_no" :review="r" />
        </div>
        <div v-if="currentCat===2">
          <Entity v-for="m in reviews.medias" :key="m.r_no" :review="m" />
        </div>
  </div>
</template>

<script>
import Entity from './reviewEntity'
export default {
  components: {
    Entity
  },
  data () {
    return {
      reviews: {
        photos: [
          {
            r_no: 1,
            rate: 3.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [1],
            media: false},
          {r_no: 2,
            rate: 1.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [1, 2, 3],
            media: false},
          {r_no: 3,
            rate: 5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [1, 2],
            media: false},
          {r_no: 4,
            rate: 4,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [1, 2, 3, 4, 5],
            media: false},
          {r_no: 5,
            rate: 2.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [1, 2, 3, 4],
            media: false}

        ],
        medias: [
          {r_no: 6,
            rate: 5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: true},
          {r_no: 7,
            rate: 2,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: true}
        ],
        normals: [
          {r_no: 8,
            rate: 3.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: false},
          {r_no: 9,
            rate: 1.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: false},
          {r_no: 10,
            rate: 0,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: false},
          {r_no: 11,
            rate: 3.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: false},
          {r_no: 12,
            rate: 3.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: false},
          {r_no: 13,
            rate: 3.5,
            writer: 'abcdefg',
            date: '2020.02.11',
            content: '수공예라 그런지 마감이 좀 아쉽네요. 넓은 면에 미세한 스크레치가 꽤 있는데 볼 때 예쁘진 않지만 마사지에 영향 줄 정도는 아니고 깃 부분 중앙이 좀 뾰족한데 혈점 자극하는 데 쓰도록 해봐야겠어요. 불투명한 색이라 그런지 사진처럼예쁘진 않아요. 그래도 다른 곳보다 저렴해서 괜찮은 것 같아요  그래도 다른 곳보다 저렴해서 괜찮은 것 같 그래도 다',
            photo: [],
            media: false
          }
        ]
      },
      currentCat: 0
    }
  },
  methods: {
    catClick (cat) {
      let cats = this.$el.getElementsByClassName('reviewCategory')[0].children

      cats[this.currentCat].className = ''
      this.currentCat = cat
      cats[cat].className = 'selected'
    }
  },
  computed: {
    fullStarCnt () {
      return Math.floor(this.reviewAvgRate)
    },
    halfStarCnt () {
      return this.reviewAvgRate % 1
    },
    noneStarCnt () {
      if (this.halfStarCnt) {
        return 4 - this.fullStarCnt
      } else {
        return 5 - this.fullStarCnt
      }
    },
    totalReviewCnt () {
      return this.reviews.photos.length + this.reviews.medias.length + this.reviews.normals.length
    },
    reviewAvgRate () {
      let sum = 0
      for (const i of this.reviews.photos) {
        sum += i.rate
      }
      for (const i of this.reviews.medias) {
        sum += i.rate
      }
      for (const i of this.reviews.normals) {
        sum += i.rate
      }

      return Math.round(sum / this.totalReviewCnt).toFixed(1)
    }
  }

}
</script>

<style>
.reviewHeaderWrap{
  padding: 30px 12px 10px 12px;
}

.reviewHeaderWrap .ratePoint{
  font-size: 22px;
  font-weight: bold;
}
.reviewHeaderWrap .reviewCnt{
  font-size: 15px;
  font-weight: 500;
}

.reviewHeaderWrap .reviewCategory span{
  text-align: center;
  margin: 35px 15px 10px 0;
  line-height: 30px;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  cursor: pointer;
}
.reviewHeaderWrap .reviewCategory span.selected{
  text-align: center;
  line-height: 30px;
  display: inline-block;
  border: 1px solid #e61754;
  width: 60px;
  height: 30px;
  border-radius: 20px;
  color: #e61754;
}
</style>
