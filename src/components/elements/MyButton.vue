<template>
  <button :class="icon" @click="$emit('buttonClick')">{{ text }}</button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    text: {
      type: String,
    },
    icon: {
      type: String,
    }
  }
}
</script>

<style scoped>
button {
  width: 133px;
  height: 56px;

  color: var(--light);
  background-color: var(--graphite);
  border: 0;
}

</style>