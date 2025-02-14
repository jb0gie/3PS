<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import PageTitle from '$lib/components/page-title.svelte';
	import MusicTab from './(components)/MusicTab.svelte';
	import ArtTab from './(components)/ArtTab.svelte';

	export let data;
	let tab = 'music';
	let genresTab = data.genres[0];

	function updateTab(newTab: 'music' | 'art') {
		tab = newTab;
	}

	function updateGenresTab(newGenre: string) {
		genresTab = newGenre;
	}
</script>

<div class="container mx-auto p-4">
	<div class="flex items-center space-x-4 p-4">
		<Button
			variant={tab === 'music' ? 'default' : 'ghost'}
			class="text-xl"
			onclick={() => updateTab('music')}
		>
			🎸 Music
		</Button>
		<Button
			variant={tab === 'art' ? 'default' : 'ghost'}
			class="text-xl"
			onclick={() => updateTab('art')}
		>
			🎨 Art
		</Button>
	</div>

	<div class="mt-8">
		{#if tab === 'music'}
			<div class="w-full">
				<MusicTab {data} {genresTab} onGenreChange={updateGenresTab} />
			</div>
		{:else if tab === 'art'}
			<div class="w-full">
				<ArtTab {data} />
			</div>
		{/if}
	</div>
</div>
