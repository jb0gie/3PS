<script>
	import * as Carousel from '$lib/components/ui/carousel';

	const nftMusicHallEvents = [

		'https://i.imgur.com/QVXwE0B.png',
		'https://i.imgur.com/jyI7bWE.png',
		'https://i.imgur.com/sx5b2tB.png',
		'https://i.imgur.com/abYq7RC.png'
	
	];
</script>

<h2 class="text-2xl mx-auto">Previous events hosting by NFT MUSIC HALL</h2>
<div class="max-w-screen-xl mx-auto p-3 sm:p-10 md:p-16">
	<Carousel.Root
		opts={{
			align: 'start',
			loop: true
		}}
		class="w-full"
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
