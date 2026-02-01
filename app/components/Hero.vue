<template>
	<section :class="$style.hero" class="bg-vanilla bg-grain">
		<div :class="$style.heroBg"></div>
		<div :class="$style.heroContent" class="relative z-10 text-center max-w-4xl mx-auto px-4">
			<h1 :class="$style.heroTitle" class="font-serif text-5xl md:text-7xl lg:text-8xl mb-8 text-espresso leading-tight">
				<span class="block">Where Toast Finds Its</span>
				<span class="block text-golden">Purpose</span>
			</h1>
			<p :class="$style.heroSubtitle" class="font-sans text-lg md:text-xl text-mocha max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
				Fresh fruit, good coffee, and toast that genuinely believes it can change the world one slice at a time.
			</p>
			<div :class="$style.heroActions" class="flex flex-col sm:flex-row gap-6 justify-center items-center">
				<button @click="scrollToSection('#menu')" class="group btn-burnt px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 hover:shadow-xl flex items-center gap-3">
					<span>Get Toasty</span>
					<IconsIconArrowRight :size="20" class="transform group-hover:translate-x-1 transition-transform" />
				</button>
				<button @click="scrollToSection('#menu')" class="bg-white/80 backdrop-blur-sm text-espresso border-2 border-cream px-8 py-4 rounded-full font-semibold text-lg transition-all transform hover:-translate-y-1 hover:bg-white hover:shadow-lg hover:border-transparent">
					<span>View Menu</span>
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
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding: 6rem 1rem 4rem;
		position: relative;
		overflow: hidden;
	}

	.heroBg {
		position: absolute;
		inset: 0;
		background:
			radial-gradient(circle at 20% 30%, rgba(230, 159, 92, 0.1) 0%, transparent 40%),
			radial-gradient(circle at 80% 80%, rgba(111, 78, 55, 0.05) 0%, transparent 40%);
		pointer-events: none;
	}

	.floatingElements {
		position: absolute;
		inset: 0;
		pointer-events: none;
	}

	.floatingEmoji {
		position: absolute;
		font-size: 4rem;
		opacity: 0.6;
		animation: float 10s ease-in-out infinite;
		
		@media (min-width: 768px) {
			font-size: 6rem;
		}
	}

	@keyframes float {
		0%, 100% { transform: translateY(0) rotate(0deg); }
		33% { transform: translateY(-20px) rotate(5deg); }
		66% { transform: translateY(10px) rotate(-5deg); }
	}

	.float1 { top: 15%; left: 10%; animation-delay: 0s; }
	.float2 { top: 60%; left: 5%; animation-delay: 2s; }
	.float3 { top: 20%; right: 10%; animation-delay: 5s; }
	.float4 { top: 70%; right: 15%; animation-delay: 7s; }

  /* Tailwind utilities for animation */
  :global(.animate-gradient) {
    background-size: 200% auto;
    animation: gradientShift 5s ease infinite;
  }

  @keyframes gradientShift {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
</style>
