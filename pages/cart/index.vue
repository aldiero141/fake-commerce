<template>
  <div class="cart-wrapper">
    <h1>My Cart</h1>
    <div v-for="item in cart" :key="item.id">
      <div class="cart-container">
        <div class="item-container">
          <div class="image">
            <NuxtImg :src="item.image" class="img" />
          </div>
          <div class="info">
            <h4>{{ item.title }}</h4>
            <p>{{ formatCurrency(item.price) }}</p>
          </div>
        </div>

        <Button
          variant="tertiary"
          @click="handleRemoveFromCart(item)"
          class="button-remove"
          ><Icon
            class="icon"
            name="material-symbols:delete-rounded"
            style="color: var(--primary); margin-right: 0.5em"
        /></Button>
      </div>
    </div>

    <div class="cart-container total">
      <h4>Total Price</h4>
      <p>{{ formatCurrency(totalPrice) }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { storeToRefs } from "pinia";
import type { IProduct } from "~/model/product";
import { useProductsStore } from "~/store/products";

const store = useProductsStore();
const { cart, totalPrice } = storeToRefs(store);
store.getCart();

const handleRemoveFromCart = (item: IProduct) => {
  store.removeFromCart(item);
  localStorage.setItem("cart", JSON.stringify(cart.value));
};
</script>

<style lang="scss" scoped>
.cart-wrapper {
  display: flex;
  flex-direction: column;
  margin: 2em;
  min-width: 70vw;
  h1 {
    margin: 1em 0;
  }
}
.item-container {
  display: flex;
  gap: 2em;
  align-items: center;
}
.cart-container {
  display: flex;
  justify-content: space-between;

  background-color: var(--white);
  border: 1px solid var(--primary);
  border-radius: 0.5em;
  padding: 1em 2em;
  padding-right: 1em;
  margin-bottom: 1em;
  align-items: center;
  height: 15vh;
  font-size: 1rem;
  h4 {
    font-size: 1rem;
  }
}
.total {
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  background-color: var(--primary);
  color: var(--white);
}
.info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5em;
}

.img {
  width: 50px;
}

.button-remove {
  font-size: 1.5rem;
  align-self: start;
  justify-self: end;
}

.iconify {
  margin: 0 !important;
}

@media only screen and (max-width: 500px) {
  .cart-container {
    height: 20em;
  }
  .item-container {
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
  }
  .img {
    width: 100px;
  }
}
</style>
