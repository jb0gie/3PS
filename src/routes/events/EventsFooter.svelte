<script>
	import * as Carousel from '$lib/components/ui/carousel';

	const thirdPlanetEvents = [
		'https://i.imgur.com/7xS2erx.png',
		'https://i.imgur.com/ZRg3CLS.png',
		'https://i.imgur.com/GngRXNJ.jpeg',
		'https://i.imgur.com/9It08Dj.png',
		'https://i.imgur.com/jYdDaZT.jpeg',
		'https://i.imgur.com/GXMMyCM.png',
		'https://i.imgur.com/ENsm4eQ.png',
		'https://i.imgur.com/V2Msgse.png',
		'https://i.imgur.com/JmPuBRC.png',
		'https://i.imgur.com/77gFGhN.png',
		'https://i.imgur.com/9aOppls.png',
		'https://i.imgur.com/enT1hqZ.png',
		'https://i.imgur.com/zIgdVbE.png',
		'https://i.imgur.com/1xtLvsn.png',
		'https://i.imgur.com/blcvH80.png'
	];
</script>

<h2 class="text-2xl mx-auto">Flyers and Promos from previous ThirdPlanet hosted events</h2>
<div class="max-w-screen-xl mx-auto p-3 sm:p-10 md:p-16">
	<Carousel.Root
		orientation="vertical"
		opts={{
			align: 'start',
			loop: true
		}}
		class="w-full"
	>
		<Carousel.Content class="-mt-1 h-[720px]">
			{#each thirdPlanetEvents as pics}
				<Carousel.Item>
					<div class="h-90 w-full object-cover object-top lg:w-full lg:h-full">
						<article
							class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl max-w-sm mx-auto mt-6"
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
