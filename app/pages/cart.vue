<template>
	<div class="min-h-screen bg-vanilla bg-grain">
		<Nav />
		
		<main class="pt-24 pb-16 px-4">
			<div class="max-w-4xl mx-auto">
				<!-- Header -->
				<div class="text-center mb-12">
					<NuxtLink to="/shop" class="inline-flex items-center gap-2 text-mocha hover:text-secondary transition-colors mb-8">
						<IconsIconArrowLeft :size="20" />
						<span>Continue Shopping</span>
					</NuxtLink>
					
					<h1 class="font-serif text-5xl md:text-6xl font-bold text-espresso mb-4">
						Your Cart
					</h1>
					<p class="font-sans text-lg text-mocha">
						{{ cartCount }} item{{ cartCount !== 1 ? 's' : '' }} ready to make you happy
					</p>
				</div>

				<!-- Empty State -->
				<div v-if="cartItems.length === 0" class="text-center py-20">
					<div class="w-24 h-24 mx-auto mb-8 rounded-full bg-cream flex items-center justify-center">
						<IconsIconCart :size="48" class="text-mocha" />
					</div>
					<h2 class="font-serif text-3xl font-bold text-espresso mb-4">Your cart is empty</h2>
					<p class="text-mocha mb-8 max-w-md mx-auto">
						Looks like you haven't added anything yet. Browse our menu to find something delicious!
					</p>
					<NuxtLink 
						to="/shop" 
						class="inline-flex items-center gap-2 btn-burnt px-8 py-4 rounded-full font-bold text-lg transition-all hover:shadow-xl transform hover:-translate-y-1"
					>
						<span>Start Shopping</span>
						<IconsIconArrowRight :size="20" />
					</NuxtLink>
				</div>

				<!-- Cart Items -->
				<div v-else class="space-y-6">
					<TransitionGroup name="cart-item">
						<div
							v-for="item in cartItems"
							:key="item.id"
							class="bg-white rounded-2xl p-6 shadow-lg border border-cream flex items-center gap-6 transition-all hover:shadow-xl"
						>
							<!-- Item indicator -->
							<div class="w-12 h-12 rounded-full bg-cream flex-shrink-0 flex items-center justify-center">
								<IconsIconStar :size="24" class="text-golden" />
							</div>
							
							<!-- Info -->
							<div class="flex-1 min-w-0">
								<h3 class="font-serif text-xl font-bold text-espresso truncate">{{ item.name }}</h3>
								<p class="text-mocha">${{ item.price }} each</p>
							</div>

							<!-- Quantity Controls -->
							<div class="flex items-center gap-3 bg-cream/50 rounded-full px-2 py-1">
								<button 
									@click="updateQuantity(item.id, item.quantity - 1)"
									class="w-8 h-8 rounded-full bg-white text-espresso font-bold flex items-center justify-center hover:bg-secondary hover:text-white transition-colors shadow-sm"
								>
								<IconsIconMinus :size="16" />
								</button>
								<span class="w-8 text-center font-bold text-espresso">{{ item.quantity }}</span>
								<button 
									@click="updateQuantity(item.id, item.quantity + 1)"
									class="w-8 h-8 rounded-full bg-white text-espresso font-bold flex items-center justify-center hover:bg-secondary hover:text-white transition-colors shadow-sm"
								>
									<IconsIconPlus :size="16" />
								</button>
							</div>

							<!-- Item Total -->
							<div class="text-right flex-shrink-0 w-20">
								<span class="font-serif text-xl font-bold text-golden">
									${{ item.price * item.quantity }}
								</span>
							</div>

							<!-- Remove Button -->
							<button 
								@click="removeFromCart(item.id)"
								class="w-10 h-10 rounded-full bg-red-100 text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white transition-colors flex-shrink-0"
								title="Remove item"
							>
								<IconsIconX :size="20" />
							</button>
						</div>
					</TransitionGroup>

					<!-- Cart Summary -->
					<div class="bg-white rounded-3xl p-8 shadow-xl border border-cream mt-10">
						<div class="flex items-center justify-between mb-6">
							<span class="font-sans text-lg text-mocha">Subtotal</span>
							<span class="font-serif text-3xl font-bold text-espresso">${{ cartTotal }}</span>
						</div>
						
						<div class="flex items-center justify-between mb-8 pb-6 border-b border-cream">
							<span class="font-sans text-mocha">Good vibes tax</span>
							<span class="font-sans text-mocha">Free</span>
						</div>

						<button 
							@click="checkout"
							class="w-full btn-burnt py-5 rounded-full font-bold text-xl transition-all hover:shadow-xl transform hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3"
						>
							<span>Checkout</span>
							<IconsIconArrowRight :size="20" />
						</button>

						<button 
							@click="clearCart"
							class="w-full mt-4 py-3 text-mocha hover:text-red-500 transition-colors font-medium"
						>
							Clear Cart
						</button>
					</div>
				</div>

				<!-- Fun Checkout Modal -->
				<Teleport to="body">
					<Transition name="modal">
						<div v-if="showCheckoutModal" class="fixed inset-0 z-50 flex items-center justify-center p-4">
							<div class="absolute inset-0 bg-espresso/80 backdrop-blur-sm" @click="showCheckoutModal = false"></div>
							<div class="relative bg-white rounded-3xl p-10 max-w-md w-full text-center shadow-2xl transform">
								<div class="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
									<IconsIconCheck :size="40" class="text-green-500" />
								</div>
								<h2 class="font-serif text-3xl font-bold text-espresso mb-4">Success!</h2>
								<p class="text-mocha mb-8">
									This is a demo, so there's no real checkout. But imagine how delicious that toast would be!
								</p>
								<button 
									@click="showCheckoutModal = false"
									class="btn-burnt px-8 py-3 rounded-full font-bold transition-all hover:shadow-lg"
								>
									Got it
								</button>
							</div>
						</div>
					</Transition>
				</Teleport>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

useHead({
	title: 'Cart | Toast-E',
	meta: [
		{ name: 'description', content: 'Review your cart and checkout!' }
	]
});

const { cartItems, cartCount, cartTotal, removeFromCart, updateQuantity, clearCart } = useCart();

const showCheckoutModal = ref(false);

const checkout = () => {
	showCheckoutModal.value = true;
};
</script>

<style scoped>
.cart-item-enter-active,
.cart-item-leave-active {
	transition: all 0.4s ease;
}

.cart-item-enter-from {
	opacity: 0;
	transform: translateX(-30px);
}

.cart-item-leave-to {
	opacity: 0;
	transform: translateX(30px) scale(0.9);
}

.modal-enter-active,
.modal-leave-active {
	transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
	opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
	transform: scale(0.9);
}

.animate-bounce-slow {
	animation: bounce-slow 2s ease-in-out infinite;
}

@keyframes bounce-slow {
	0%, 100% { transform: translateY(0); }
	50% { transform: translateY(-15px); }
}
</style>
