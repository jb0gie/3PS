<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { onMount, onDestroy } from 'svelte';
	import { fade } from 'svelte/transition';
	import logoPlaceholder from '$lib/images/logo-s.png';

	export let artist: any;
	let imageLoaded = false;
	let currentImageIndex = 0;
	let interval: ReturnType<typeof setInterval>;
	let showImage = true;
	let hasImages = artist.pic && artist.pic.length > 0;

	function onImageLoad() {
		imageLoaded = true;
	}

	function onImageError(event: Event) {
		const img = event.target as HTMLImageElement;
		img.src = logoPlaceholder;
	}

	function nextImage() {
		if (!hasImages) return;

		showImage = false;
		setTimeout(() => {
			currentImageIndex = (currentImageIndex + 1) % artist.pic.length;
			imageLoaded = false;
			showImage = true;
		}, 400);
	}

	onMount(() => {
		if (hasImages) {
			interval = setInterval(nextImage, 60000);
		}
	});

	onDestroy(() => {
		if (interval) clearInterval(interval);
	});
</script>

<HoverCard.Root>
	<div class="group relative">
		<a href={artist.route + '/index.html'}>
			<HoverCard.Trigger class="block">
				<div class="relative aspect-square overflow-hidden rounded-lg">
					{#if !imageLoaded}
						<Skeleton class="absolute inset-0 h-full w-full" />
					{/if}
					{#if showImage}
						<div in:fade={{ duration: 400 }} out:fade={{ duration: 400 }}>
							<img
								src={hasImages ? artist.pic[currentImageIndex] : logoPlaceholder}
								alt={artist.title}
								class="aspect-square h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
								on:load={onImageLoad}
								on:error={onImageError}
								style={imageLoaded ? '' : 'visibility: hidden;'}
							/>
						</div>
					{/if}
					<div
						class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4"
					>
						<h3 class="text-lg font-semibold text-white">{artist.title}</h3>
					</div>
				</div>
			</HoverCard.Trigger>
		</a>
	</div>
	<HoverCard.Content>
		<div class="space-y-2">
			<h4 class="font-medium">{artist.title}</h4>
			<p class="text-sm text-muted-foreground">Click to learn more</p>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
