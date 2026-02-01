<template>
	<div class="min-h-screen bg-vanilla bg-grain">
		<Nav />
		
		<main class="pt-24 pb-16 px-4">
			<div class="max-w-7xl mx-auto">
				<!-- Header -->
				<div class="text-center mb-16">
					<NuxtLink to="/" class="inline-flex items-center gap-2 text-mocha hover:text-secondary transition-colors mb-8">
						<IconsIconArrowLeft :size="20" />
						<span>Back to Home</span>
					</NuxtLink>
					
					<h1 class="font-serif text-5xl md:text-7xl font-bold text-espresso mb-6">
						The Full <span class="text-golden">Toast Menu</span>
					</h1>
					<p class="font-sans text-xl text-mocha max-w-2xl mx-auto">
						Every slice tells a story. Pick your favorites and let the toast journey begin.
					</p>
				</div>

				<!-- Toast Section -->
				<section class="mb-20">
					<h2 class="font-serif text-3xl font-bold text-espresso mb-8">Toast Creations</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ShopItem
							v-for="item in toastItems"
							:key="item.id"
							v-bind="item"
						/>
					</div>
				</section>

				<!-- Coffee Section -->
				<section class="mb-20">
					<h2 class="font-serif text-3xl font-bold text-espresso mb-8">Coffee Dreams</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ShopItem
							v-for="item in coffeeItems"
							:key="item.id"
							v-bind="item"
						/>
					</div>
				</section>

				<!-- Smoothies Section -->
				<section class="mb-20">
					<h2 class="font-serif text-3xl font-bold text-espresso mb-8">Smoothie Vibes</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ShopItem
							v-for="item in smoothieItems"
							:key="item.id"
							v-bind="item"
						/>
					</div>
				</section>

				<!-- Extras Section -->
				<section>
					<h2 class="font-serif text-3xl font-bold text-espresso mb-8">Cute Extras</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						<ShopItem
							v-for="item in extraItems"
							:key="item.id"
							v-bind="item"
						/>
					</div>
				</section>
			</div>
		</main>

		<Footer />
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Shop | Toast-E',
	meta: [
		{ name: 'description', content: 'Browse our full menu of delicious toast, coffee, smoothies, and cute extras!' }
	]
});

const toastItems = [
	{ id: 'avo-lanche', emoji: '🥑', tag: 'Best Seller', name: 'The Avo-lanche', description: "Smashed avocado so fresh it's still introducing itself at parties.", price: 12 },
	{ id: 'berry-nice', emoji: '🍓', tag: 'Seasonal', name: 'Berry Nice Toast', description: "Strawberries, blueberries, and toast that's berry excited to meet you.", price: 10 },
	{ id: 'banana-split', emoji: '🍌', tag: 'Customer Fave', name: 'Banana Split-ish', description: "Bananas, honey, and toast that's gone bananas (in a good way).", price: 9 },
	{ id: 'nutty-professor', emoji: '🥜', tag: 'Protein Power', name: 'Nutty Professor', description: "Peanut butter, bananas, and toast smarter than your average bread.", price: 11 },
	{ id: 'fig-deal', emoji: '🫐', tag: 'Fancy', name: 'Fig Deal', description: "Fresh figs, honey, and ricotta on sourdough. Very sophisticated.", price: 14 },
	{ id: 'salmon-ella', emoji: '🍣', tag: 'Premium', name: 'Salmon-ella Free', description: "Smoked salmon, cream cheese, capers. Fancy brunch energy.", price: 16 },
];

const coffeeItems = [
	{ id: 'espresso-yourself', emoji: '☕', tag: 'Classic', name: 'Espresso Yourself', description: "A double shot of pure personality in a tiny cup.", price: 4 },
	{ id: 'latte-da', emoji: '🥛', tag: 'Smooth', name: 'Latte Da', description: "Silky smooth latte that thinks it's fancy (it is).", price: 6 },
	{ id: 'mocha-lot', emoji: '🍫', tag: 'Sweet', name: 'Thanks a Mocha', description: "Chocolate meets coffee. They're very happy together.", price: 7 },
	{ id: 'cold-brew-crew', emoji: '🧊', tag: 'Refreshing', name: 'Cold Brew Crew', description: "24-hour steeped cold brew for the patient coffee lover.", price: 5 },
];

const smoothieItems = [
	{ id: 'berry-blast', emoji: '🫐', tag: 'Antioxidants', name: 'Berry Blast Off', description: "Mixed berries blended into purple perfection.", price: 8 },
	{ id: 'tropical-paradise', emoji: '🥭', tag: 'Tropical', name: 'Tropical Paradise', description: "Mango, pineapple, coconut. Instant vacation vibes.", price: 9 },
	{ id: 'green-machine', emoji: '🥬', tag: 'Healthy', name: 'Green Machine', description: "Spinach, banana, apple. Tastes way better than it sounds.", price: 8 },
	{ id: 'peanut-power', emoji: '🥜', tag: 'Protein', name: 'Peanut Power Up', description: "Peanut butter, banana, oat milk. Gym bro approved.", price: 9 },
];

const extraItems = [
	{ id: 'toast-tote', emoji: '👜', tag: 'Merch', name: 'Toast-E Tote Bag', description: "Canvas tote with our cute logo. Very sustainable, very chic.", price: 25 },
	{ id: 'bread-stickers', emoji: '✨', tag: 'Fun', name: 'Bread Sticker Pack', description: "6 adorable bread-themed stickers for your laptop/water bottle.", price: 8 },
	{ id: 'toast-mug', emoji: '☕', tag: 'Cozy', name: 'Toast-E Ceramic Mug', description: "Handmade mug with 'You're the butter to my toast' written on it.", price: 18 },
	{ id: 'gift-card', emoji: '🎁', tag: 'Gift', name: 'Toast-E Gift Card', description: "Give the gift of toast. Available in any amount.", price: 25 },
];
</script>
