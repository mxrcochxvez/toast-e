<template>
	<div class="group relative bg-white rounded-3xl p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 border border-transparent hover:border-accent/20 overflow-hidden">
		<!-- Border Animation -->
		<div class="absolute top-0 left-0 right-0 h-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

		<!-- Card Content -->
		<div class="relative z-10">
			
			<span class="inline-block tag-burnt text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider mb-4 shadow-sm">
				{{ tag }}
			</span>

			<h3 class="font-serif text-2xl font-bold text-espresso mb-3 group-hover:text-primary transition-colors">
				{{ name }}
			</h3>

			<p class="font-sans text-mocha mb-8 leading-relaxed">
				{{ description }}
			</p>

			<div class="flex items-center justify-between mt-auto">
				<span class="font-serif text-2xl font-bold text-golden">
					{{ price }}
				</span>
				<button 
					@click="handleAddToCart"
					:class="[
						'px-6 py-2.5 rounded-full font-semibold transition-all duration-300 transform active:scale-95',
						isAdding 
							? 'bg-green-500 text-white scale-105' 
							: 'bg-espresso text-white hover:bg-primary hover:shadow-lg hover:shadow-primary/30'
					]"
				>
					<span v-if="isAdding" class="flex items-center gap-1"><IconsIconCheck :size="16" /> Added</span>
					<span v-else>Add</span>
				</button>
			</div>
		</div>

		<!-- Subtle Background on Hover -->
		<div class="absolute inset-0 bg-cream opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none -z-0"></div>
	</div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
	id?: string;
	emoji: string;
	tag: string;
	name: string;
	description: string;
	price: string;
}

const props = defineProps<Props>();

const { addToCart } = useCart();

const isAdding = ref(false);
const showFlyingEmoji = ref(false);

// Parse price string to number (e.g., "$12" -> 12)
const parsePrice = (priceStr: string): number => {
	return parseFloat(priceStr.replace(/[^0-9.]/g, '')) || 0;
};

// Generate ID from name if not provided
const itemId = props.id || props.name.toLowerCase().replace(/\s+/g, '-');

const handleAddToCart = () => {
	// Add to cart
	addToCart({
		id: itemId,
		emoji: props.emoji,
		name: props.name,
		price: parsePrice(props.price),
	});

	// Show animations
	isAdding.value = true;
	showFlyingEmoji.value = true;

	// Reset button after animation
	setTimeout(() => {
		isAdding.value = false;
	}, 1200);

	// Hide flying emoji
	setTimeout(() => {
		showFlyingEmoji.value = false;
	}, 600);
};
</script>

<style scoped>
.fly-up-enter-active {
	transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.fly-up-enter-from {
	opacity: 1;
	transform: translate(-50%, -50%) scale(1);
}

.fly-up-enter-to {
	opacity: 0;
	transform: translate(-50%, -200%) scale(1.5);
}

.fly-up-leave-active {
	transition: opacity 0.1s;
}

.fly-up-leave-to {
	opacity: 0;
}

:global(.animate-gradient) {
	animation: borderGradient 3s linear infinite;
}

@keyframes borderGradient {
	0% { background-position: 0% 50%; }
	100% { background-position: 300% 50%; }
}
</style>
