<template>
  <div class="nav">
    <TextInput />
    <div class="user">
      <IconBox />
      <OptionSelector />
    </div>
  </div>
</template>

<script setup>
import TextInput from "@/components/elements/TextInput.vue";
import IconBox from "@/components/elements/IconBox.vue";
import OptionSelector from "@/components/elements/OptionSelector.vue";
</script>

<style scoped>
.nav {
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.user {
  display: flex;
}
</style>
