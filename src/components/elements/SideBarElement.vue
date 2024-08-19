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
.sidebar li{
  padding-bottom: 40px;
}
.router-link-active{
  color: rgba(123, 97, 255, 1)!important;
}

.sidebar li a{
  color: rgba(144, 158, 175, 1);
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
}
</style>