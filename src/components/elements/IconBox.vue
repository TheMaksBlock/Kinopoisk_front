<template>
  <div class="user-avatar">
    <span class="user-initials">ММ</span>
  </div>
</template>

<script>
export default {
  name: "icon-box",
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.user-avatar{
  width: 56px;
  height: 56px;
  border-radius: 10px;
  background-color: rgba(123, 97, 255, 1);

  display: flex;
  align-items: center;
  justify-content: center;
}

.user-initials{
  font-size: 20px;
  font-weight: bold;
  color: white;
}
</style>