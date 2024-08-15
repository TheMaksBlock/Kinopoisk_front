<template>
  <div class="sidebar">
    <side-bar-list/>
  </div>
</template>

<script>

import SideBarList from "@/components/elements/SideBarList.vue";

export default {
  name: "side-bar",
  components: {SideBarList},
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>