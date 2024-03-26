<script>
	import Claim from './Claim.svelte'
	
	const name = 'Migtrix';

</script>

<header class="px-4 lg:flex mt-10 items-center h-full lg:mt-0">
	<div class="w-full">
		<h1 class="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-bold">
			Enter the <span class="text-green-700">{name}</span>
		</h1>
		<div class="h-8" />
		<p class="text-sm sm:text-base md:text-lg mb-10">
			<code>
				Dive deep into the exclusive pre-release of "What Do I Know" by Migs718. Available only
				through this unique NFT or at select live performances. Experience this special edition of
				the song in a way that's reserved for the true fans before anyone else.
			</code>
		</p>
		<Claim/>
	</div>
</header>