<template>
  <div class="wrapper">
    <the-header/>

    <div class="wrapper-content">
      <div class="container">
        <div class="container2">
          <side-bar/>
          <div class="main">
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
    <footer>

    </footer>
  </div>
</template>

<script>
import TheHeader from "@/UI/TheHeader.vue";
import SideBar from "@/UI/SideBar.vue";

export default {
  components: {SideBar, TheHeader},
}
</script>

<style>

</style>