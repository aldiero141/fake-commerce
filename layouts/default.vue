<template>
  <v-app>
    <Header />
    <v-main class="main">
      <slot />
    </v-main>
    <Footer />
  </v-app>
</template>

<script lang="ts" setup>
import Header from "~/components/global/header.vue";
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
