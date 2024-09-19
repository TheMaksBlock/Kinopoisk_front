<template>
  <p class="nothing-found" v-if="movies && movies.length === 0">No movies found for the current search query.</p>
  <MoviesGrid v-else-if="movies" :movies="movies"/>
  <Preloader v-else/>
</template>

<script setup>
import { ref, onMounted, watch, onUnmounted } from 'vue';
import { routesPaths } from '@/consts.js';
import Preloader from '@/components/elements/ThePreloader.vue';
import axios from "axios";
import { useSearchStore } from '@/stores.js';
import { useRouter } from "vue-router";
import { debounce } from 'lodash';
import MoviesGrid from "@/UI/MoviesGrid.vue";

const movies = ref(null);
const store = useSearchStore();
const router = useRouter();

const getMovies = async (searchString) => {
  try {
    const response = await axios.get(routesPaths.search + searchString);
    movies.value = response.data.data;
  } catch (error) {
    console.error('Error fetching movies:', error);
    movies.value = [];
  }
};

const debouncedGetMovies = debounce((searchString) => {
  movies.value = null;
  getMovies(searchString);
}, 500);

const searchEdited = watch(
    () => store.searchString,
    (newValue) => {
      if (newValue !== "") {
        debouncedGetMovies(newValue);
      } else {
        router.push({ name: "home" });
      }
    }
);

onMounted(() => {
  if (store.searchString) {
    getMovies(store.searchString);
  }
});
</script>

