import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

// Typy pre produkt a položku v košíku
interface Product {
    id: number;
    name: string;
    price: number;
    image: string;
}

interface CartItem extends Product {
    quantity: number;
}

export const useCartStore = defineStore('cart', () => {
    // Produkty na sklade
    const products = ref<Product[]>([
        {
            id: 1,
            name: 'Rakija od Dunje',
            price: 10,
            image: 'public/images/dunja.png',
        },
        {
            id: 2,
            name: 'Rakija od Jagode',
            price: 20,
            image: 'public/images/jagoda.png',
        },
        {
            id: 3,
            name: 'Šljivovica ubica',
            price: 30,
            image: 'public/images/sljiva.png',
        },
    ]);

    // Obsah košíka
    const cart = ref<CartItem[]>([]);

    // Pridanie produktu do košíka
    function addToCart(product: Product): void {
        const itemInCart = cart.value.find((item) => item.id === product.id);
        if (itemInCart) {
            itemInCart.quantity += 1;
        } else {
            cart.value.push({ ...product, quantity: 1 });
        }
    }

    // Funkcia aby sa košík clearoval
    function clearCart() {
        cart.value = [];
    }

    // Odstránenie produktu z košíka podľa ID
    function removeFromCart(productId: number): void {
        cart.value = cart.value.filter((item) => item.id !== productId);
    }

    // Výpočet celkovej ceny
    const totalPrice = computed(() =>
        cart.value.reduce((sum, item) => sum + item.price * item.quantity, 0)
    );

    return { products, cart, addToCart, removeFromCart, totalPrice, clearCart };
});
