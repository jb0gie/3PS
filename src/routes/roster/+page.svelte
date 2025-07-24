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

<div class="mx-auto max-w-7xl p-4">
	<!-- Page Header -->
	<div class="mb-8 text-center">
		<h1 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">Our Roster</h1>
		<p class="mx-auto max-w-2xl text-lg text-muted-foreground">
			Discover the talented musicians and artists of Third Planet Studio
		</p>
	</div>

	<!-- Modern Tab Navigation -->
	<div class="mb-8 flex justify-center">
		<div class="flex rounded-full bg-muted p-1 shadow-sm">
			<Button
				variant={tab === 'music' ? 'default' : 'ghost'}
				class="relative flex items-center gap-2 rounded-full px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 {tab ===
				'music'
					? 'shadow-md'
					: ''}"
				onclick={() => updateTab('music')}
			>
				<span class="text-2xl">🎸</span>
				<span>Music</span>
				{#if tab === 'music'}
					<div
						class="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary"
					></div>
				{/if}
			</Button>
			<Button
				variant={tab === 'art' ? 'default' : 'ghost'}
				class="relative flex items-center gap-2 rounded-full px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 {tab ===
				'art'
					? 'shadow-md'
					: ''}"
				onclick={() => updateTab('art')}
			>
				<span class="text-2xl">🎨</span>
				<span>Art</span>
				{#if tab === 'art'}
					<div
						class="absolute -bottom-1 left-1/2 h-1 w-8 -translate-x-1/2 rounded-full bg-primary"
					></div>
				{/if}
			</Button>
		</div>
	</div>

	<!-- Tab Content -->
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
