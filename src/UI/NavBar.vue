<template>
  <div class="nav">
    <text-input/>
    <div class="user">
      <icon-box/>
      <option-selector/>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/elements/TextInput.vue";
import IconBox from "@/components/elements/IconBox.vue";
import OptionSelector from "@/components/elements/OptionSelector.vue";

export default {
  components: {OptionSelector, IconBox, TextInput},
  name: "nav-bar",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.nav{
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
}

.user {
  display: flex;
}
</style>