<script>
	const text = {
		p1: `<p>Get ready, RIZZLEFEST 2024 campers! 🏕️ 
</p><br><p>is back again with not your average egg hunt—our eggs are hidden in the strangest, spookiest, and most unexpected places, from the tallest trees 🌳 to the eerie corners of haunted cabins 🏚️, and even a few spots you'll need to hunt to believe! 🔍</p><br><p>Each one is a digital masterpiece crafted by a Third Planet Studio Designer, waiting to be claimed by the most determined hunters.</p><br><p>When you find an egg, you'll not only add a unique piece to your digital collection but also earn bragging rights as a master Third Planet egg hunter!</p><br><p></p><br><p></p>`,
		p2: `<p>Inside each egg lies an NFC chip, holding a special token that unlocks a free NFT keepsake, made just for Rizzle Fest 2024! 📱 Simply tap the chip with your phone and claim your gift. 🎁
Feel free to hide the egg again or add it to your swag bag!</p>`,
		p3: `<p></p><br><p></p><br><p>freefest.fun

https://thirdplanet.studio/
@3planetstudio
binx@thirdplanet.studio</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const mint = `https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x0642314b8e2868ab79636244a28B1FcbADb1a03C&chain=%7B"name"%3A"Polygon+Mainnet"%2C"chain"%3A"Polygon"%2C"rpc"%3A%5B"https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D"%5D%2C"nativeCurrency"%3A%7B"name"%3A"POL"%2C"symbol"%3A"POL"%2C"decimals"%3A18%7D%2C"shortName"%3A"matic"%2C"chainId"%3A137%2C"testnet"%3Afalse%2C"slug"%3A"polygon"%2C"icon"%3A%7B"url"%3A"ipfs%3A%2F%2FQmRNqgazYuxUa5WdddFPftTWiP3KwzBMgV9Z19QWnLMETc"%2C"width"%3A2000%2C"height"%3A2000%2C"format"%3A"png"%7D%7D&clientId=f0befac3890d5157677c9e54c7713da5&tokenId=0&theme=light&primaryColor=purple`;
</script>

<div class="max-w-screen-xl items-center sm:flex">
	<div class="p-5 sm:w-1/2">
		<iframe
			class="h-[650px] w-[320px] rounded-xl sm:w-[300px] md:h-[420px] md:w-[420px] xl:h-[600px] xl:w-[600px]"
			title="allaccess"
			src={mint}
			style="border-width:0"
			width="680"
			height="720"
			frameborder="0"
			scrolling="no"
		></iframe>
	</div>
	<div class="p-4 sm:w-auto">
		<h2 class="my-4 text-4xl font-bold sm:text-5xl">
			<span class={grad2}>3PS Rizzle Fest <span class={grad1}>2024 Egg Hunt</span></span>
		</h2>
		<p class="mx-auto text-xl">
			{@html text.p1}
			<br />
			{@html text.p2}
		</p>
	</div>
</div>
