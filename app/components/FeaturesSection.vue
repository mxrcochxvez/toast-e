<template>
	<section class="py-24 px-4 bg-vanilla bg-grain relative overflow-hidden">
		<!-- Decorative Background -->
		<div class="max-w-7xl mx-auto relative z-10">
			<div class="bg-white/80 backdrop-blur-sm rounded-[3rem] p-12 lg:p-20 shadow-xl border border-cream relative overflow-hidden">
				<!-- Ambient Glow -->
				<div class="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl pointer-events-none -mr-32 -mt-32"></div>
				<div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl pointer-events-none -ml-32 -mb-32"></div>

				<div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 relative z-10">
					<div v-for="feature in features" :key="feature.title" class="group">
						<div class="mb-8 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 inline-block">
							<div class="w-24 h-24 rounded-full bg-cream flex items-center justify-center shadow-lg">
								<IconsIconStar :size="48" class="text-golden" />
							</div>
						</div>
						
						<h3 class="font-serif text-3xl font-bold text-espresso mb-4 group-hover:text-primary transition-colors">
							{{ feature.title }}
						</h3>
						
						<p class="font-sans text-lg text-mocha leading-relaxed opacity-90">
							{{ feature.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
interface Feature {
	title: string;
	description: string;
}

const features: Feature[] = [
	{
		title: 'Fresh Daily',
		description: "Our ingredients have better social lives than we do. They're always out somewhere being fresh.",
	},
	{
		title: 'Toast Therapy',
		description: "Every slice gets a motivational speech before being served. We're serious about emotional support toast.",
	},
	{
		title: 'Fast & Furious',
		description: "Our toasters have been in training since birth. They're basically toast athletes at this point.",
	},
];
</script>

<style module lang="scss">
	/* Tailwind handles styles */
</style>
