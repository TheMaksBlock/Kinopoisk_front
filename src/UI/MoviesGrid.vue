<template>
  <div class="main">
    <router-link
        v-for="movie in movies"
        :key="movie.id"
        :to="{ name: 'movie', params: { alias: movie.alias } }"
    >
      <MovieCard :movie="movie" />
    </router-link>
  </div>
</template>

<script setup>
import MovieCard from "@/UI/MovieCard.vue";

const props = defineProps({
  movies: {
    type: Array,
    required: true,
  },
})

</script>


<style scoped>
.main {
  background-color: black;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 40px;
}
</style>