<template>
  <div class="navigation">
    <div class="nav-item" v-for="(item, i) in categories" :key="i">
      <div
        class="item"
        :class="{ 'item-active': i == isActive }"
        :key="item"
        @click="handleClick(i)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(["navigate"]);
const isActive = ref<number>(0);
const categories: string[] = [
  "all",
  "electronics",
  "jewelery",
  "men's clothing",
  "women's clothing",
];

const handleClick = (index: number) => {
  isActive.value = index;
  emit("navigate", categories[index]);
};
</script>

<style lang="scss" scoped>
.navigation {
  display: flex;
  min-width: 100vw;
  flex-direction: row;
  align-items: center;
  background-color: var(--secondary-bg-color);
  color: var(--black);
  border-bottom: 1px solid var(--tertiary);
  margin-bottom: 1em;

  .nav-item {
    gap: 1rem;
    .item {
      padding: 1em;
      text-decoration: none;
      text-transform: capitalize;
      color: var(--black);
      font-size: 1rem;
      border-bottom: 2px solid var(--secondary-bg-color);
      &-active {
        border-bottom: 2px solid var(--primary);
      }
      &:hover {
        color: var(--secondary);
        cursor: pointer;
      }
    }
  }
}

.sub-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--secondary-bg-color);
  color: var(--black);
  font-size: 1rem;
}

.menu {
  gap: 2rem;
}

h1 {
  font-size: 1rem;
}
</style>
