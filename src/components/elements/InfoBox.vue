<template>
  <div class="info-box" :style="{ backgroundColor: color }">
    <span v-if="icon" class="icon" :class="icon"></span>
    {{ text }}</div>
</template>

<script setup>
import {defineProps, inject, ref} from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: 'var(--green)'
  },
  icon: {
    type: String,
    default: ''
  }
});

const injectedColor = inject("InfoBoxColor", props.color);
const injectedIcon = inject("InfoBoxIcon", props.icon);

const color = ref(injectedColor);
const icon = ref(injectedIcon);
</script>

<style scoped>
.info-box {
  border-radius: 6px;
  padding: 2px 8px;
  margin-right: 20px;
}
</style>
