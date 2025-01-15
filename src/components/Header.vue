<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Header"
})
</script>

<template>
  <header>
    <div class="header-content">
      <h1>Welcome to Our Serbian Shop</h1>
      <p>We offer a wide range of products from Serbia.</p>
    </div>
  </header>
</template>

<style scoped>
/* Header Styles */
header {
  background-color: #2c3e50;
  color: #fff;
  padding: 30px;
  text-align: center;
}

header h1 {
  font-size: 36px;
  margin: 0;
}

header p {
  font-size: 18px;
  margin-top: 10px;
}
</style>
