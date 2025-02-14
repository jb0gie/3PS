<script lang="ts">
	import * as Tabs from '$lib/components/ui/tabs';
	import Musician from './Musician.svelte';
	import { searchQuery } from '$lib/stores/search';

	let { data, genresTab, onGenreChange } = $props();

	let filteredMusicians = $derived(
		data.musicians.filter((musician: any) => {
			if (!$searchQuery) return true;

			return (
				musician.name.toLowerCase().includes($searchQuery) ||
				musician.genre.toLowerCase().includes($searchQuery) ||
				musician.subgenre.toLowerCase().includes($searchQuery)
			);
		})
	);

	// $effect(() => {
	// 	console.log('Filtered Musicians:', filteredMusicians); // Debug log
	// });
</script>

<Tabs.Root value={genresTab} onValueChange={onGenreChange}>
	<Tabs.List class="hidden w-full justify-between lg:flex lg:gap-2 lg:p-2">
		{#each data.genres as genre}
			<Tabs.Trigger value={genre} class="flex-1 whitespace-nowrap px-6 py-2 text-sm font-medium">
				{genre}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>

	<div class="block lg:hidden">
		<select
			class="w-full rounded-lg border border-input bg-background px-3 py-3 text-sm ring-offset-background"
			value={genresTab}
			onchange={(e) => onGenreChange((e.target as HTMLSelectElement).value)}
		>
			{#each data.genres as genre}
				<option value={genre}>{genre}</option>
			{/each}
		</select>
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
