<script>
	import { onMount } from 'svelte';
	import { activeTab, activeGenresTab } from './store.js';
	import * as Resizable from '$lib/components/ui/resizable';
	import { Button } from '$lib/components/ui/button';
	import Sidebar from './(components)/Sidebar.svelte';

	import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
	import MusicTab from './(components)/MusicTab.svelte';
	import ArtTab from './(components)/ArtTab.svelte';
	export let data;

	// console.log({data});

	onMount(async () => {
		activeGenresTab.set(data.genres[0]);
	});
	function switchTab(tab) {
		activeTab.set(tab);
		console.log($activeTab);
	}
</script>

<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<PageTitle>
		<svelte:fragment slot="pageName">Roster</svelte:fragment>
	</PageTitle>

	<div class="h-5 md:h-16" />
	<div
		class="supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl"
	>
		<div class="text-center p-10">
			<div class="flex flex-auto">
				<Sidebar/>
			</div>
		</div>

		{#if $activeTab === 'music'}
			<div class="p-10 w-auto">
				<MusicTab {data} />
			</div>
		{:else if $activeTab === 'art'}
			<div class="p-10 w-auto">
				<ArtTab {data} />
			</div>
		{/if}
	</div>

	<!-- <Resizable.PaneGroup
		direction="vertical"
		class="min-h-[800px] w-auto supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur max-w-auto rounded-lg"
	>
		<Resizable.Pane defaultSize={30}>
			<div class="flex h-full text-center justify-center">
				<div class="text-center p-10">
					<div class="flex flex-auto">
						<Button class="justify-start" on:click={() => switchTab('music')}>
							<div class="text-2xl font-bold tracking-tight">
								<span class="mr-2">🎸 Music</span>
							</div>
						</Button>
						<div class="w-4" />
						<Button class="justify-start" on:click={() => switchTab('art')}>
							<div class="text-2xl font-bold tracking-tight">
								<span class="mr-2">🎨 Art</span>
							</div>
						</Button>
					</div>
				</div>
			</div>
		</Resizable.Pane>
		<Resizable.Handle withHandle />
		<Resizable.Pane defaultSize={90}>
			<div class="flex flex-nowrap h-full items-center justify-center">
				<span class="font-semibold">
					{#if $activeTab === 'music'}
						<div class="overflow-auto w-[980px]">
							<MusicTab {data} />
						</div>
					{:else if $activeTab === 'art'}
						<code class="text-xs font-bold">hold SHIFT and mouse scroll</code>
						<div class="overflow-auto w-[980px]">
							<ArtTab {data} />
						</div>
					{/if}
				</span>
			</div>
		</Resizable.Pane>
	</Resizable.PaneGroup> -->
</div>
