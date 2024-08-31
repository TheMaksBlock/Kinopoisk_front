<template>
  <div class="card">
    <div class="rating">
      <info-box :text="movie.rating"/>
    </div>
    <card-image :image-url="movie.image"/>
    <div class="card-description">
      <div class="card-name">{{ movie.title }}</div>
      <div class="card-tags">
        <tag-list :tags="genres"/>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/elements/TextInput.vue";
import IconBox from "@/components/elements/IconBox.vue";
import OptionSelector from "@/components/elements/OptionSelector.vue";
import CardImage from "@/components/elements/CardImage.vue";
import TagList from "@/components/elements/TagList.vue";
import InfoBox from "@/components/elements/InfoBox.vue";

export default {
  components: {InfoBox, TagList, CardImage, OptionSelector, IconBox, TextInput},
  name: "movie-card",
  computed:{
    genres(){
      return this.movie? this.movie.genres.map(genre => genre.name) : [];
    }
  },
  data() {
    return {
    }
  },
  props:{
    movie:{
      type: Object,
      required: true
    },
  }
}
</script>

<style scoped>

.card-name{
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
}

.card-tags{
  font-size: 16px;
  font-weight: 500;
  color: rgba(149, 161, 176, 1);
}

.card{
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: relative;

  width: 266px;
  height: 433px;
}
.rating{
  position: absolute;
  left: 20px;
  top: 20px;
}
</style>