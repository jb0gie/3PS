<script>
	import OrbGlow from '$lib/components/orb-glow.svelte';
	import pfp from '$lib/images/Ack.jpg';
	const ackapella = {
		title: `<b>ACKAPELLA</b><br /><i>"CRYPT MASTER"</i>"`,
		paragraph: `<p>Ackapella has 5 years experience as a Financial Analyst, 5 years experience in crypto currency and Forex trading.</p><br /><p> He was also a videographer for multiple shows on the Outdoor Channel/Sportman Channel and enjoys 3D visual effects.</p><br /><p>Ackapella is also a professional archer and certified instructor. He is a believer that everyone should control their own financial security!</p>`,
		pic: pfp
	};
</script>

<div class="relative mt-16 overflow-hidden rounded-xl">
	<div class="mx-auto max-w-7xl">
		<div class="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32">
			<div class="pt-1"></div>
			<OrbGlow />
			<main class="mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
				<div class="sm:text-center lg:text-left">
					<h2 class="my-6 text-2xl tracking-tight sm:text-3xl md:text-4xl">
						{@html ackapella.title}
					</h2>
					<div class="flex justify-center">
						<img src={ackapella.pic} alt="" class="h-48 w-48 rounded-full" />
					</div>
					<blockquote class="mt-10">	
						<p class="text-base leading-loose">
							{@html ackapella.paragraph}
						</p>
					</blockquote>
					<div class="space-y-4 p-4">
						<h6 class="h6">FOUNDER</h6>
					</div>
					<hr class="opacity-50" />
				</div>
			</main>
		</div>
	</div>
</div>
