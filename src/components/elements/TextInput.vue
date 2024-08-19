<template>
  <div class="">
    <input class="search" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: "text-input",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.search{
  width: 1184px;
  height: 56px;

  background-color: rgba(50, 53, 55, 1);
  border-radius: 10px;
  border-color: rgba(50, 53, 55, 1);

  color: rgba(255, 255, 255, 1);
  font-family: "Exo 2", sans-serif;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  box-sizing: border-box;
  padding-left: 20px;
}
</style>