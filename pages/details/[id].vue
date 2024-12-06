<template>
  <div class="wrapper">
    <div v-if="item" class="container">
      <div class="detail">
        <div class="title">
          <h1>{{ item.title }}</h1>
        </div>

        <div class="content">
          <div class="image-container">
            <NuxtImg :src="item.image" class="img" />
          </div>

          <div class="info">
            <div>
              <h1 class="price">{{ formatCurrency(item.price) }}</h1>
              <p>
                <Icon name="material-symbols:kid-star" style="color: #f4d60b" />
                {{ item.rating.rate }} ({{ item.rating.count }} rating)
              </p>
              <div class="description">
                <p>{{ item.description }}</p>
              </div>
            </div>

            <div class="button-container">
              <div class="buttons">
                <Button
                  variant="tertiary"
                  @click="handleButtonQuantity('substract')"
                >
                  <Icon
                    name="material-symbols:chevron-left"
                    style="color: var(--primary)"
                /></Button>
                <div class="input-containter">
                  <Input
                    type="number"
                    v-model="quantity"
                    :style="'text-align: center;'"
                    :disabled="true"
                  />
                </div>
                <Button variant="tertiary" @click="handleButtonQuantity('add')">
                  <Icon
                    name="material-symbols:chevron-right"
                    style="color: var(--primary)"
                /></Button>
              </div>
              <div class="buttons">
                <Button variant="secondary" :style="'font-size: 0.75em'">
                  <Icon
                    name="material-symbols:garden-cart-rounded"
                    style="color: var(--white); margin-right: 0.5em"
                  />
                  Add to Cart</Button
                >
                <Button variant="primary" :style="'font-size: 0.75em'"
                  >Purchase Now</Button
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/ui/Button.vue";
import Input from "~/components/ui/Input.vue";
import type { IProduct } from "~/model/product";

const route = useRoute();
const item = ref<IProduct>();
const quantity = ref<number>(1);

const fetchData = async () => {
  const { data } = await useFetch(
    `https://fakestoreapi.com/products/${route.params.id}`
  );
  if (!data) return;
  item.value = data.value as IProduct;
  return data;
};

const handleButtonQuantity = (type: string) => {
  if (type == "add") {
    return quantity.value < 100
      ? (quantity.value = Number(quantity.value) + 1)
      : null;
  }
  if (type == "substract") {
    return quantity.value > 0
      ? (quantity.value = Number(quantity.value) - 1)
      : null;
  }
};

// const quantityErrorMessage = computed(() => {
//   return quantity.value < 1 ? "Quantity cannot be less than 0" : "";
// });

onMounted(async () => {
  nextTick(async () => {
    await fetchData();
  });
});
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  margin: 1em;
}

.title {
  margin-bottom: 2em;
}

.detail {
  display: flex;
  flex-direction: column;
}

.content {
  display: flex;
  flex-direction: row;
  gap: 2em;
}

.info {
  max-width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.price {
  font-size: 2rem;
}

.description {
  margin: 2em 0;
}

.container {
  display: flex;
  flex-direction: row;
  padding: 2em;
  border: 1px solid var(--secondary-bg-color);
  border-radius: 1em;
  background-color: var(--secondary-bg-color);
  width: 70vw;

  .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 2em;
    width: 500px;
    height: 500px;
    border-radius: 1em;
    background-color: var(--white);
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
  .button-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    .buttons {
      display: flex;
      align-items: center;
      gap: 0.5em;
    }
  }
  .input-containter {
    min-width: 4em;
    width: 4em;
  }
}

@media only screen and (max-width: 500px) {
  .container {
    .image-container {
      width: 200px;
      height: 200px;
    }
  }
  .img {
    width: 50px;
  }
  .content {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .button-container {
    flex-direction: column;
    .buttons:last-child {
      flex-direction: column;
      justify-content: space-between;
    }
  }
}
</style>
