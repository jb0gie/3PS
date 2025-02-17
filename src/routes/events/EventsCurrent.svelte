<script>
	import { Button } from '$lib/components/ui/button';
	const events = {
		metaJax: 'https://pbs.twimg.com/profile_images/1487582176359026689/mSewObvs_400x400.jpg',
		nftMusicHall: 'https://pbs.twimg.com/profile_images/1577574448240021504/_j4ihiQt_400x400.jpg',
		luma: 'https://lu.ma/embed-checkout/evt-FeqczI2ea2Zzt5I',
		eventbrite: 'https://www.eventbrite.com/e/astro-fest-2024-tickets-870667468837',
		nftnyc: 'https://NFT.NYC',
		nftsmart: 'https://twitter.com/nftsmart',
		wavy: 'https://twitter.com/thewavyawards',
		infanity: 'https://twitter.com/Infanity',
		mike: 'https://twitter.com/TheMikeLoco',
		ezincr: 'https://twitter.com/Ezincr'
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<h2 class="my-4 text-4xl font-bold sm:text-5xl">
	<span class={grad2}>Current <span class={grad1}>Events</span></span>
</h2>
<p class="mx-auto text-2xl">
	🚀 Join us on April 2nd for ASTRO FEST 2024, as Third Planet Studio kicks off the week of
	<Button class="text-xl" variant="link" href={events.nftnyc}>NFT.NYC</Button>, with partners
	<Button class="text-xl" variant="link" href={events.nftsmart}>@nftsmart</Button>
	<Button class="text-xl" variant="link" href={events.wavy}>@thewavyawards</Button> and <Button
		class="text-xl"
		variant="link"
		href={events.infanity}>@Infanity</Button
	> ! 📷 Free admission! Enjoy 10+ hours of live music, Live Painting, Networking, Audio Visual experiences,
	and DJ, hosted by <Button class="text-xl" variant="link" href={events.mike}>@TheMikeLoco</Button> &
	<Button class="text-xl" variant="link" href={events.ezincr}>@Ezincr</Button>
</p>
<div class="mx-auto max-w-screen-xl p-3 sm:p-10 md:p-16">
	<div class="flex flex-col items-center md:flex-row">
		<iframe
			title="ThirdPlanetEvents"
			class="h-[460px] overflow-hidden rounded-xl bg-black sm:w-[550px] md:h-[660px] md:w-[890px]"
			src={events.luma}
			style="border-width:0"
			width="680"
			height="720"
			frameBorder="0"
		></iframe>
		<div class="h-10 w-6 md:h-4"></div>
		<iframe
			class="h-[460px] overflow-hidden rounded-xl bg-black sm:w-[550px] md:h-[660px] md:w-[890px]"
			title="ThirdPlanetEvents"
			src={events.eventbrite}
			style="border-width:0"
			width="680"
			height="720"
			frameBorder="0"
		></iframe>
	</div>
</div>
<div class="mx-auto max-w-screen-xl p-3 sm:p-10 md:p-16"></div>
