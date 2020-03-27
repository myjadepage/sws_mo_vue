<template>

  <section class="movieReview compBlock">
    <h2>동영상 리뷰</h2>
    <p class="movieName" :class="movies.length > 0? '':'empty'">파일 첨부{{movies.length > 0? ' : '+movies[0].name : ''}}</p>
    <input type="file" id="movieFile" v-on:change="setMovie($event)" ref="movieInput" />
    <div class="btnsWrap">
      <button class="btn_them gray border" :disabled="movies.length === 0" @click="removeMovie" >삭제</button>
      <label for="movieFile" class="btn_them ">동영상 업로드</label>
    </div>
  </section>

</template>

<script>

export default {
  name: 'MovieReview',
  data () {
    return {
      movies: []
    }
  },
  methods: {
    setMovie (event) {
      this.movies = event.target.files
    },
    removeMovie () {
      this.$refs.movieInput.value = ''
      this.movies = []
    }
  }
}
</script>

<style>

</style>
