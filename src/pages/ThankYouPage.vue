<template>
  <div class="thank-you-container">
    <h1>Thank You for Your Order!</h1>
    <br>
    <p>Your order has been successfully placed. Below are the details of your order:</p>
    <br>

    <div class="order-summary">
      <h2>Ordered Products:</h2>
      <br>
      <div v-if="cartItems.length === 0">
        <p>No products ordered.</p>
      </div>
      <div v-else>
        <ul>
          <li v-for="item in cartItems" :key="item.id" class="order-item">
            <span>{{ item.name }} - Quantity: {{ item.quantity }} - ${{ (item.price * item.quantity).toFixed(2) }}</span>
          </li>
        </ul>
      </div>
    </div>
    <br>     <br>     <br>     <br>
    <div class="total-price">
      <br>
      <h3>Total Price: ${{ totalPrice.toFixed(2) }}</h3>
    </div>
    <br>
    <button @click="goBackHome" class="go-home-button">Go Back to Store</button>
  </div>
  <br>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useCartStore } from '../store/cart.ts'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'ThankYouPage',
  setup() {
    const cartStore = useCartStore()
    const router = useRouter()

    // On mounted, retrieve cart items from localStorage
    const cartItems = JSON.parse(localStorage.getItem('cart') || '[]');

    // Calculate the total price based on the cart items and their quantities
    const totalPrice = cartItems.reduce((sum: number, item: any) => sum + (item.price * item.quantity), 0);

    // Method to go back to the store
    const goBackHome = () => {
      router.push("/store") // Navigate to the store page instead of home page
    }

    return {
      cartItems,
      totalPrice,
      goBackHome
    }
  }
})
</script>

<style scoped>
@import '@/assets/main.css';
</style>
