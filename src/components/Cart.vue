<script lang="ts">
import { defineComponent } from 'vue';
import { useCartStore } from '../store/cart';

export default defineComponent({
  name: "Cart",
  setup() {
    const cartStore = useCartStore();
    return { cartStore };
  },
});
</script>

<template>
  <div class="cart">
    <h2>Obsah košíka</h2>
    <div v-if="cartStore.cart.length">
      <div v-for="item in cartStore.cart" :key="item.id" class="cart-item">
        <p>{{ item.name }} - {{ item.price }} € x {{ item.quantity }}</p>
        <button @click="cartStore.removeFromCart(item.id)">Odstrániť</button>
      </div>
    </div>
    <p v-else>Košík je prázdny.</p>
    <p class="cart-total">Celková cena: {{ cartStore.totalPrice }} €</p>
  </div>
</template>



