<script>
    import * as Carousel from '$lib/components/ui/carousel';
	import Autoplay from 'embla-carousel-autoplay';

    const thirdPlanetEvents = [
        'https://media.discordapp.net/attachments/1094571932088807547/1163458326965780560/image.png?ex=653fa601&is=652d3101&hm=8b054eed75580f8c47599fc1102e22c59f46733eb7267de11ccee8e08e9cfffb&=&width=272&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163458327326511255/image.png?ex=653fa601&is=652d3101&hm=20cfcc1cf24981d59484f48924747883af48ef17b01621d15404daa048817bc9&=&width=269&height=404',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163464543519916123/image.png?ex=653fabcb&is=652d36cb&hm=b647dd693de5839331e589c71b7ab7b97c88375c348f32900ce0489b576bdf5e&',
        'https://media.discordapp.net/attachments/1094571932088807547/1163458327762698314/image.png?ex=653fa601&is=652d3101&hm=cfb8df852acc6b2e7101aa2a77f9d7b004e31222b09affa736762f10290e6d5e&=&width=406&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163458328136007720/image.png?ex=653fa601&is=652d3101&hm=5f20c3ab099ea6ad954e4ecd1f966ebd55cc5a14842bcd0d8bb25ba0f841bb2d&=&width=279&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163458328479944775/image.png?ex=653fa601&is=652d3101&hm=cc29708c3e656f103b3502b91ce08b0093dbc5b4a5dd9e73143979a18583b63d&=&width=270&height=404',
        'https://media.discordapp.net/attachments/1094571932088807547/1163458328836440125/image.png?ex=653fa601&is=652d3101&hm=7edc2c414d07423ac56dacd51ebbab6f53592485eadd68f86bd305795d5070c0&=&width=304&height=404',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458329205555402/image.png?ex=653fa601&is=652d3101&hm=1530ae5380be9884c340c2f8ff6dbe535638c4d518b21816e02c6b21fb57aa12&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458329566269461/image.png?ex=653fa601&is=652d3101&hm=42d9eaa56708865a7ec649c58f3cb87cf850f65337784653aed4ebaefa5b01ec&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458329943736450/image.png?ex=653fa601&is=652d3101&hm=b4b68aa90e547ee6223b872ab1a7d8190cd505d1bd91b164f7d2d8c85937e5e9&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458788922236988/image.png?ex=653fa66f&is=652d316f&hm=12a289f6a431b0ded430a7c50ed336edf53a20616dfdd0fb9638ab87636c079f&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458789723353128/image.png?ex=653fa66f&is=652d316f&hm=f8e967f0d88c55bb4469c053da4510d154bd8926219e95e73e0179a635f3114c&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458790184718466/image.png?ex=653fa66f&is=652d316f&hm=18e47c73511c8cb7f7e279210aa95feaccc36d2340b6bcec91afaeeaeac538f8&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458790721593414/image.png?ex=653fa66f&is=652d316f&hm=00eb30a62882777c4394562204bcbcc340093bc0b9d510d66c1f81f239522f7f&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458791677898803/image.png?ex=653fa66f&is=652d316f&hm=7acc376dfef4e1abd0499abe04a816a0d5c68ba8f0075bd309061f695f9fb663&',
        'https://cdn.discordapp.com/attachments/1094571932088807547/1163458792005046322/image.png?ex=653fa670&is=652d3170&hm=7ef45c379866dabf7a9ea912f7842474831cf6c9840be55d1a05561abf40be41&',
    ]
    const plugin = Autoplay({ delay: 2000, stopOnInteraction: true });
</script>
<h2 class="text-2xl mx-auto">Flyers and Promos from previous ThirdPlanet hosted events</h2>
<div class="max-w-screen-xl mx-auto p-3 sm:p-10 md:p-16">
	<Carousel.Root
        orientation="vertical"
		plugins={[plugin]}
		opts={{
			align: 'start',
			loop: true
		}}
		class="w-full"
		on:mousenter={plugin.stop}
		on:mouseleave={plugin.play}
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