<template>
  <div class="user-avatar">
    <span class="user-initials">{{ initials }}</span>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  initials: {
    type: String,
    default: 'ММ'
  }
});
</script>

<style scoped>
.user-avatar {
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: var(--primary);

  display: flex;
  align-items: center;
  justify-content: center;
}

.user-initials {
  font-size: 20px;
  font-weight: bold;
  color: var(--white);
}
</style>
