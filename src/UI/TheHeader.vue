<template>
  <header class="header">
    <div class="container">
      <div class="header-wrapper">
        <SiteLogo />
        <NavBar />
      </div>
    </div>
  </header>
</template>

<script setup>
import SiteLogo from "@/components/elements/SiteLogo.vue";
import NavBar from "@/UI/NavBar.vue";
</script>

<style scoped>
.header {
  background-color: black;
  padding: 40px 0 56px;
}

.header-wrapper {
  display: flex;
  align-items: center;
}
</style>
