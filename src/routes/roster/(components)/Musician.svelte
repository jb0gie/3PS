<script lang="ts">
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { fade } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';

	const { musician } = $props<{ musician: any }>();

	let imageLoaded = $state(false);
	let currentImageIndex = $state(0);
	let showImage = $state(true);
	let interval: ReturnType<typeof setInterval>;

	function onImageLoad() {
		imageLoaded = true;
	}

	function nextImage() {
		showImage = false;
		setTimeout(() => {
			currentImageIndex = (currentImageIndex + 1) % musician.pic.length;
			imageLoaded = false;
			showImage = true;
		}, 400);
	}

	onMount(() => {
		interval = setInterval(nextImage, 60000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<div
	class="group relative transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
>
	<a href={musician.route + '/index.html'}>
		<div
			class="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-black md:rounded-2xl"
		>
			{#if !imageLoaded}
				<Skeleton class="absolute inset-0 h-full w-full animate-pulse" />
			{/if}
			{#if showImage}
				<div
					in:fade={{ duration: 400 }}
					out:fade={{ duration: 400 }}
					class="h-full w-full backdrop-blur-sm"
				>
					<img
						src={musician.pic[currentImageIndex]}
						alt={musician.name}
						class="h-full w-full object-cover transition-all duration-500 will-change-transform group-hover:scale-110"
						onload={onImageLoad}
						style={imageLoaded ? '' : 'visibility: hidden;'}
					/>
				</div>
			{/if}
			<div
				class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"
			></div>
			<div
				class="absolute bottom-0 left-0 right-0 p-6 transition-all duration-300 group-hover:translate-y-[-4px] md:p-4"
			>
				<h3 class="text-2xl font-bold tracking-tight text-white md:text-lg">{musician.name}</h3>
				<div class="mt-2 flex items-center gap-2 md:mt-1">
					<span class="text-sm font-medium text-white/90 md:text-xs">{musician.genre}</span>
					<span class="text-white/60">•</span>
					<span class="text-sm font-medium text-white/80 md:text-xs">{musician.subgenre}</span>
				</div>
			</div>
		</div>
	</a>
</div>
