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
          <li class="item" :style="{'background':'url('+imgSrc+')'}">
            <button class="remove"><img src="../../../assets/img/ico/btn_remove.png" alt="이미지 삭제" /></button>
          </li>
          <li class="item">
            <button class="remove"><img src="../../../assets/img/ico/btn_remove.png" alt="이미지 삭제" /></button>
          </li>
        </ul>
      </div>
      <input type="file" name="photoUpload" id="fileUpload" v-on:change="setphotos" ref="file" multiple />
      <label for="fileUpload" class="btn_photo" >사진첨부</label>
    </div>
  </div>

</template>

<script>
export default {
  name: 'TextBlock',
  props: ['reviewText', 'photos'],
  data () {
    return {
      // mode: 'text'
      mode: 'photo',
      imgSrc: ''
    }
  },
  methods: {
    modeSwitch () {
      this.mode = 'photo'
    },
    setphotos () {
      // console.log(this.$refs.file.files[0])
      if (this.$refs.file.files[0]) {
        let reader = new FileReader()
        reader.onload = function (e) {
          console.log(e.target.result)
          this.imgSrc = e.target.result
        }
        reader.readAsDataURL(this.$refs.file.files[0])
      }
    }
  }
}
</script>

<style>

</style>
