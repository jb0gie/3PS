<script>
	import * as Tabs from '$lib/components/ui/tabs';
	import Musician from './Musician.svelte';

	let selectedGenre;
	$: selectedGenre = data.genres[0];
	export let data;
</script>

<Tabs.Root {selectedGenre}>
	<Tabs.List>
		{#each data.genres as genre}
			<Tabs.Trigger value={genre} class="relative text-2xl">
				{genre}
			</Tabs.Trigger>
		{/each}
	</Tabs.List>
	{#each data.genres as genre}
		<Tabs.Content value={genre} class="border-none p-0 outline-non overflow-auto">
			<section
				class="w-fit mx-auto flex lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
			>
				<!-- <section
				class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
			> -->
				{#each data.musicians as musician (musician.id)}
					{#if musician && musician.genre === genre}
						<Musician {musician} />
					{/if}
				{/each}
			</section>
		</Tabs.Content>
	{/each}
</Tabs.Root>
