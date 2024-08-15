<template>
  <li>
    <router-link :to="{name:link}"><i :class="icon"></i> {{label}}</router-link>
  </li>
</template>

<script>
export default {
  name: "side-bar-element",
  data() {
    return {

    }
  },
  props:{
    link: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      default: "fa-solid fa-circle"
    }
  }
}
</script>

<style scoped>
</style>