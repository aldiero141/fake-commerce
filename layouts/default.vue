<template>
  <div class="main">
    <Header />
    <v-main class="body">
      <slot />
    </v-main>
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import Header from "~/components/global/Header.vue";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-items: space-between;
}
.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  min-height: calc(100vh - 10em);
}
</style>
