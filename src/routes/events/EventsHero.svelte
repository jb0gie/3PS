<script>
	const events = {
		metaJax: 'https://pbs.twimg.com/profile_images/1487582176359026689/mSewObvs_400x400.jpg',
		nftMusicHall: 'https://pbs.twimg.com/profile_images/1577574448240021504/_j4ihiQt_400x400.jpg',
		calanderUrl:
			'https://calendar.google.com/calendar/embed?height=720&wkst=2&bgcolor=%23ffffff&ctz=America%2FNew_York&showTitle=1&showPrint=0&mode=AGENDA&src=M3BsYW5ldHN0dWRpb0BnbWFpbC5jb20&color=%23D50000'
	};
</script>

<h2 class="mx-auto text-2xl">Check out some of our previously hosted/booked events.</h2>
<div class="mx-auto max-w-screen-xl p-3 sm:p-10 md:p-16">
	<iframe
		class="w-full overflow-hidden rounded bg-black"
		title="ThirdPlanetEvents"
		src={events.calanderUrl}
		style="border-width:0"
		width="680"
		height="720"
		frameborder="0"
		scrolling="no"
	></iframe>
</div>
