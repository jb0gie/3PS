<script>
	import * as Tabs from '$lib/components/ui/tabs';
	import Musician from './Musician.svelte';
	import { searchQuery } from '$lib/stores/search';

	let { data, genresTab, onGenreChange } = $props();

	let filteredMusicians = $derived(
		data.musicians.filter((musician) => {
			if (!$searchQuery) return true;

			return (
				musician.name.toLowerCase().includes($searchQuery) ||
				musician.genre.toLowerCase().includes($searchQuery) ||
				musician.subgenre.toLowerCase().includes($searchQuery)
			);
		})
	);

	$effect(() => {
		console.log('Filtered Musicians:', filteredMusicians); // Debug log
	});
</script>

<Tabs.Root value={genresTab} onValueChange={onGenreChange}>
	<div class="mb-8">
		<Tabs.List class="flex gap-2 overflow-x-auto p-2">
			{#each data.genres as genre}
				<Tabs.Trigger value={genre} class="whitespace-nowrap px-4 py-2 text-sm font-medium">
					{genre}
				</Tabs.Trigger>
			{/each}
		</Tabs.List>
	</div>

	{#each data.genres as genre}
		<Tabs.Content value={genre} class="outline-none">
			<div class="grid grid-cols-1 gap-6 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{#each filteredMusicians as musician (musician.id)}
					{#if musician && musician.genre === genre}
						<Musician {musician} />
					{/if}
				{/each}
			</div>
		</Tabs.Content>
	{/each}
</Tabs.Root>
