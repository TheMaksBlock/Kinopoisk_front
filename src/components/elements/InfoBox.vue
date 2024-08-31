<template>
  <div class="info-box">{{ text }}</div>
</template>

<script>
export default {
  name: "info-box",
  props: {
    text: {
      type: String,
      required: true
    },
    color: {
      type: String,
      default: 'var(--green)'
    }
  }
}
</script>

<style scoped>
.info-box {
  border-radius: 6px;
  padding: 2px 8px;
  margin-right: 20px;
  background-color: v-bind(color);
}
</style>