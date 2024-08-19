<template>
  <div class="card">
    <card-image :image-url="image"/>
    <div class="card-description">
      <div class="card-name">{{ title }}</div>
      <div class="card-tags">
        <ul>
          <li v-for="tag in 3" :key="tag">tag{{tag}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/elements/TextInput.vue";
import IconBox from "@/components/elements/IconBox.vue";
import OptionSelector from "@/components/elements/OptionSelector.vue";
import CardImage from "@/components/CardImage.vue";

export default {
  components: {CardImage, OptionSelector, IconBox, TextInput},
  name: "movie-card",
  data() {
    return {

    }
  },
  props:{
    image:{
      type: String,
      required: true
    },
    title:{
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card-tags ul{
  display: flex;
}

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

  width: 266px;
  height: 433px;
}
</style>