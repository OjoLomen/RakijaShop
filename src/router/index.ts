import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../pages/HomePage.vue';
import StorePage from '../pages/StorePage.vue';
import AboutPage from '../pages/AboutPage.vue';
import ContactPage from '../pages/ContactPage.vue';
import CartPage from '../pages/CartPage.vue';
import ThankYouPage from '../pages/ThankYouPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/store',
      name: 'store',
      component: StorePage,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactPage,
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage,
    },
    {
      path: '/thank-you',
      name: 'thank-you',
      component: ThankYouPage,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutPage,
    },
  ],
});

export default router;
