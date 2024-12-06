<template>
  <div>
    <Products />
  </div>
</template>

<script lang="ts" setup>
import Products from "~/components/global/Products.vue";
import { useProductsStore } from "~/store/products";
const store = useProductsStore();
store.getCart();
</script>

<style></style>
