<template>
  <div>
    <UnderConstruction />
  </div>
</template>

<script lang="ts" setup>
import UnderConstruction from "~/components/global/UnderConstruction.vue";
import { useProductsStore } from "~/store/products";
const store = useProductsStore();
store.getCart();
</script>

<style></style>
