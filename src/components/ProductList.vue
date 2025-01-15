<script setup>
import { useCartStore } from '../store/cart';

const cartStore = useCartStore();
</script>

<template>
  <div>
    <h2>Zoznam produktov</h2>
    <ul class="product-list">
      <li v-for="product in cartStore.products" :key="product.id">
        <img :src="product.image" :alt="product.name" />
        <p>{{ product.name }} - {{ product.price }} €</p>
        <button @click="cartStore.addToCart(product)">Pridať do košíka</button>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>

