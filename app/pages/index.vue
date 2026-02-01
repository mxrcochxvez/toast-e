<template>
	<div class="min-h-screen bg-vanilla overflow-x-hidden font-sans text-espresso">
		<Nav />
		<Hero />
		<MenuSection />
		<CoffeeSection />
		<FeaturesSection />
		<AboutSection />
		<CtaSection />
		<Footer />
	</div>
</template>

<script setup lang="ts">
useHead({
	title: 'Toast-E | Where Toast Finds Its Purpose',
	meta: [
		{ name: 'description', content: 'Fresh fruit, good coffee, and toast that genuinely believes it can change the world one slice at a time.' }
	],
	htmlAttrs: {
		lang: 'en'
	}
});
</script>
