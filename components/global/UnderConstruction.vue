<template>
  <div class="container">
    <NuxtImg src="/wip.jpg" class="image" draggable="false" />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.image {
  width: 100vw;
}
</style>
