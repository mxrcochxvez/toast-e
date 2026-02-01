<template>
	<section id="coffee" class="py-24 px-4 bg-espresso bg-grain relative overflow-hidden">
		<!-- Background Accents -->
		<div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
		<div class="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
		
		<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
			<div class="order-2 lg:order-1">
				<div class="relative group">
					<div class="absolute inset-0 bg-secondary rounded-3xl transform rotate-3 scale-105 opacity-50 group-hover:rotate-6 transition-transform duration-500"></div>
					<NuxtImg
						src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
						alt="Artisanal Coffee"
						class="relative rounded-3xl shadow-2xl w-full object-cover h-[500px] transform transition-transform duration-500 group-hover:scale-[1.02]"
					/>
				</div>
			</div>
			
			<div class="order-1 lg:order-2 text-white">
				<h2 class="font-serif text-5xl md:text-7xl font-bold mb-8 leading-tight">
					Not Your Average <span class="text-secondary">Joe</span>
				</h2>
				
				<p class="font-sans text-xl text-cream/80 mb-8 leading-relaxed">
					We source our beans from farmers who sing to their plants. We're not saying it makes the coffee taste better, but we're also not saying it doesn't.
				</p>

				<ul class="space-y-6 mb-12">
					<li class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
						<span class="bg-white/10 w-12 h-12 flex items-center justify-center rounded-full">
							<IconsIconStar :size="24" class="text-secondary" />
						</span>
						<div>
							<h4 class="font-serif text-xl font-bold mb-1 text-cream">Ethically Sourced</h4>
							<p class="text-cream/60">Fair trade, because happy farmers make happy beans.</p>
						</div>
					</li>
					<li class="flex items-start gap-4 p-4 rounded-xl hover:bg-white/5 transition-colors duration-300">
						<span class="bg-white/10 w-12 h-12 flex items-center justify-center rounded-full">
							<IconsIconStar :size="24" class="text-secondary" />
						</span>
						<div>
							<h4 class="font-serif text-xl font-bold mb-1 text-cream">Expertly Roasted</h4>
							<p class="text-cream/60">Small batches roasted to perfection right here.</p>
						</div>
					</li>
				</ul>

				<button @click="scrollToSection('#menu')" class="group bg-white text-espresso px-8 py-4 rounded-full font-bold text-lg transition-all hover:bg-secondary hover:text-white flex items-center gap-3">
					<span>View Coffee Menu</span>
					<IconsIconArrowRight :size="20" class="transform group-hover:translate-x-1 transition-transform" />
				</button>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const scrollToSection = (selector: string) => {
	const element = document.querySelector(selector);
	if (element) {
		element.scrollIntoView({ behavior: 'smooth' });
	}
};
</script>

<style module lang="scss">
	/* Tailwind handles styles */
</style>
