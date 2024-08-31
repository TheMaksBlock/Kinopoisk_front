<template>
  404
</template>

<script>
import {routesPaths} from "@/consts.js";

export default {
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