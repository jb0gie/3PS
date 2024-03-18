<script>
	import * as Card from '$lib/components/ui/card';
	import * as Carousel from '$lib/components/ui/carousel';
	import { AspectRatio } from '$lib/components/ui/aspect-ratio';
	import AboutBinx from './AboutBinx.svelte';
	import AboutKuri from './AboutKuri.svelte';
	import AboutAckapella from './AboutAckapella.svelte';
	const cHead = 'h2 hover:text-indigo-500 font-extrabold transition duration-500 ease-in-out';
	const founder = `<p>Third Planet Studio was founded by Binx, Ackapella and Kuri.</p>`;

	const headStyle =
		'supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur';
</script>

<div class="text-center items-center mb-16">
	<h1 class="h1 text-4xl sm:text-6xl leading-normal mt-16 font-extrabold tracking-tight">
		FOUNDERS
	</h1>

	<div class="py-8 max-w-screen-md mx-auto">
		<Carousel.Root class="w-auto max-w-screen-xl">
			<Carousel.Content>
				<Carousel.Item>
					<div class="p-1">
						<Card.Root class={headStyle}>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<AboutBinx />
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class="p-1">
						<Card.Root class={headStyle}>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<AboutKuri />
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
				<Carousel.Item>
					<div class="p-1">
						<Card.Root class={headStyle}>
							<Card.Content class="flex aspect-square items-center justify-center p-6">
								<AboutAckapella />
							</Card.Content>
						</Card.Root>
					</div>
				</Carousel.Item>
			</Carousel.Content>
			<Carousel.Previous />
			<Carousel.Next />
		</Carousel.Root>
		<div class="grid grid-cols-3 col-gap-10">
			<div class="text-center">
				<div class="p-4">
					<img
						class="w-full rounded-xl"
						src="https://pbs.twimg.com/profile_images/1577684445833953281/SGrq5Coy_400x400.jpg"
						alt="a"
					/>
				</div>
			</div>
			<div class="text-center">
				<div class="p-4">
					<img
						class="w-100 rounded-xl"
						src="https://pbs.twimg.com/profile_images/1712861383597912065/T59n0VJE.jpg"
						alt="a"
					/>
				</div>
			</div>
			<div class="text-center">
				<div class="p-4">
					<img
						class="rounded-xl"
						src="https://pbs.twimg.com/profile_images/1518727186294976514/o5YsjZ0W.jpg"
						alt="a"
					/>
				</div>
			</div>
		</div>
	</div>
</div>
