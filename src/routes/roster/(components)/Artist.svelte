<script>
	import * as HoverCard from '$lib/components/ui/hover-card';
	export let artist;
</script>

<HoverCard.Root>
	<HoverCard.Trigger>
		<div
			class="w-64 supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl duration-500 hover:scale-90 hover:shadow-xl"
		>
			<a href={artist?.route + '/index.html'}>
				<img src={artist?.pic[0]} alt={artist?.title} class="h-80 w-72 object-cover rounded-xl" />
				<div class="px-4 py-3 w-72">
					<span class="mr-3 uppercase text-xs">{artist?.title}</span>
				</div>
			</a>
		</div>
	</HoverCard.Trigger>
	<HoverCard.Content>
		<div class="space-y-5">
			Learn more about {artist?.title}
		</div>
	</HoverCard.Content>
</HoverCard.Root>
