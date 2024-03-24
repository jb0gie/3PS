<script>
	export let artist;
</script>

	<div class="w-64 rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
		<a href={artist?.route+"/index.html"}>
			<img src={artist?.pic[0]} alt={artist?.title} class="h-80 w-72 object-cover rounded-xl" />
			<div class="px-4 py-3 w-72">
				<span class="mr-3 uppercase text-xs">{artist?.title}</span>
			</div>
		</a>
	</div>
