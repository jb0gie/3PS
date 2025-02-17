<script>
	const text = {
		p1: `<p>Get ready to experience entertainment like never before with the Third Planet Studio All-Access Pass!</p><br><p>As an All-Access Pass holder, you'll have the exclusive opportunity to attend a variety of exciting events, from virtual token gated concerts, skip the lines and secure your spot at our hottest live performances, ensuring you never miss out on the action.</p><br><p>Plus, you'll score discounts on merchandise so you can snag your favorite souvenirs at a great price.</p>`,
		p2: `<p>But that's not all – you'll also get the chance to meet select performers up close and personal.</p><br><p>Whether you're snapping a selfie or getting an autograph, these meet and greets are sure to be memorable experiences.</p>`,
		p3: `<p>Don't miss out on the ultimate entertainment experience.</p><br><p>Get your Third Planet Studio All-Access Pass today and unlock a world of excitement!</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
	const mint = `https://embed.ipfscdn.io/ipfs/bafybeigdie2yyiazou7grjowoevmuip6akk33nqb55vrpezqdwfssrxyfy/erc1155.html?contract=0x30d3A5FBbd459825ab4C56F8db6d5C90f8c3C411&chain=%7B%22name%22%3A%22Polygon+Mainnet%22%2C%22chain%22%3A%22Polygon%22%2C%22rpc%22%3A%5B%22https%3A%2F%2F137.rpc.thirdweb.com%2F%24%7BTHIRDWEB_API_KEY%7D%22%5D%2C%22nativeCurrency%22%3A%7B%22name%22%3A%22MATIC%22%2C%22symbol%22%3A%22MATIC%22%2C%22decimals%22%3A18%7D%2C%22shortName%22%3A%22matic%22%2C%22chainId%22%3A137%2C%22testnet%22%3Afalse%2C%22slug%22%3A%22polygon%22%2C%22icon%22%3A%7B%22url%22%3A%22ipfs%3A%2F%2FQmcxZHpyJa8T4i63xqjPYrZ6tKrt55tZJpbXcjSDKuKaf9%2Fpolygon%2F512.png%22%2C%22width%22%3A512%2C%22height%22%3A512%2C%22format%22%3A%22png%22%7D%7D&clientId=f0befac3890d5157677c9e54c7713da5&tokenId=1&theme=system&primaryColor=purple`;
</script>

<div class="max-w-screen-xl items-center sm:flex">
	<div class="p-4 sm:w-auto">
		<iframe
			class="h-[520px] w-auto rounded-xl"
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
			<span class={grad2}>Exclusive <span class={grad1}>Access</span></span>
		</h2>
		<p class="mx-auto text-xl">
			{@html text.p1}
		</p>
		<h2 class="my-4 text-right text-4xl font-bold sm:text-5xl">
			<span class={grad2}>Unlockable <span class={grad1}>Content</span></span>
		</h2>
		<p class="mx-auto text-xl">
			{@html text.p2}
		</p>
	</div>
</div>
