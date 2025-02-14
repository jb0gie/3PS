<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';

	export let musician;
	let imageLoaded = false;
	let currentImageIndex = 0;
	let interval: ReturnType<typeof setInterval>;
	let showImage = true;

	function onImageLoad() {
		imageLoaded = true;
	}

	function nextImage() {
		showImage = false;
		setTimeout(() => {
			currentImageIndex = (currentImageIndex + 1) % musician.pic.length;
			imageLoaded = false;
			showImage = true;
		}, 400); // Wait for fade out to complete
	}

	onMount(() => {
		// Change image every 5 seconds
		interval = setInterval(nextImage, 60000);
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<HoverCard.Root>
	<div class="group relative">
		<a href={musician.route + '/index.html'}>
			<HoverCard.Trigger class="block">
				<div class="relative aspect-square overflow-hidden rounded-lg">
					{#if !imageLoaded}
						<Skeleton class="absolute inset-0 h-full w-full" />
					{/if}
					{#if showImage}
						<div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
							<img
								src={musician.pic[currentImageIndex]}
								alt={musician.name}
								class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								on:load={onImageLoad}
								style={imageLoaded ? '' : 'visibility: hidden;'}
							/>
						</div>
					{/if}
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
					>
						<h3 class="text-lg font-semibold text-white">{musician.name}</h3>
						<p class="text-sm text-white/80">{musician.genre}</p>
						<p class="text-xs text-white/60">{musician.subgenre}</p>
					</div>
				</div>
			</HoverCard.Trigger>
		</a>
	</div>
	<HoverCard.Content>
		<div class="space-y-2">
			<h4 class="font-medium">{musician.name}</h4>
			<p class="text-sm text-muted-foreground">Click to learn more</p>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
