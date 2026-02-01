<template>
	<section id="menu" class="py-24 px-4 bg-vanilla relative overflow-hidden">
		<!-- Decorative Background -->
		<div class="absolute top-0 left-0 right-0 h-96 bg-white/50 pointer-events-none"></div>

		<div class="relative z-10 max-w-7xl mx-auto">
			<div class="text-center mb-20">
				<h2 class="font-serif text-5xl md:text-7xl font-bold text-espresso mb-8 leading-tight">
					Meet Our <span class="text-golden">Toast-tastic</span> Creations
				</h2>
				<p class="font-sans text-xl text-mocha max-w-3xl mx-auto leading-relaxed">
					Each slice has been personally vetted by our chief toast enthusiast. No piece of bread leaves this kitchen without a proper pep talk.
				</p>
				</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
				<MenuItem
					v-for="item in menuItems"
					:key="item.name"
					:emoji="item.emoji"
					:tag="item.tag"
					:name="item.name"
					:description="item.description"
					:price="item.price"
				/>
			</div>

			<!-- View Full Menu Link -->
			<div class="text-center mt-16">
				<NuxtLink 
					to="/shop" 
					class="inline-flex items-center gap-3 btn-burnt px-10 py-5 rounded-full font-bold text-xl transition-all hover:shadow-xl transform hover:-translate-y-1 active:scale-95"
				>
					<span>View Full Menu</span>
					<IconsIconArrowRight :size="20" class="transform group-hover:translate-x-1 transition-transform" />
				</NuxtLink>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
// Nuxt auto-imports components

const menuItems = [
	{
		emoji: '🥑',
		tag: 'Best Seller',
		name: 'The Avo-lanche',
		description: "Smashed avocado so fresh it's still introducing itself to people at parties.",
		price: '$12',
	},
	{
		emoji: '🍓',
		tag: 'Seasonal',
		name: 'Berry Nice Toast',
		description: "Strawberries, blueberries, and a toast that's berry excited to meet you.",
		price: '$10',
	},
	{
		emoji: '🍌',
		tag: 'Customer Fave',
		name: 'Banana Split-ish',
		description: "Bananas, honey, and toast that's gone bananas (in a good way).",
		price: '$9',
	},
	{
		emoji: '🥜',
		tag: 'Protein Power',
		name: 'Nutty Professor',
		description: "Peanut butter, bananas, and toast that's smarter than your average bread.",
		price: '$11',
	},
];
</script>

<style module lang="scss">
	/* Tailwind utilities handle most styles */
</style>
