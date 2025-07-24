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

<div class="space-y-6">
	<!-- Genre Navigation -->
	<div class="flex flex-col space-y-4">
		<h2 class="text-2xl font-semibold tracking-tight">Browse by Genre</h2>

		<!-- Desktop: Modern Tab List -->
		<Tabs.Root value={genresTab} onValueChange={onGenreChange}>
			<Tabs.List class="hidden w-full justify-between rounded-full bg-muted p-1 shadow-sm lg:flex">
				{#each data.genres as genre}
					<Tabs.Trigger
						value={genre}
						class="relative flex-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 hover:scale-105 {genresTab ===
						genre
							? 'shadow-md'
							: ''}"
					>
						{genre}
						{#if genresTab === genre}
							<div
								class="absolute -bottom-1 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-primary"
							></div>
						{/if}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</Tabs.Root>

		<!-- Mobile: Dropdown -->
		<div class="block lg:hidden">
			<label for="genre-select" class="mb-2 block text-sm font-medium">Select Genre</label>
			<select
				id="genre-select"
				class="w-full rounded-lg border border-input bg-background px-3 py-3 text-sm ring-offset-background transition-colors focus:ring-2 focus:ring-ring"
				value={genresTab}
				onchange={(e) => onGenreChange((e.target as HTMLSelectElement).value)}
			>
				{#each data.genres as genre}
					<option value={genre}>{genre}</option>
				{/each}
			</select>
		</div>
	</div>

	<!-- Content -->
	<Tabs.Root value={genresTab} onValueChange={onGenreChange}>
		{#each data.genres as genre}
			<Tabs.Content value={genre} class="outline-none">
				<!-- Portrait mode: vertical grid with larger cards -->
				<div class="grid grid-cols-1 gap-6 p-4 md:hidden">
					{#each filteredMusicians as musician (musician.id)}
						{#if musician && musician.genre === genre}
							<div class="w-full">
								<Musician {musician} />
							</div>
						{/if}
					{/each}
				</div>
				<!-- Landscape mode: horizontal scrolling with smaller cards -->
				<div class="hidden gap-4 overflow-x-auto p-4 pb-6 md:flex">
					{#each filteredMusicians as musician (musician.id)}
						{#if musician && musician.genre === genre}
							<div class="w-48 flex-shrink-0 md:w-64 lg:w-72">
								<Musician {musician} />
							</div>
						{/if}
					{/each}
				</div>
			</Tabs.Content>
		{/each}
	</Tabs.Root>
</div>
