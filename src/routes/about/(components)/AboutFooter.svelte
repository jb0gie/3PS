<script>
	import { Canvas } from '@threlte/core';
	import VipPass from './VipPass.svelte';
	const title = '3PS?';
	const text = {
		p1: `<p>The entertainment industry has undergone significant changes in the past decade, with music becoming nearly free on subscription-based platforms. However, the COVID-19 pandemic brought the industry to a standstill, causing many artists to lose enthusiasm and initiative.</p><br /><p> The shutdown of marketing resources like bars, lounges, and venues, coupled with restrictions on live music, made it challenging for artists to succeed through real-life performances or showcases.</p>`,
		p2: `<p>Over the last decade, music venues have not compensated acts as they used to. Artists who once performed at prestigious venues like Lincoln Center and The Hollywood Bowl now book smaller venues, often funding their own tours. With large venues focusing on mainstream top 40 music, indie acts and legendary artists are often left behind.</p><br /><p>Despite some audiences preferring the intimate experience of smaller venues, bands must perform multiple gigs on tour to earn what they once did. It’s a challenging time to be a musician or artist, with many persisting simply for the love of creating for their audience.</p>`
	};
	const grad1 =
		'bg-gradient-to-br from-pink-500 to-violet-500 bg-clip-text text-transparent box-decoration-clone';
	const grad2 =
		'bg-gradient-to-br from-red-500 to-yellow-500 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class="sm:flex items-center max-w-screen-xl">
	<div class="sm:w-1/2 p-4">
		<div class="h-[720px] w-auto">
			<Canvas>
				<VipPass />
			</Canvas>
		</div>
	</div>
	<div class="sm:w-1/2 p-5 h-[720px] overflow-auto">
		<div class="text">
			<h2 class="my-4 font-bold text-4xl sm:text-6xl">
				Create with <span class={grad2}>Third<span class={grad1}>Planet</span></span>?
			</h2>
			<p class="mx-auto text-2xl">
				{@html text.p1}
			</p>
			<br />
			<p class="mx-auto text-2xl">
				{@html text.p2}
			</p>
		</div>
	</div>
</div>

<!-- <div class="mx-auto px-12">
	<div>
		<h2 class="my-4 font-bold text-3xl sm:text-4xl">
			Why <span class="text-indigo-600">{title}</span>
		</h2>
		<p class="mx-auto text-2xl">
			{@html p1.paragraph}
		</p>
	</div>
</div> -->
