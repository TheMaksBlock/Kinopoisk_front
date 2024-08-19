<template>
  <div class="main">
    <movie-card v-for="movie in movies" :key="movie.image" :title="movie.title" :image="movie.image"/>
  </div>
</template>

<script>
import {routesPaths} from "@/consts.js";
import CardImage from "@/components/CardImage.vue";
import MovieCard from "@/UI/MovieCard.vue";

export default {
  components: {MovieCard, CardImage},
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

<style scoped>
.main {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap:40px;
}
</style>