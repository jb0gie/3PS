<script>
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

	const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

	const nftMusicHallEvents = [
		'https://i.imgur.com/QVXwE0B.png',
		'https://i.imgur.com/jyI7bWE.png',
		'https://i.imgur.com/sx5b2tB.png',
		'https://i.imgur.com/abYq7RC.png'
	];
</script>

<h2 class="mx-auto text-2xl">Previous events hosting by NFT MUSIC HALL</h2>
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
			{#each nftMusicHallEvents as pics}
				<Carousel.Item class="pl-4">
					<div class="h-90 w-full object-cover object-top lg:h-full lg:w-full">
						<article
							class="relative isolate mx-auto mt-6 flex max-w-sm flex-col justify-end overflow-hidden rounded-2xl"
						>
							<img
								class="w-full object-cover object-center"
								src={pics}
								alt="Previous NFT Music Hall Events"
							/>
						</article>
					</div>
				</Carousel.Item>
			{/each}
		</Carousel.Content>
	</Carousel.Root>
</div>
