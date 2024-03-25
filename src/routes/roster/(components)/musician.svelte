<script>
	export let musician;
</script>

<div class="w-64 supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
	<a href={musician?.route + '/index.html'}>
		<img src={musician?.pic[0]} alt={musician?.name} class="h-80 w-72 object-cover rounded-xl"
		/>
		<div class="px-4 py-3 w-72">
			<span class="mr-3 uppercase text-xs">{musician?.name}</span>
			<p class="text-lg font-bold truncate block capitalize">{musician?.genre}</p>
		</div>
	</a>
</div>
