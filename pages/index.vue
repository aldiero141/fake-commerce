<template>
  <div class="wrapper">
    <UCarousel
      v-slot="{ item }"
      ref="carouselRef"
      :items="carouselItems"
      :ui="{ item: 'basis-full' }"
      class="rounded-lg overflow-hidden"
      arrows
    >
      <NuxtImg :src="item" class="w-full" draggable="false" />
    </UCarousel>

    <Products />
  </div>
</template>

<script lang="ts" setup>
import Products from "~/components/global/Products.vue";

const carouselRef = ref();
const carouselItems = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];
onMounted(async () => {
  nextTick(async () => {
    setInterval(() => {
      if (!carouselRef.value) return;
      if (carouselRef.value.page === carouselRef.value.pages) {
        return carouselRef.value.select(0);
      }
      carouselRef.value.next();
    }, 3000);
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
