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

	$effect(() => {
		console.log('Filtered Artists:', filteredArtists); // Debug log
	});
</script>

<div class="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
	{#each filteredArtists as artist (artist.id)}
		<Artist {artist} />
	{/each}
</div>
