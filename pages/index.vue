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

    <TopNavigation @navigate="handleNavigation($event)" />

    <div v-if="items" class="container">
      <Transition name="fade" mode="out-in">
        <div v-if="loading" class="loader"></div>
        <div v-else class="container-grid">
          <Card v-for="item in items" class="product-card">
            <div class="image">
              <img :src="item.image" class="img" />
            </div>
            <template v-slot:footer>
              <div class="info">
                <h4>{{ truncateString(item.title, 34) }}</h4>
              </div>
              <div class="card-footer">
                <p>{{ formatCurrency(item.price) }}</p>
                <p>
                  <Icon
                    name="material-symbols:kid-star"
                    style="color: #f4d60b"
                  />
                  {{ item.rating.rate }} ({{ item.rating.count }})
                </p>
              </div>
            </template>
          </Card>
        </div>
      </Transition>
    </div>
  </div>
</template>

<script lang="ts" setup>
import TopNavigation from "~/components/global/TopNavigation.vue";
import { truncateString, formatCurrency } from "~/utils/helpers";
import Card from "~/components/ui/Card.vue";
import type { IProduct } from "~/model/product";

const tab = ref<string>("all");
const items = ref<IProduct[]>([]);
const loading = ref<boolean>(false);

const carouselRef = ref();
const carouselItems = ["/img1.jpg", "/img2.jpg", "/img3.jpg"];

const fetchData = async () => {
  loading.value = true;
  const url =
    tab.value == "all"
      ? `https://fakestoreapi.com/products`
      : `https://fakestoreapi.com/products/category/${tab.value}`;
  const { data, status } = await useFetch(url);
  if (status.value == "success" && data.value) {
    items.value = data.value as IProduct[];
    loading.value = false;
  } else {
    loading.value = false;
  }
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
}

.container {
  display: flex;
  justify-content: center;
  align-items: start;
  margin: 2em 0;
  margin-top: 4em;
  min-height: 40vh;
  min-width: 100vw;
  &-grid {
    display: grid;
    grid-template-columns: repeat(4, 10em);
    gap: 2em;
    place-items: center;
    min-width: fit-content;
  }
}
.product-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1em;
  border-radius: 0.5em;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  width: 14em;
  height: 18em;
  font-size: 0.75rem;
  background-color: white;
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
  width: 100%;
  height: 80px;
}

.card {
  &-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.6125rem;
  }
}

.info {
  height: 3em;
  margin-bottom: 1em;
}

.img {
  max-height: 100px;
  max-width: 100px;
}

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1em;
  &-img {
    width: calc(100vw - 2em);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* HTML: <div class="loader"></div> */
.loader {
  width: 17px;
  aspect-ratio: 1;
  border-radius: 50%;
  background: var(--primary);
  display: grid;
  animation: l22-0 2s infinite linear;
}
.loader:before,
.loader:after {
  content: "";
  grid-area: 1/1;
  margin: 15%;
  border-radius: 50%;
  background: inherit;
  transform: rotate(0deg) translate(150%);
  animation: l22 1s infinite;
}
.loader:after {
  animation-delay: -0.5s;
}
@keyframes l22-0 {
  100% {
    transform: rotate(1turn);
  }
}
@keyframes l22 {
  100% {
    transform: rotate(1turn) translate(150%);
  }
}
</style>
