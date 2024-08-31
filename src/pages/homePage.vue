<template>
  <div v-if="movies" class="main">
    <router-link v-for="movie in movies" :key="movie.id" :to="{name:'movie',params:{alias:movie.alias}}">
      <movie-card :movie="movie"/>
    </router-link>
  </div>
  <preloader v-else/>
</template>

<script>
import {routesPaths} from "@/consts.js";
import CardImage from "@/components/elements/CardImage.vue";
import MovieCard from "@/UI/MovieCard.vue";
import Preloader from "@/components/elements/ThePreloader.vue";

export default {
  computed: {
    routesPaths() {
      return routesPaths
    }
  },
  components: {Preloader, MovieCard, CardImage},
  mounted() {
    this.getMovies();
  },
  data() {
    return {
      movies: null,
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
  gap: 40px;

}
</style>