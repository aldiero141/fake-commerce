<template>
  <div class="header">
    <div class="sub-header logo" @click="handleHomeNavigation">
      <img
        src="~/assets/images/logo.png"
        alt="logo"
        width="50px"
        height="50px"
      />
      <h1 style="color: var(--primary)">Lovely Online Shop</h1>
    </div>
    <div class="sub-header searchbar" style="width: 35em">
      <Search v-model="search" placeholder="Search Items" />
    </div>
    <div class="sub-header">
      <div class="sub-header menu">
        <div class="nav-item" v-for="(item, index) in path" :key="index">
          <a :href="item.to.toLowerCase()">{{ item.name }}</a>
        </div>
      </div>
      <div class="buttons">
        <Button variant="secondary">Login</Button>
        <Button variant="primary">Register</Button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Search from "../ui/Search.vue";
import Button from "../ui/Button.vue";

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
  {
    name: "Customer Support",
    to: "/customer-support",
  },
];

const search = ref("");

const handleHomeNavigation = () => {
  navigateTo("/");
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.5em 1em;
  background-color: var(--secondary-bg-color);
  color: var(--black);
  border-bottom: 1px solid var(--tertiary);
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

.buttons {
  display: flex;
  gap: 0.5em;
  padding-left: 0.5em;
  margin-left: 0.5em;
  margin-right: 0.5em;
  border-left: 1px solid #f2f2f2;
}

.logo {
  cursor: pointer;
}

h1 {
  font-size: 1rem;
}

@media only screen and (max-width: 500px) {
  .header {
    min-height: 5em;
  }
  .buttons {
    display: none;
  }
  .menu {
    display: none;
  }
  .logo {
    h1 {
      display: none;
    }
  }
  .searchbar {
    width: 80vw !important;
  }
}
</style>
