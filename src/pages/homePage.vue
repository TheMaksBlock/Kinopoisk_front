<template>
  <div v-for="movie in movies" :key="movie.id" class="card">
    <div class="card-image">
      <img :src="movie.image" alt="">
    </div>
    <div class="card-description">
      <div class="card-name">{{movie.title}}</div>
      <div class="card-tags">
        <span>tag1</span>
        <span>tag2</span>
        <span>tag3</span>
      </div>
    </div>
  </div>
</template>

<script>
import {routesPaths} from "@/consts.js";

export default {
  mounted() {
    this.getMovies();
  },
  data() {
    return {
      movies: []
    }
  },
  methods: {
    getMovies() {
      this.axios.get(routesPaths.movies)
          .then(res => {
            this.movies = res.data.data;
          })
    }
  }
}
</script>

<style>

</style>