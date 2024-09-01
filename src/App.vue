<template>
  <div class="wrapper">
    <the-header/>
    <div class="wrapper-content">
      <div class="container">
        <div class="container2">
          <side-bar/>
          <router-view></router-view>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import TheHeader from "@/UI/TheHeader.vue";
import SideBar from "@/UI/SideBar.vue";

</script>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: black;
}

.container2 {
  display: flex;
  flex-grow: 1;
  width: 100%;
}

.wrapper-content {
  background-color: black;
}

.wrapper {
  padding-bottom: 64px;
}
</style>
