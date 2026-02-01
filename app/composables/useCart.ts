import { ref, watch, computed } from 'vue';

export interface CartItem {
	id: string;
	emoji: string;
	name: string;
	price: number;
	quantity: number;
}

// Global reactive state
const cartItems = ref<CartItem[]>([]);
const cartBounce = ref(false);

// Initialize from localStorage on first load
if (import.meta.client) {
	const stored = localStorage.getItem('toast-e-cart');
	if (stored) {
		try {
			cartItems.value = JSON.parse(stored);
		} catch (e) {
			cartItems.value = [];
		}
	}
}

// Persist to localStorage on changes
watch(cartItems, (items) => {
	if (import.meta.client) {
		localStorage.setItem('toast-e-cart', JSON.stringify(items));
	}
}, { deep: true });

export function useCart() {
	const cartCount = computed(() => 
		cartItems.value.reduce((sum, item) => sum + item.quantity, 0)
	);

	const cartTotal = computed(() =>
		cartItems.value.reduce((sum, item) => sum + (item.price * item.quantity), 0)
	);

	const addToCart = (item: Omit<CartItem, 'quantity'>) => {
		const existing = cartItems.value.find(i => i.id === item.id);
		
		if (existing) {
			existing.quantity++;
		} else {
			cartItems.value.push({ ...item, quantity: 1 });
		}

		// Trigger bounce animation
		cartBounce.value = true;
		setTimeout(() => {
			cartBounce.value = false;
		}, 600);
	};

	const removeFromCart = (id: string) => {
		const index = cartItems.value.findIndex(i => i.id === id);
		if (index > -1) {
			cartItems.value.splice(index, 1);
		}
	};

	const updateQuantity = (id: string, quantity: number) => {
		const item = cartItems.value.find(i => i.id === id);
		if (item) {
			if (quantity <= 0) {
				removeFromCart(id);
			} else {
				item.quantity = quantity;
			}
		}
	};

	const clearCart = () => {
		cartItems.value = [];
	};

	return {
		cartItems,
		cartCount,
		cartTotal,
		cartBounce,
		addToCart,
		removeFromCart,
		updateQuantity,
		clearCart,
	};
}
