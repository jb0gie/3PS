<script>
	import Artist from './Artist.svelte';
	import { searchQuery } from '$lib/stores/search';

	let { data } = $props();

	let filteredArtists = $derived(
		data.artists.filter((artist) => {
			if (!$searchQuery) return true;
			return artist.title.toLowerCase().includes($searchQuery);
		})
	);

	// $effect(() => {
	// 	console.log('Filtered Artists:', filteredArtists); // Debug log
	// });
</script>

<!-- Portrait mode: vertical grid with larger cards -->
<div class="grid grid-cols-1 gap-6 p-4 md:hidden">
	{#each filteredArtists as artist (artist.id)}
		<div class="w-full">
			<Artist {artist} />
		</div>
	{/each}
</div>
<!-- Landscape mode: horizontal scrolling with smaller cards -->
<div class="hidden gap-4 overflow-x-auto p-4 pb-6 md:flex">
	{#each filteredArtists as artist (artist.id)}
		<div class="w-48 flex-shrink-0 md:w-64 lg:w-72">
			<Artist {artist} />
		</div>
	{/each}
</div>
