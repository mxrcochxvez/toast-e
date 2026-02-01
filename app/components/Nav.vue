<template>
	<nav class="fixed top-0 left-0 right-0 z-[1000] py-3 px-4 bg-white/80 backdrop-blur-md border-b border-cream/50 transition-all duration-300">
		<div class="max-w-7xl mx-auto flex items-center justify-between">
			<NuxtLink to="/" class="flex items-center gap-2 group">
				<NuxtImg src="/logo.png" alt="Toast-E" class="h-12 w-auto transform transition-transform group-hover:scale-105" />
				<span class="font-serif text-xl font-bold text-espresso ml-2">Toast-e</span>
			</NuxtLink>
			
			<div class="flex items-center gap-6">
				<!-- Nav Links -->
				<div class="hidden md:flex items-center gap-6">
					<a href="/#menu" class="text-mocha font-medium px-4 py-2 rounded-full hover:bg-cream/50 hover:text-secondary transition-all duration-300 relative group text-sm uppercase tracking-wide">
						Menu
						<span class="absolute bottom-1 left-1/2 w-0 h-0.5 nav-underline transition-all duration-300 transform -translate-x-1/2 group-hover:w-1/2"></span>
					</a>
					<NuxtLink to="/shop" class="text-mocha font-medium px-4 py-2 rounded-full hover:bg-cream/50 hover:text-secondary transition-all duration-300 relative group text-sm uppercase tracking-wide">
						Shop
						<span class="absolute bottom-1 left-1/2 w-0 h-0.5 nav-underline transition-all duration-300 transform -translate-x-1/2 group-hover:w-1/2"></span>
					</NuxtLink>
					<a href="/#about" class="text-mocha font-medium px-4 py-2 rounded-full hover:bg-cream/50 hover:text-secondary transition-all duration-300 relative group text-sm uppercase tracking-wide">
						Our Story
						<span class="absolute bottom-1 left-1/2 w-0 h-0.5 nav-underline transition-all duration-300 transform -translate-x-1/2 group-hover:w-1/2"></span>
					</a>
				</div>

				<!-- Cart Button -->
				<NuxtLink 
					to="/cart" 
					:class="[
						'relative flex items-center justify-center w-12 h-12 rounded-full bg-cream/50 hover:bg-secondary hover:text-white transition-all duration-300 group',
						cartBounce ? 'animate-cart-bounce' : ''
					]"
				>
					<IconsIconCart :size="24" class="transition-transform group-hover:scale-110" />
					
					<!-- Cart Count Badge -->
					<Transition name="badge-pop">
						<span 
							v-if="cartCount > 0"
							class="absolute -top-1 -right-1 w-6 h-6 badge-burnt text-xs font-bold rounded-full flex items-center justify-center shadow-lg"
						>
							{{ cartCount > 99 ? '99+' : cartCount }}
						</span>
					</Transition>
				</NuxtLink>
			</div>
		</div>
	</nav>
</template>

<script setup lang="ts">
const { cartCount, cartBounce } = useCart();
</script>

<style scoped>
.animate-cart-bounce {
	animation: cartBounce 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

@keyframes cartBounce {
	0% { transform: scale(1); }
	25% { transform: scale(1.3) rotate(-5deg); }
	50% { transform: scale(0.9) rotate(5deg); }
	75% { transform: scale(1.1) rotate(-2deg); }
	100% { transform: scale(1) rotate(0deg); }
}

.badge-pop-enter-active {
	animation: badgePop 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}

.badge-pop-leave-active {
	transition: all 0.2s ease;
}

.badge-pop-leave-to {
	opacity: 0;
	transform: scale(0);
}

@keyframes badgePop {
	0% { transform: scale(0); opacity: 0; }
	50% { transform: scale(1.3); }
	100% { transform: scale(1); opacity: 1; }
}
</style>
