<script>
	import * as Tabs from '$lib/components/ui/tabs';
	import MediaQuery from '$lib/components/MediaQuery.svelte';
	import Musician from './Musician.svelte';

	let selectedGenre;
	$: selectedGenre = data.genres[0];

	export let data;

	const desktopText = 'hold SHIFT and mouse scroll';

	const container =
		'flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 justify-center text-center items-center';
	const section =
		'w-fit mx-auto flex lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5';
	const tabsContent = 'border-none p-0 outline-non overflow-auto hover:overflow-auto';
</script>

<Tabs.Root {selectedGenre}>
	<div class={container}>
		<code class="text-xs font-bold">click to select a genre</code>
		<div class="overflow-x-auto">
			<Tabs.List class="flex flex-wrap md:flex-nowrap">
				{#each data.genres as genre}
					<Tabs.Trigger value={genre} class="text-sm w-full md:text-md md:w-auto">
						{genre}
					</Tabs.Trigger>
				{/each}
			</Tabs.List>
		</div>
		<MediaQuery query="(min-width: 1281px)" let:matches>
			{#if matches}
				<code class="text-xs font-bold">{desktopText}</code>
			{/if}
		</MediaQuery>
	</div>
	{#each data.genres as genre}
		<Tabs.Content value={genre} class={tabsContent}>
			<section class={section}>
				{#each data.musicians as musician (musician.id)}
					{#if musician && musician.genre === genre}
						<Musician {musician} />
					{/if}
				{/each}
			</section>
		</Tabs.Content>
	{/each}
</Tabs.Root>
