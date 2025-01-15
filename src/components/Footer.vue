<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: "Footer"
});
</script>

<template>
  <footer>
    <div class="footer-content">
      <p>&copy; 2025 Serbian Shop. All Rights Reserved.</p>
      </div>
  </footer>
</template>

<style scoped>
/* Footer Styles */
footer {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  text-align: center;
  width: 100%;
  position: relative;
  bottom: 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

footer p {
  font-size: 16px;
  margin: 10px 0;
}

@media (max-width: 600px) {

}
</style>