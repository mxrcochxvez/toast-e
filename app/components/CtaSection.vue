<template>
	<section class="py-32 px-4 bg-espresso bg-burnt-toast relative overflow-hidden flex items-center justify-center">
		<!-- Dynamic Background -->
		
		<!-- Decorative Ring -->
		<div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

		<div class="relative z-10 max-w-4xl mx-auto text-center">
			
			<h2 class="font-serif text-5xl md:text-7xl font-bold text-cream mb-8 leading-tight">
				Ready to Get <span class="text-golden">Toasty?</span>
			</h2>
			
			<p class="font-sans text-xl md:text-2xl text-cream/80 mb-12 leading-relaxed max-w-2xl mx-auto">
				Life's too short for boring breakfast. Treat yourself to something warm, crispy, and absolutely delicious!
			</p>
			
			<button @click="scrollToSection('#menu')" class="group relative inline-flex items-center gap-3 bg-amber-400 text-espresso px-10 py-5 rounded-full font-bold text-xl transition-all hover:bg-amber-300 hover:shadow-[0_0_40px_rgba(251,191,36,0.4)] transform hover:-translate-y-1 active:scale-95 overflow-hidden">
				<span class="relative z-10">Start Your Toast Journey</span>
				<IconsIconArrowRight :size="20" class="relative z-10 transform group-hover:translate-x-1 transition-transform" />
				<div class="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
			</button>
		</div>

		<!-- Bottom Border -->
		<div class="absolute bottom-0 left-0 right-0 h-1 bg-cream/30"></div>
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
	:global(.animate-spin-slow) {
		animation: spinSlow 20s linear infinite;
	}
	
	:global(.animate-pulse-slow) {
		animation: pulseSlow 4s ease-in-out infinite;
	}

	@keyframes spinSlow {
		from { transform: translate(-50%, -50%) rotate(0deg); }
		to { transform: translate(-50%, -50%) rotate(360deg); }
	}

	@keyframes pulseSlow {
		0%, 100% { opacity: 0.5; }
		50% { opacity: 0.8; }
	}
</style>
