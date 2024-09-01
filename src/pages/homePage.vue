<template>
  <div v-if="movies" class="main">
    <router-link
        v-for="movie in movies"
        :key="movie.id"
        :to="{ name: 'movie', params: { alias: movie.alias } }"
    >
      <MovieCard :movie="movie" />
    </router-link>
  </div>
  <Preloader v-else />
</template>

<script setup>
import { ref, onMounted, getCurrentInstance } from 'vue';
import { routesPaths } from '@/consts.js';
import MovieCard from '@/UI/MovieCard.vue';
import Preloader from '@/components/elements/ThePreloader.vue';
import axios from "axios";

const movies = ref(null);

const getMovies = async () => {
  try {
    const response = await axios.get(routesPaths.movies);
    movies.value = response.data.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

onMounted(() => {
  getMovies();
});
</script>

<style scoped>
.main {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}
</style>
