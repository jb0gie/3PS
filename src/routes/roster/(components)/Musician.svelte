<script>
	import * as HoverCard from '$lib/components/ui/hover-card';
	export let musician;
	let randomIndex = Math.floor(Math.random() * musician?.pic.length);
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<div
		class="w-64 supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl duration-500 hover:scale-90 hover:shadow-xl"
		>
		<a href={musician?.route + '/index.html'}>
			<img
			src={musician?.pic[randomIndex]}
			alt={musician?.name}
			class="h-80 w-72 object-cover rounded-xl"
			/>
			<div class="px-4 py-3 w-64 overflow-clip">
				<span class="mr-3 uppercase text-xs">{musician?.name}</span>
				<p class="text-lg font-extrabold truncate block capitalize">{musician?.genre}</p>
				<p class="text-sm font-semibold truncate block">{musician?.subgenre}</p>
			</div>
		</a>
	</div>
</HoverCard.Trigger>
<HoverCard.Content>
	<div class="space-y-5">
			Learn more about {musician?.name}
		</div>
	</HoverCard.Content>
</HoverCard.Root>
