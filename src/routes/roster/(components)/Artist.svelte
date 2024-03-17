<script>
	export let artist;
	console.log({artist})
</script>

	<div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
		<a href={artist?.route}>
			<img src={artist?.pic[0]} alt={artist?.title} class="h-80 w-72 object-cover rounded-t-xl" />
			<div class="px-4 py-3 w-72">
				<span class="text-gray-400 mr-3 uppercase text-xs">{artist?.title}</span>
				<!-- <p class="text-lg font-bold text-black truncate block capitalize">{artist?.title}</p> -->
			</div>
		</a>
	</div>
