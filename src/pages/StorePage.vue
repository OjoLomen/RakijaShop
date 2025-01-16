<template>
  <div class="store-container">
    <header class="store-header">
      <h1>Rakija - Shop</h1>
    </header>

    <!-- Product List Section -->
    <section class="product-list-container">
      <ProductList />
    </section>

    <!-- Cart Section -->
    <section class="cart-container">
      <Cart />
    </section>

    <!-- Order Button (Ked pridame nieco do kart) -->
    <section v-if="hasItemsInCart" class="order-button-container">
      <button @click="goToCheckoutPage" class="order-button">Proceed to Order</button>
    </section>
  </div>
</template>

<script lang="ts" setup>
import ProductList from '@/components/ProductList.vue';
import Cart from '@/components/Cart.vue';
import { useCartStore } from '@/store/cart';
import { useRouter } from 'vue-router';
import { computed } from 'vue';

const cartStore = useCartStore();
const router = useRouter();

// Ensure the cart store is initialized and accessible
const hasItemsInCart = computed(() => {
  return cartStore.cart && cartStore.cart.length > 0;
});

// Store cart data in localStorage before navigating to checkout
const goToCheckoutPage = () => {
  // Store the cart contents in localStorage for use in ThankYouPage
  localStorage.setItem('cart', JSON.stringify(cartStore.cart));

  // Clear the cart when proceeding to order
  cartStore.clearCart();

  // Navigate to the ThankYouPage
  router.push('/thank-you');
};
</script>

<style scoped>
@import '@/assets/main.css';
</style>
