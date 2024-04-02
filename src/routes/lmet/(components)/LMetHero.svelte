<script>
	const text = {
		p1: `<p></p><br><p></p><br><p></p>`,
		p2: `<p></p>`,
		p3: `<p></p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const mint = `https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x9cF2Ca0119D7898D9CC3Db25332bA0b361FBE33c&chain=%7B"name"%3A"Polygon+Mainnet"%2C"chain"%3A"Polygon"%2C"rpc"%3A%5B"https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D"%5D%2C"nativeCurrency"%3A%7B"name"%3A"MATIC"%2C"symbol"%3A"MATIC"%2C"decimals"%3A18%7D%2C"shortName"%3A"matic"%2C"chainId"%3A137%2C"testnet"%3Afalse%2C"slug"%3A"polygon"%2C"icon"%3A%7B"url"%3A"ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png"%2C"width"%3A512%2C"height"%3A512%2C"format"%3A"png"%7D%7D&clientId=f0befac3890d5157677c9e54c7713da5&tokenId=4&theme=light&primaryColor=purple`;
</script>

<div class="sm:flex items-center max-w-screen-xl">
	<div class="sm:w-1/2 p-5">
		<iframe
			class="w-[320px] h-[650px] xl:w-[600px] xl:h-[600px] md:w-[420px] md:h-[420px] sm:w-[300px] rounded-xl"
			title="allaccess"
			src={mint}
			frameborder="0"
		/>
	</div>
	<div class="sm:w-auto p-4">
		<h2 class="my-4 font-bold text-4xl sm:text-5xl">
			<span class={grad2}>Hidden <span class={grad1}>Treasure</span></span>
		</h2>
		<p class="mx-auto text-xl">
			{@html text.p1}
			<br />
			{@html text.p2}
		</p>
	</div>
</div>
