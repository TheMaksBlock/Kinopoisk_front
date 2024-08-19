<template>
  <ul>
    <side-bar-element v-for="element in elements" :key="element.icon"
                      :link="element.link"
                      :icon="element.icon"
                      :label="element.label"
    />
  </ul>
</template>

<script>
import SideBarElement from "@/components/elements/SideBarElement.vue";

export default {
  name: "side-bar-list",
  components: {SideBarElement},
  data() {
    return {
      elements:{
        home: { icon: "fa-solid fa-house-chimney", link: "home", label: "Home" },
        trends: { icon: "fa-solid fa-fire-flame-curved", link: "trends", label: "Trends" },
        favorites: { icon: "fa-solid fa-bookmark", link: "favorites", label: "Favorites" },
        settings: { icon: "fa-solid fa-gear", link: "settings", label: "Settings" }
      }
    }
  }
}
</script>

<style scoped>

</style>