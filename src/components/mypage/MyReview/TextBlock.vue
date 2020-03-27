<template>

  <div class="textBlock">
    <div class="onlyText" v-if="mode==='text'">
      <input type="text" placeholder="한줄 리뷰를 남겨주세요(선택사항)" v-model="reviewText" />
      <button class="btn_photo" @click="modeSwitch">포토리뷰</button>
    </div>
    <div class="onlyText" v-if="mode==='photo'">
      <div class="preViewBox">
        <textarea placeholder="포토리뷰를 작성해 주세요." v-model="reviewText"></textarea>
        <ul class="photoList">
          <li class="item" style="background:url('/static/images/1.jpg') 50% 50% / cover no-repeat;">
            <button class="remove"><img src="../../../assets/img/ico/btn_remove.png" alt="이미지 삭제" /></button>
          </li>
          <li class="item" style="background:url('/static/images/2.jpg') 50% 50% / cover no-repeat;">
            <button class="remove"><img src="../../../assets/img/ico/btn_remove.png" alt="이미지 삭제" /></button>
          </li>
        </ul>
      </div>
      <input type="file" name="photoUpload" id="fileUpload" v-on:change="setphotos($event)" ref="file" multiple />
      <label for="fileUpload" class="btn_photo" >사진첨부</label>
    </div>

    <div class="btnsWrap">
      <button class="btn_them gray border">취소</button>
      <button class="btn_them ">확인</button>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TextBlock',
  props: ['reviewText', 'photos'],
  data () {
    return {
      mode: 'text',
      imgSrc: []
    }
  },
  methods: {
    modeSwitch () {
      this.mode = 'photo'
    },
    setphotos (event) {
      this.imgSrc = event.target.files
    }
  }
}
</script>

<style>

</style>
