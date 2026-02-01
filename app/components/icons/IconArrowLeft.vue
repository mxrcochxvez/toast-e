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
		<path d="m12 19-7-7 7-7" />
		<path d="M19 12H5" />
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
