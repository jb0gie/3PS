<script lang="ts">
	import * as HoverCard from '$lib/components/ui/hover-card';
	import { Skeleton } from '$lib/components/ui/skeleton';
	import { fade, scale } from 'svelte/transition';
	import { onMount, onDestroy } from 'svelte';
	import { buttonVariants } from '$lib/components/ui/button';
	import * as Dialog from '$lib/components/ui/dialog';
	import logoPlaceholder from '/images/logo-s.png';

	const { artist } = $props<{ artist: any }>();

	let imageLoaded = $state(false);
	let currentImageIndex = $state(0);
	let showImage = $state(true);
	let interval: ReturnType<typeof setInterval>;
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
	<div
		class="group relative transform-gpu transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
	>
		<a href={artist.route + '/index.html'}>
			<HoverCard.Trigger class="block">
				<div
					class="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black"
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
								src={hasImages ? artist.pic[currentImageIndex] : logoPlaceholder}
								alt={artist.title}
								class="h-full w-full object-cover transition-all duration-500 will-change-transform group-hover:scale-110"
								onload={onImageLoad}
								onerror={onImageError}
								style={imageLoaded ? '' : 'visibility: hidden;'}
							/>
						</div>
					{/if}
					<div
						class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-70"
					></div>
					<div
						class="absolute bottom-0 left-0 right-0 p-7 transition-all duration-300 group-hover:translate-y-[-4px]"
					>
						<h3 class="text-2xl font-bold tracking-tight text-white">{artist.title}</h3>
					</div>
				</div>
			</HoverCard.Trigger>
		</a>
	</div>
	<HoverCard.Content class="w-80">
		<div class="space-y-3 p-4" in:scale={{ duration: 200, start: 0.95 }}>
			<div class="space-y-2">
				<h4 class="text-xl font-semibold tracking-tight">{artist.title}</h4>
			</div>
			<p class="text-sm text-muted-foreground/80">Click to view full profile</p>
		</div>
	</HoverCard.Content>
</HoverCard.Root>
