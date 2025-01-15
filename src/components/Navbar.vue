<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Navbar",
});
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li><router-link to="/" exact-active-class="active" class="nav-item">Home</router-link></li>
      <li><router-link to="/store" exact-active-class="active" class="nav-item">Store</router-link></li>
      <li><router-link to="/about" exact-active-class="active" class="nav-item">About Us</router-link></li>
      <li><router-link to="/contact" exact-active-class="active" class="nav-item">Contact</router-link></li>
    </ul>
  </nav>
</template>

<style scoped>
/* Basic styles for the navigation bar */
nav {
  background-color: #2d3a41;
  padding: 15px 30px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-list {
  display: flex;
  justify-content: space-around;
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  text-decoration: none;
  font-size: 18px;
  color: #fff;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-item:hover {
  background-color: #2c3e50;
  color: #fff;
}
</style>
