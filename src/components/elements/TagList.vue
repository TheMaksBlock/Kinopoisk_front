<template>
  <ul class="card-tags-list">
    <li v-for="tag in tags" :key="tag">{{ tag }}</li>
  </ul>
</template>

<script>
export default {
  name: "tag-list",
  props: {
    tags: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.card-tags-list {
  display: flex;
}

.card-tags-list li::before {
  content: "•";
  margin: 0 8px;
}

.card-tags-list li:first-child::before {
  content: "";
  margin: 0;
}

</style>