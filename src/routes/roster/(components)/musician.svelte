<script>
	export let musician;
	// console.log({musician})
</script>

	<div class="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
		<a href={musician?.route}>
			<img src={musician?.pic[0]} alt={musician?.name} class="h-80 w-72 object-cover rounded-t-xl" />
			<div class="px-4 py-3 w-72">
				<span class="text-gray-400 mr-3 uppercase text-xs">{musician?.name}</span>
				<p class="text-lg font-bold text-black truncate block capitalize">{musician?.genre}</p>
			</div>
		</a>
	</div>
