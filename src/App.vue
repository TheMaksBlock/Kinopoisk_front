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

.wrapper-content{
  background-color: black;
}
</style>