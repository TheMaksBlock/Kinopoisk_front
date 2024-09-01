<template>
  <li class="side-bar-element">
    <router-link :to="{ name: link }">
      <i :class="icon"></i> {{ label }}
    </router-link>
  </li>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  link: {
    type: String,
    required: true
  },
  label: {
    type: String,
    required: true
  },
  icon: {
    type: String,
    default: 'fa-solid fa-circle'
  }
})
</script>

<style scoped>
.side-bar-element {
  padding-bottom: 40px;
}

.router-link-active {
  color: var(--primary) !important;
}

.side-bar-element a {
  color: var(--secondary);
  font-size: 18px;
  font-weight: var(--semiBold);
  line-height: 24px;
}
</style>
