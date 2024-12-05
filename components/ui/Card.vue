<template>
  <div class="card">
    <slot />
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.card {
  height: fit-content;
  width: fit-content;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
</style>
