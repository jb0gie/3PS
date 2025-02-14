<script>
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';
	export let artist;
	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<Carousel.Root
	plugins={[plugin]}
	opts={{
		align: 'start',
		loop: true
	}}
	class="w-full"
	on:mousenter={plugin.stop}
	on:mouseleave={plugin.play}
	>
	<Carousel.Content>
		{#each artist?.pic as pics}
			<Carousel.Item>
				<div class=" w-full object-cover object-top lg:w-full lg:h-full">
					<article
						class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl pb-60 pt-60 max-w-sm mx-auto mt-6"
					>
						<img
							src={pics}
							loading="lazy"
							alt={artist?.name}
							class="absolute inset-0 h-full w-full object-cover object-center"
						/>
					</article>
				</div>
			</Carousel.Item>
		{/each}
	</Carousel.Content>
	<!-- <Carousel.Previous />
	<Carousel.Next /> -->
</Carousel.Root>

<!-- <div class="bg-whit py-6 sm:py-8 lg:py-12">
	<div class="mx-auto max-w-screen-2xl px-4 md:px-8">
		<div class="mb-4 flex items-center justify-between gap-8 sm:mb-8 md:mb-12">
			<div class="flex items-center gap-12">
				<h2 class="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white">Gallery</h2>
				<p class="hidden max-w-screen-sm text-gray-500 dark:text-gray-300 md:block">
					Check out some of {artist?.title}'s art
				</p>
			</div>
		</div>
		<div class="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
			{#each artist?.pic as pics}
				<div
					class="group relative flex h-24 items-end overflow-hidden rounded-lg bg-gray-shadow-lg md:h-80"
				>
					<img
						src={pics}
						loading="lazy"
						alt={artist?.title}
						class="relative inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
					/>
				</div>
			{/each}
		</div>
	</div>
</div> -->
