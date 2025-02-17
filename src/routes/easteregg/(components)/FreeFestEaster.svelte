<script>
	const text = {
		p1: `<p>CONGRATULATIONS!</p><br><p>You've discovered a Third Planet Studio hidden treasure that that holds a unique digital collectible for Freedom Fest 2024!</p><br><p>Each one is a digital masterpiece crafted by a Third Planet Studio Designer, waiting to be claimed by the most determined hunters.</p><br><p>When you find an egg, you'll not only add a unique piece to your digital collection but also earn bragging rights as a master Third Planet egg hunter!</p><br><p></p><br><p>The Freedom Fest is annual celebration of freedom, human rights and cultural diversity using imagination, information & interactivity while providing a space for artists to recharge, refocus, and reconnect with their artistic passion.</p>`,
		p2: `<p>We came together to touch grass, connect with nature, experience amazing live music and art  performances and enjoy campfire gatherings where creators shared their experiences and connected with one another. We engaged in a variety of artistic activities and found new inspirations in our environment.</p><br><p>We just wanted to give a huge shoutout to Freedom Fest for inviting us to be part of this unforgettable event! 
Taking this wild ride to share our passion with others who were just as hyped about their craft was such an epic experience.</p>`,
		p3: `<p>Enjoy this token of appreciation as a souvenir of the awesome times we all shared at Freedom Fest 2024!</p><br><p>For more info or to support future festivals, email members@freefest.fun</p><br><p>freefest.fun

https://thirdplanet.studio/
@3planetstudio
binx@thirdplanet.studio</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const mint = `https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x658b03D9307946A06e34aD8A3769c16181c9b25f&chain=%7B"name"%3A"Polygon+Mainnet"%2C"chain"%3A"Polygon"%2C"rpc"%3A%5B"https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D"%5D%2C"nativeCurrency"%3A%7B"name"%3A"MATIC"%2C"symbol"%3A"MATIC"%2C"decimals"%3A18%7D%2C"shortName"%3A"matic"%2C"chainId"%3A137%2C"testnet"%3Afalse%2C"slug"%3A"polygon"%2C"icon"%3A%7B"url"%3A"ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png"%2C"width"%3A512%2C"height"%3A512%2C"format"%3A"png"%7D%7D&clientId=f0befac3890d5157677c9e54c7713da5&tokenId=0&theme=dark&primaryColor=purple`;
</script>

<div class="sm:flex items-center max-w-screen-xl">
	<div class="sm:w-1/2 p-5">
		<iframe
			class="w-[320px] h-[650px] xl:w-[600px] xl:h-[600px] md:w-[420px] md:h-[420px] sm:w-[300px] rounded-xl"
			title="allaccess"
			src={mint}
			frameborder="0"
		></iframe>
	</div>
	<div class="sm:w-auto p-4">
		<h2 class="my-4 font-bold text-4xl sm:text-5xl">
			<span class={grad2}>3PS Freedom Fest  <span class={grad1}>2024 Easter Egg Hunt</span></span>
		</h2>
		<p class="mx-auto text-xl">
			{@html text.p1}
			<br>	
			{@html text.p2}
		</p>
	</div>
</div>
