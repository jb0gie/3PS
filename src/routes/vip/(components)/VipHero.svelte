<script>
	const text = {
		p1: `<p>Your presence at Astro Fest 2024 has contributed to the growth of the talented artists and
			performers at 3rd Planet Studio Events.</p><br><p>Through your support and enthusiastic applause, you've become the guiding lights that empower our creative cosmos to shine brighter than ever before.</p><br><p>Congratulations! You're one step closer to experiencing the cosmic wonder of 3rd Planet
			Studio's first ever live event, ASTRO FEST 2024.</p>`,
		p2: `<p>But that's not all – you'll also get the chance to meet select performers up close and personal.</p><br><p>Whether you're snapping a selfie or getting an autograph, these meet and greets are sure to be memorable experiences.</p>`,
		p3: `<p>Don't miss out on the ultimate entertainment experience.</p><br><p>Get your 3rd Planet Studio All-Access Pass today and unlock a world of excitement!</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const mint = `https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x9cF2Ca0119D7898D9CC3Db25332bA0b361FBE33c&chain=%7B"name"%3A"Polygon+Mainnet"%2C"chain"%3A"Polygon"%2C"rpc"%3A%5B"https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D"%5D%2C"nativeCurrency"%3A%7B"name"%3A"MATIC"%2C"symbol"%3A"MATIC"%2C"decimals"%3A18%7D%2C"shortName"%3A"matic"%2C"chainId"%3A137%2C"testnet"%3Afalse%2C"slug"%3A"polygon"%2C"icon"%3A%7B"url"%3A"ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png"%2C"width"%3A512%2C"height"%3A512%2C"format"%3A"png"%7D%7D&clientId=f0befac3890d5157677c9e54c7713da5&tokenId=1&theme=light&primaryColor=purple`;
</script>

<div class="sm:flex items-center max-w-screen-xl">
	<div class="sm:w-1/2 p-5">
		<iframe
			class="w-[420px] h-[550px] xl:w-[600px] xl:h-[600px] md:w-[420px] md:h-[420px] sm:w-[300px] rounded-xl"
			title="allaccess"
			src={mint}
			frameborder="0"
		/>
	</div>
	<div class="sm:w-auto p-4">
		<h2 class="my-4 font-bold text-4xl sm:text-5xl">
			<span class={grad2}>Exclusive <span class={grad1}>Access</span></span>
		</h2>
		<p class="mx-auto text-xl">
			{@html text.p1}
		</p>
	</div>
</div>
