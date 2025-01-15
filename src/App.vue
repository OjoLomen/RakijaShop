<script setup lang="ts">
import Navbar from './components/Navbar.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div id="app">
    <Header /> <!-- Render the Header component -->
    <Navbar />
    <router-view />
    <Footer /> <!-- Render the Footer component -->
  </div>
</template>

<style scoped>
@import '@/assets/main.css';
</style>
