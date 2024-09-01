<template>
  <div class="card">
    <div class="rating">
      <InfoBox :text="movie.rating"/>
    </div>
    <CardImage :image-url="movie.image"/>
    <div class="card-description">
      <div class="card-name">{{ movie.title }}</div>
      <div class="card-tags">
        <TagList :tags="genres"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import InfoBox from "@/components/elements/InfoBox.vue";
import CardImage from "@/components/elements/CardImage.vue";
import TagList from "@/components/elements/TagList.vue";

const props = defineProps({
  movie: {
    type: Object,
    required: true
  }
});

const genres = computed(() => {
  return props.movie ? props.movie.genres.map(genre => genre.name) : [];
});
</script>

<style scoped>
.card-name {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-tags {
  font-size: 16px;
  font-weight: 500;
  color: rgba(149, 161, 176, 1);
}

.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 266px;
  height: 433px;
}

.rating {
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>
