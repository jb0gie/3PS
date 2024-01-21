<script>
	import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

	const nftMusicHallEvents = [
		'https://media.discordapp.net/attachments/1094571932088807547/1163434567642910760/image.png',
		'https://media.discordapp.net/attachments/1094571932088807547/1163434568074928158/image.png',
		'https://media.discordapp.net/attachments/1094571932088807547/1163434568511139940/image.png',
		'https://media.discordapp.net/attachments/1094571932088807547/1163434569043808296/image.png'
	];
	const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>

<h2 class="text-2xl mx-auto">Previous events hosting by NFT MUSIC HALL</h2>
<div class="max-w-screen-xl mx-auto p-3 sm:p-10 md:p-16">
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
			{#each nftMusicHallEvents as pics}
				<Carousel.Item>
					<div class="w-full object-cover object-top md:h-96 lg:w-full lg:h-full">
						<article
							class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl max-w-sm mx-auto"
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
