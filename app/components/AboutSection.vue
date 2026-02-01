<template>
	<section id="about" class="py-24 px-4 bg-cream bg-grain relative overflow-hidden">
		<!-- Background Elements -->
		
		<div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
			<!-- Text Content -->
			<div class="space-y-8">
				<h2 class="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-espresso leading-none">
					More Than Just <br/>
					<span class="relative">
						Hot Air
					</span>
				</h2>

				<div class="space-y-6 text-xl text-mocha leading-relaxed font-sans">
					<p>
						It started with a toaster, a dream, and a slight misunderstanding of how electricity works.
					</p>
					<p>
						Today, we're serving the crunchiest toast, the smoothest coffee, and vibes so good you'll want to take them home in a doggy bag. (Please don't, we need those vibes).
					</p>
				</div>

				<div class="pt-4 flex flex-wrap gap-4">
					<div class="flex items-center gap-3 bg-white p-4 px-6 rounded-2xl shadow-sm border border-cream/50">
						<IconsIconStar :size="32" class="text-golden" />
						<div>
							<strong class="block text-espresso font-serif text-lg">Voted #1</strong>
							<span class="text-sm text-mocha">By our moms</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Image Layout -->
			<div class="relative">
				<div class="relative z-10 transform hover:scale-[1.01] transition-transform duration-500">
					<NuxtImg
						src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
						alt="Bakery Interior"
						class="rounded-[2.5rem] shadow-2xl skew-y-1 w-full object-cover h-[600px] border-4 border-white"
					/>
				</div>
				<!-- Decorative elements behind image -->
				<div class="absolute -top-10 -right-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl -z-0"></div>
				<div class="absolute -bottom-10 -left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -z-0"></div>
				<div class="absolute top-10 -right-4 w-24 h-24 bg-secondary text-white rounded-full flex items-center justify-center font-bold text-xl transform rotate-12 shadow-lg z-20 animate-bounce-slow">
					Est. <br/> 2024
				</div>
			</div>
		</div>
	</section>
</template>

<style module lang="scss">
	/* Tailwind handles styles */
	:global(.animate-bounce-slow) {
		animation: bounceSlow 3s infinite;
	}

	@keyframes bounceSlow {
		0%, 100% { transform: translateY(0) rotate(12deg); }
		50% { transform: translateY(-10px) rotate(12deg); }
	}
</style>
