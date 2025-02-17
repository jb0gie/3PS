<script>
	import Claim from './Claim.svelte';

	const name = 'Migtrix';
</script>

<header class="mt-10 h-full items-center px-4 lg:mt-0 lg:flex">
	<div class="w-full">
		<h1 class="text-lg font-bold sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl">
			Enter the <span class="text-green-700">{name}</span>
		</h1>
		<div class="h-8"></div>
		<p class="mb-10 text-sm sm:text-base md:text-lg">
			<code>
				Dive deep into the exclusive pre-release of "What Do I Know" by Migs718. Available only
				through this unique NFT or at select live performances. Experience this special edition of
				the song in a way that's reserved for the true fans before anyone else.
			</code>
		</p>
		<Claim />
	</div>
</header>
