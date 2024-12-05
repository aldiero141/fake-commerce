<template>
  <div>
    <TopNavigation @navigate="handleNavigation($event)" />
    <div v-if="items" class="container">
      <Card v-for="item in items" class="product-card">
        <div class="image">
          <img :src="item.image" height="160" />
        </div>
        <div class="info">
          <h4>{{ item.title }}</h4>
          <p>{{ item.price }}</p>
        </div>
      </Card>
    </div>
    <!-- <Button text="Primary" variant="primary" /> -->
  </div>
</template>

<script lang="ts" setup>
import TopNavigation from "~/components/global/TopNavigation.vue";
// import Button from "~/components/ui/Button.vue";
import Card from "~/components/ui/Card.vue";
import type { IProduct } from "~/model/product";

const tab = ref<string>("electronics");
const items = ref<IProduct[]>([]);

const fetchData = async () => {
  const { data } = await useFetch(
    `https://fakestoreapi.com/products/category/${tab.value}`
  );
  if (data) items.value = data.value;

  console.log(items.value);
};

watch(tab, () => {
  fetchData();
});

const handleNavigation = (e: string) => {
  tab.value = e;
};

onMounted(() => {
  nextTick(() => {
    fetchData();
  });
});
</script>

<style lang="scss" scoped>
.container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2em;
  justify-items: center;
  min-width: fit-content;
  margin: 4em;
}
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 16em;
  height: 22em;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transform: scale(1.05);
    cursor: pointer;
  }
}
.image {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
}
</style>
