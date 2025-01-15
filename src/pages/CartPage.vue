<template>
  <div class="cart-container">
    <h1>Your Cart</h1>

    <!-- Cart Items List -->
    <div v-if="cartItems.length === 0">
      <p>Your cart is empty.</p>
    </div>
    <div v-else>
      <div class="cart-item" v-for="item in cartItems" :key="item.id">
        <img :src="`/public/${item.image}`" :alt="item.name" class="cart-item-image" />
        <div class="cart-item-info">
          <h3>{{ item.name }}</h3>
          <p>${{ item.price.toFixed(2) }}</p>
          <input
              type="number"
              v-model="item.quantity"
              min="1"
              class="quantity-input"
              @change="updateQuantity(item)"
          />
          <button @click="removeItem(item)" class="remove-button">Remove</button>
        </div>
      </div>

      <!-- Total Price -->
      <div class="total-price">
        <h3>Total: ${{ totalPrice.toFixed(2) }}</h3>
      </div>

      <!-- Checkout Button -->
      <button @click="checkout" class="checkout-button">Proceed to Checkout</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCartStore } from '../store/cart.ts'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'CartPage',
  setup() {
    const cartStore = useCartStore()
    const router = useRouter()

    // Cart items and total price from store
    const cartItems = cartStore.cart
    const totalPrice = cartStore.totalPrice

    // Update quantity of item
    const updateQuantity = (item: { id: number, quantity: number }) => {
      cartStore.updateQuantity(item.id, item.quantity)
    }

    // Remove item from cart
    const removeItem = (item: { id: number }) => {
      cartStore.removeFromCart(item.id)
    }

    // Proceed to Checkout
    const checkout = () => {
      console.log('Proceeding to checkout');  // Debugging log

      cartStore.clearCart()  // Clear the cart after checkout
      console.log('Cart after clearing:', cartStore.cart);  // Debugging log

      router.push('/thank-you') // Redirect to ThankYouPage
    }

    return {
      cartItems,
      totalPrice,
      updateQuantity,
      removeItem,
      checkout
    }
  }
})
</script>
