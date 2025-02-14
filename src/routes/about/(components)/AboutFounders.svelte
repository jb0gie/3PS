<script>
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import AboutBinx from './AboutBinx.svelte';
	import AboutKuri from './AboutKuri.svelte';
	import AboutAckapella from './AboutAckapella.svelte';
	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 w-full bg-background/95 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl rounded-2xl border border-gray-200/20';
</script>

<div class="mb-24 items-center text-center">
	<h1
		class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text pb-2 text-5xl font-black tracking-tight text-transparent sm:text-7xl"
	>
		Meet Our Founders
	</h1>

	<p class="mx-auto mb-12 mt-4 max-w-2xl text-lg text-gray-400">
		The creative minds behind Third Planet, bringing together art, music, and technology
	</p>

	<div class="mx-auto max-w-screen-lg py-8">
		<Carousel.Root
			opts={{
				align: 'start',
				loop: true
			}}
		>
			<Carousel.Content class="px-4">
				<Carousel.Item>
					<Card.Root class={headStyle}>
						<Card.Content
							class="flex items-center justify-center p-8 transition-transform duration-300 hover:scale-[1.02]"
						>
							<AboutBinx />
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
				<Carousel.Item>
					<Card.Root class={headStyle}>
						<Card.Content
							class="flex aspect-square items-center justify-center p-8 transition-transform duration-300 hover:scale-[1.02]"
						>
							<AboutKuri />
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
				<Carousel.Item>
					<Card.Root class={headStyle}>
						<Card.Content
							class="flex aspect-square items-center justify-center p-8 transition-transform duration-300 hover:scale-[1.02]"
						>
							<AboutAckapella />
						</Card.Content>
					</Card.Root>
				</Carousel.Item>
			</Carousel.Content>
			<div class="mt-8 flex justify-center gap-4">
				<Carousel.Previous class="transition-transform hover:scale-110" />
				<Carousel.Next class="transition-transform hover:scale-110" />
			</div>
		</Carousel.Root>
	</div>
</div>
