<template>
  <li>
    <router-link :to="{name:link}"><i :class="icon"></i> {{label}}</router-link>
  </li>
</template>

<script>
export default {
  name: "side-bar-element",
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
.sidebar li{
  padding-bottom: 40px;
}
.router-link-active{
  color: var(--primary)!important;
}

.sidebar li a{
  color: var(--secondary);
  font-size: 18px;
  font-weight: var(--semiBold);
  line-height: 24px;
}
</style>