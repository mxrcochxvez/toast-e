<template>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		:width="size"
		:height="size"
		viewBox="0 0 24 24"
		fill="none"
		stroke="currentColor"
		:stroke-width="strokeWidth"
		stroke-linecap="round"
		stroke-linejoin="round"
	>
		<path d="M18 6 6 18" />
		<path d="m6 6 12 12" />
	</svg>
</template>

<script setup lang="ts">
interface Props {
	size?: number;
	strokeWidth?: number;
}

withDefaults(defineProps<Props>(), {
	size: 24,
	strokeWidth: 2,
});
</script>
