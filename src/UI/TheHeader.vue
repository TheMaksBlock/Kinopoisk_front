<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <site-logo/>
        <nav-bar/>
      </div>
    </div>
  </header>
</template>

<script>
import SiteLogo from "@/components/elements/SiteLogo.vue";
import NavBar from "@/UI/NavBar.vue";

export default {
  components:{SiteLogo, NavBar},
  name: "the-header",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>