<template>
  <MoviesGrid v-if="movies" :movies="movies"/>
  <Preloader v-else />
</template>

<script setup>
import { ref, onMounted, provide } from 'vue';
import { routesPaths } from '@/consts.js';
import Preloader from '@/components/elements/ThePreloader.vue';
import axios from "axios";
import MoviesGrid from "@/UI/MoviesGrid.vue";

const movies = ref(null);
const getMovies = async () => {
  try {
    const response = await axios.get(routesPaths.trends);
    movies.value = response.data.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
  }
};

const color = 'var(--primary)'
const icon = 'fa-solid fa-fire-flame-curved'

provide("InfoBoxColor", color)
provide("InfoBoxIcon", icon)

onMounted(() => {
  getMovies();
});
</script>

<style scoped>

</style>
