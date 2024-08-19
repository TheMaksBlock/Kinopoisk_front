<template>
  <select class="user-options">
    <option value="">Максим Мацкевич</option>
  </select>
</template>

<script>
export default {
  name: "option-selector",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.user-options{
  background-color: black;
  border-color: black;

  color: white;
  font-family: "Exo 2", sans-serif;
  font-weight: 600;
  font-size: 16px;

  padding-left: 20px;
}
</style>