<template>
  <div class="preloader-container">
    <div class="preloader-5"></div>
  </div>
</template>

<script setup>
const name = 'preloader'
</script>

<style scoped>
.preloader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}

.preloader-5 {
  display: block;
  position: relative;
  width: 150px;
  height: 150px;
  margin: 30px auto;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #337AB7;
  animation: preloader-5-spin 2s linear infinite;
}

.preloader-5:before {
  content: "";
  position: absolute;
  top: 5px;
  left: 5px;
  right: 5px;
  bottom: 5px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #BFE2FF;
  animation: preloader-5-spin 3s linear infinite;
}

.preloader-5:after {
  content: "";
  position: absolute;
  top: 15px;
  left: 15px;
  right: 15px;
  bottom: 15px;
  border-radius: 50%;
  border: 3px solid transparent;
  border-top-color: #337AB7;
  animation: preloader-5-spin 1.5s linear infinite;
}

@keyframes preloader-5-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
