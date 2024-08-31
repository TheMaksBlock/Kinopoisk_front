<template>
  <div class="card-image">
    <img :src="imageUrl" alt="">
  </div>
</template>

<script>
export default {
  name: "card-image",
  props: {
    imageUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.card-image {
  width: 266px;
  height: 360px;
  border-radius: 20px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>