<template>
  <div class="info-box" :style="{ backgroundColor: color }">{{ text }}</div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'var(--green)'
  }
});
</script>

<style scoped>
.info-box {
  border-radius: 6px;
  padding: 2px 8px;
  margin-right: 20px;
}
</style>
