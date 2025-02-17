<script>
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import AboutBinx from './AboutBinx.svelte';
	import AboutKuri from './AboutKuri.svelte';
	import AboutAckapella from './AboutAckapella.svelte';
	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 w-full bg-background/95 shadow-lg backdrop-blur transition-all duration-300 hover:shadow-xl rounded-2xl border border-gray-200/20';
</script>

<div class="container mx-auto px-4">
	<div class="items-center text-center">
		<h1
			class="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text pb-2 text-4xl font-black tracking-tight text-transparent sm:text-5xl md:text-6xl lg:text-7xl"
		>
			Meet Our Founders
		</h1>

		<p class="mx-auto text-xl text-gray-400 md:text-2xl">
			The creative minds behind Third Planet,<br /> bringing together art, music, community and technology
		</p>

		<div class="mx-auto max-w-screen-xl py-8">
			<Carousel.Root
				opts={{
					align: 'start',
					loop: true
				}}
			>
				<Carousel.Content class="px-2 md:px-4">
					<Carousel.Item class="w-full md:w-1/2 lg:w-1/3">
						<Card.Root class={headStyle}>
							<Card.Content
								class="flex items-center justify-center transition-transform duration-300 hover:scale-[1.02]"
							>
								<AboutBinx />
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
					<Carousel.Item class="w-full md:w-1/2 lg:w-1/3">
						<Card.Root class={headStyle}>
							<Card.Content
								class="flex items-center justify-center p-8 transition-transform duration-300 hover:scale-[1.02]"
							>
								<AboutKuri />
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
					<Carousel.Item class="w-full md:w-1/2 lg:w-1/3">
						<Card.Root class={headStyle}>
							<Card.Content
								class="flex  items-center justify-center p-8 transition-transform duration-300 hover:scale-[1.02]"
							>
								<AboutAckapella />
							</Card.Content>
						</Card.Root>
					</Carousel.Item>
				</Carousel.Content>
				<Carousel.Previous class="hidden md:flex" />
				<Carousel.Next class="hidden md:flex" />
			</Carousel.Root>
		</div>
	</div>
</div>
