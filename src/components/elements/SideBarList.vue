<template>
  <ul>
    <SidebarItem
        v-for="item in sidebarItems"
        :key="item.icon"
        :link="item.link"
        :icon="item.icon"
        :label="item.label"
    />
  </ul>
</template>

<script setup>
import { ref } from 'vue'
import SidebarItem from '@/components/elements/SidebarItem.vue'

const sidebarItems = ref([
  { icon: 'fa-solid fa-house-chimney', link: 'home', label: 'Home' },
  { icon: 'fa-solid fa-fire-flame-curved', link: 'trends', label: 'Trends' },
  { icon: 'fa-solid fa-bookmark', link: 'favorites', label: 'Favorites' },
  { icon: 'fa-solid fa-gear', link: 'settings', label: 'Settings' }
])
</script>

<style scoped>
/* Добавьте стили, если необходимо */
</style>
