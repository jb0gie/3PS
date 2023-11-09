<script>
	export let artist;
</script>

<div class="relative overflow-hidden mt-16">
	<div class="max-w-7xl mx-auto">
		<div class="relative z-10 pb-8sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
			<div class="pt-1" />
			<main
				class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28"
			>
				<div class="sm:text-center lg:text-left">
					<h2 class="my-6 text-2xl tracking-tight font-extrabold sm:text-3xl md:text-4xl">
						About {artist.title}
					</h2>
					<p class="text-xl md:pr-10">{@html artist?.bio}</p>
				</div>
			</main>
		</div>
	</div>
	<div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
		<img
			class="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
			src={artist?.pic[0]}
			alt={artist?.desc}
		/>
	</div>
</div>
