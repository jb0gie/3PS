<script lang="ts">
	import * as Carousel from '$lib/components/ui/carousel';
	import type { PageData } from './$types';
	import Autoplay from 'embla-carousel-autoplay';

	export let data: PageData;

	const plugin = Autoplay({ delay: 4000, stopOnInteraction: true });

	$: events = data.events.map((event) => event.pic[0]).filter(Boolean);
</script>

<h2 class="mx-auto text-2xl">Flyers and Promos from previous ThirdPlanet hosted events</h2>
<div class="mx-auto max-w-screen-xl p-3 sm:p-10 md:p-16">
	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		plugins={[plugin]}
		class="w-full"
	>
		<Carousel.Content class="gap-6">
			{#each events as pics}
				<Carousel.Item class="pl-4">
					<div class="h-90 w-full object-cover object-top lg:h-full lg:w-full">
						<article
							class="relative isolate mx-auto mt-6 flex max-w-sm flex-col justify-end overflow-hidden rounded-2xl"
						>
							<img
								class="w-full object-cover object-center"
								src={pics}
								alt="Previous ThirdPlanet Events"
							/>
						</article>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</div>
