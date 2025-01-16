<template>
  <div>
    <header class="hero">
      <h1>Welcome to Our Serbian Shop</h1>
      <p>We offer a wide range of products from Serbia. Explore the best of Serbian culture, tradition, and craftsmanship.</p>
      <v-btn @click="goToStore" color="primary">Shop Now</v-btn>
    </header>

    <v-card
        class="mx-auto mt-5"
        prepend-icon="mdi-cart"
        subtitle="The #1 Rakija Store"
        width="400"
    >
      <template v-slot:title>
        <span class="font-weight-black">Welcome to Our Rakija Store</span>
      </template>

      <v-card-text class="bg-surface-light pt-4">
        Discover the finest Rakija from Serbia. We offer a variety of traditional fruit brandies, each crafted with care and dedication. Explore our collection and find your perfect bottle today!
      </v-card-text>
    </v-card>


    <section class="testimonial">
      <h2>What Our Customers Say</h2>
      <div class="testimonial-content">
        <p>"I love the authentic Serbian products. The quality is amazing, and the shipping was super fast!"</p>
        <cite>- Happy Customer</cite>
      </div>
    </section>

    <section class="about">
      <h2>About Us</h2>
      <p>We are dedicated to bringing the finest Serbian products to your doorstep. Whether you are looking for handmade souvenirs, gourmet food, or beautiful clothing, we have something for everyone.</p>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'HomePage',
  setup() {
    const router = useRouter();

    // Redirect do store page ked klikneme na Shop now
    const goToStore = () => {
      router.push('/store');
    };

    return {
      goToStore
    };
  }
});
</script>

<style scoped>
h1 {
  color: #2c3e50;
  font-size: 36px;
}

p {
  font-size: 18px;
}

.hero {
  background: url('https://t4.ftcdn.net/jpg/03/68/27/43/360_F_368274344_b3DqVfAODnjqmpIh5vuJrTkBjHS0XFoz.jpg') no-repeat center center;
  background-size: cover;
  text-align: center;
  padding: 100px 0;
  color: white;
}

.testimonial {
  margin-top: 50px;
  text-align: center;
}

.testimonial-content {
  margin: 10px 0;
}

.about {
  margin-top: 50px;
  text-align: center;
}

.about p {
  font-size: 16px;
  width: 80%;
  margin: 0 auto;
}
</style>
