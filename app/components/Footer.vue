<template>
	<footer class="bg-espresso bg-grain text-cream pt-20 pb-10 relative overflow-hidden">
		<!-- Top Gradient Border -->
		<div class="absolute top-0 left-0 right-0 h-1 bg-white/10 opacity-70"></div>
		
		<div class="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-16 relative z-10">
			<!-- Brand Column -->
			<div class="lg:col-span-5 space-y-6">
				<div class="flex items-center gap-3">
					<NuxtImg src="/logo.png" alt="Toast-E" class="h-16 w-auto" />
					<span class="font-serif text-3xl font-bold text-white">Toast-E</span>
				</div>
				<p class="font-sans text-cream/70 text-lg leading-relaxed max-w-md">
					Making toast proud since 2024. We believe every slice deserves to be golden, warm, and covered in something delicious.
				</p>
				<div class="flex gap-4 pt-4">
					<!-- Social Icons -->
					<a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
						<IconsIconStar :size="18" />
					</a>
					<a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
						<IconsIconStar :size="18" />
					</a>
					<a href="#" class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary hover:text-white transition-all duration-300">
						<IconsIconStar :size="18" />
					</a>
				</div>
			</div>
			
			<!-- Link Columns -->
			<div class="lg:col-span-7 grid grid-cols-1 md:grid-cols-3 gap-10">
				<div v-for="group in linkGroups" :key="group.title" class="space-y-6">
					<h4 class="font-serif text-xl font-bold text-secondary">{{ group.title }}</h4>
					<ul class="space-y-4">
						<li v-for="link in group.links" :key="link.text">
							<NuxtLink :to="link.href" class="text-cream/70 hover:text-white hover:translate-x-2 transition-all duration-300 inline-block font-sans">
								{{ link.text }}
							</NuxtLink>
						</li>
					</ul>
				</div>
			</div>
		</div>

		<!-- Footer Bottom -->
		<div class="max-w-7xl mx-auto px-4 pt-8 border-t border-white/10 text-center">
			<p class="text-cream/50 text-sm">
				© 2024 Toast E. All rights reserved. Made with love by people who really love breakfast.
			</p>
		</div>
	</footer>
</template>

<script setup lang="ts">
interface Link {
	text: string;
	href: string;
}

interface LinkGroup {
	title: string;
	links: Link[];
}

const linkGroups: LinkGroup[] = [
	{
		title: 'Menu',
		links: [
			{ text: 'Toast Creations', href: '#' },
			{ text: 'Coffee Dreams', href: '#' },
			{ text: 'Daily Specials', href: '#' },
		],
	},
	{
		title: 'Company',
		links: [
			{ text: 'Our Story', href: '#' },
			{ text: 'Careers', href: '#' },
			{ text: 'Toast Blog', href: '#' },
		],
	},
	{
		title: 'Connect',
		links: [
			{ text: 'Contact Us', href: '#' },
			{ text: 'Franchise', href: '#' },
			{ text: 'Press', href: '#' },
		],
	},
];
</script>

<style module lang="scss">
	/* Tailwind handles styles */
</style>
