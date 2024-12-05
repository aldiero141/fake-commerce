<template>
  <div class="header">
    <div class="sub-header">
      <img
        src="~/assets/images/logo.png"
        alt="logo"
        width="50px"
        height="50px"
      />
      <h1>Feather General Store</h1>
    </div>
    <div class="sub-header menu">
      <div class="nav-item" v-for="(item, index) in path" :key="index">
        <a :href="item.to.toLowerCase()">{{ item.name }}</a>
      </div>
    </div>
    <div class="sub-header">
      <Search v-model="search" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from "../ui/Search.vue";

const path = [
  {
    name: "Home",
    to: "/",
  },
  {
    name: "Products",
    to: "/products",
  },
  {
    name: "About",
    to: "/about",
  },
];

const search = ref("");
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  background-color: var(--white);
  color: var(--black);
  border-bottom: 1px solid #f2f2f2;
  margin-bottom: 1em;
}

.sub-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: var(--white);
  color: var(--black);
  font-size: 1rem;
}

.menu {
  gap: 2rem;
}

.nav-item {
  gap: 1rem;
  a {
    text-decoration: none;
    color: var(--black);
    font-size: 1rem;
    &:hover {
      color: var(--primary);
    }
  }
}

h1 {
  font-size: 1rem;
}
</style>
