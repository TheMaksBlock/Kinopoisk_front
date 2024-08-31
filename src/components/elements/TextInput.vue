<template>
  <div class="">
    <input class="search" placeholder="Search">
  </div>
</template>

<script>
export default {
  name: "text-input",
}
</script>

<style scoped>
.search {
  width: 1184px;
  height: 56px;

  background-color: var(--graphite);
  border-radius: 10px;
  border-color: var(--graphite);

  color: white;
  font-family: "Exo 2", sans-serif;
  font-weight: var(--medium);
  font-size: 16px;
  line-height: 24px;

  box-sizing: border-box;
  padding-left: 20px;
}
</style>