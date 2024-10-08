<template>
  <div v-if="movie" class="main">
    <div class="image">
      <card-image :image-url="movie.image"/>
      <div class="buttons">
        <div class="favorite-button">
          <my-button icon="fa-solid fa-bookmark"/>
        </div>
        <div class="share-button">
          <my-button icon="fa fa-share-alt"/>
        </div>
      </div>
    </div>
    <div class="movie-info">
      <div class="tags">
        <tag-list :tags="genres"/>
      </div>
      <div class="title">{{ movie.title }}</div>
      <div class="info">
        <info-box :text="movie.rating"/>
        <info-box :text="movie.duration_minutes + ' min'" color="var(--graphite)"/>
      </div>
      <div class="description">
        {{ movie.description }}
      </div>
      <div class="details">
        <ul>
          <li>
            <div class="detail-title">Year</div>
            <div class="detail-data"> {{ movie.release_year }}</div>
          </li>
          <li>
            <div class="detail-title">Released</div>
            <div class="detail-data"> {{ movie.release_date }}</div>
          </li>
          <li>
            <div class="detail-title">BoxOffice</div>
            <div class="detail-data">{{ movie.box_office }}</div>
          </li>
          <li>
            <div class="detail-title">Country</div>
            <div class="detail-data">{{ movie.country }}</div>
          </li>
          <li>
            <div class="detail-title">Production</div>
            <div class="detail-data">{{ movie.production }}</div>
          </li>
          <li>
            <div class="detail-title">Actors</div>
            <div class="detail-data">{{ movie.actors }}</div>
          </li>
          <li>
            <div class="detail-title">Writers</div>
            <div class="detail-data">{{ movie.writers }}</div>
          </li>
        </ul>
      </div>
      <div v-if="recommendedMovies" class="recommendation">
        <div class="recommendation-title">Recommendations</div>
        <div class="recommended-films">
          <movie-card v-for="recommendedMovie in recommendedMovies" :key="recommendedMovie.id"
                      :movie="recommendedMovie"/>
        </div>
      </div>
    </div>
  </div>
  <preloader v-else/>
</template>

<script setup>
import {ref, onMounted, computed} from 'vue';
import { useRoute } from 'vue-router';
import { routesPaths } from '@/consts.js';
import CardImage from '@/components/elements/CardImage.vue';
import MovieCard from '@/UI/MovieCard.vue';
import TagList from '@/components/elements/TagList.vue';
import Preloader from '@/components/elements/ThePreloader.vue';
import MyButton from '@/components/elements/MyButton.vue';
import InfoBox from '@/components/elements/InfoBox.vue';
import axios from "axios";


const route = useRoute();

const movie = ref(null);
const recommendedMovies = ref(null);

const genres = computed(() => {
  return movie.value ? movie.value.genres.map(genre => genre.name) : [];
});

const getMovie = async (alias) => {
  try {
    const response = await axios.get(routesPaths.movie + alias);
    movie.value = response.data.data;
  } catch (error) {
    console.error('Error fetching movie:', error);
  }
};

const getRecommended = async (alias) => {
  try {
    const response = await axios.get(routesPaths.recommendedFilms + alias);
    recommendedMovies.value = response.data.data;
  } catch (error) {
    console.error('Error fetching recommended movies:', error);
  }
};

onMounted(() => {
  const alias = route.params.alias;
  getMovie(alias);
  getRecommended(alias);
});
</script>

<style scoped>
.main {
  display: flex;
  width: 100%;
}

.details ul li {
  display: flex;
}

.detail-title {
  width: 136px;
}

.movie-info {
  width: 878px;
  padding-left: 42px;
}

.title {
  font-family: "Exo 2", serif;
  font-size: 40px;
  font-weight: var(--semiBold);
  text-align: right;
}

.info {
  display: flex;
  margin-top: 24px;
}

.description {
  font-weight: var(--medium);
  margin: 40px 0;
}

.detail-title {
  color: var(--light);
}

.detail-data {
  font-weight: var(--medium);
}

.details ul li {
  margin-bottom: 20px;
}

.details ul :last-child {
  margin-bottom: 0;
}

.recommendation {
  margin-top: 56px;
}

.recommended-films {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px;
  margin-top: 40px;
}

.recommendation-title {
  font-size: 24px;
  font-weight: var(--semiBold);
}

.tags {
  color: rgba(149, 161, 176, 1);
  font-size: 16px;
  font-weight: var(--medium);
}

.favorite-button button {
  border-radius: 10px 0 0 10px;
}

.share-button button {
  border-radius: 0 10px 10px 0;
}

.buttons {
  display: flex;
  width: 268px;
  justify-content: space-between;
  margin-top: 32px;
}
</style>
