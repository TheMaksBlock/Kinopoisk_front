<template>
  <div class="nav">
    <TextInput @input="updateSearch" @enter="enterSearch"/>
    <div class="user">
      <IconBox/>
      <OptionSelector/>
    </div>
  </div>
</template>

<script setup>
import TextInput from "@/components/elements/TextInput.vue";
import IconBox from "@/components/elements/IconBox.vue";
import OptionSelector from "@/components/elements/OptionSelector.vue";
import {useSearchStore} from "@/stores.js";
import {useRouter} from "vue-router";

const searchStore = useSearchStore();

const updateSearch = (newSearchValue) => {
  searchStore.searchString = newSearchValue;
};

const router = useRouter();
const enterSearch = () => {
  if (searchStore.searchString.trim() !== "")
    router.push({name: "search", query: {s: searchStore.searchString}})
}

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
