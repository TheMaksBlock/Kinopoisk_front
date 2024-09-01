<template>
  <button :class="icon" @click="$emit('buttonClick')">{{ text }}</button>
</template>

<script setup>
const props = defineProps({
  text: String,
  icon: String
});
</script>

<style scoped>
button {
  width: 133px;
  height: 56px;
  color: var(--light);
  background-color: var(--graphite);
  border: 0;
}
</style>
