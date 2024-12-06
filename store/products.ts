import { defineStore } from "pinia";
import type { IProduct } from "~/model/product";

export const useProductsStore = defineStore("todos", () => {
  const products = ref<IProduct[]>([]);
  const cart = ref<IProduct[]>([]);

  const totalPrice = computed(() => {
    return cart.value.reduce((prev, curr) => prev + curr.price, 0);
  });

  const addToCart = (product: IProduct) => {
    const newProduct = {
      ...product,
      cartId: Math.random().toString(36).substring(2, 15),
    }
    cart.value.push(newProduct);
  };

  const removeFromCart = (product: IProduct) => {
    cart.value = cart.value.filter((item) => item.cartId !== product.cartId);
  };

  const getCart = () => {
    if (localStorage.getItem("cart")) cart.value = JSON.parse(localStorage.getItem("cart") as string);
  };

  return {
    products,
    cart,
    totalPrice,
    addToCart,
    removeFromCart,
    getCart,
  };
});