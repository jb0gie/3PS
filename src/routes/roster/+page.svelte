<script>
	import { onMount } from 'svelte';
	import { activeTab, activeGenresTab } from './store.js';
	import * as Resizable from "$lib/components/ui/resizable";
	import Sidebar from './(components)/sidebar.svelte';
	import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
	import MusicTab from './(components)/MusicTab.svelte';
	import ArtTab from './(components)/ArtTab.svelte';
	export let data;
	let open = false;
	let value = '';

	// console.log({data});

	onMount(async () => {
		activeGenresTab.set(data.genres[0]);
	});
	
</script>

<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<PageTitle>
		<svelte:fragment slot="pageName">Roster</svelte:fragment>
	</PageTitle>
	
	<div class="h-5 md:h-16" />

	<Resizable.PaneGroup
  direction="vertical"
  class="min-h-[800px] max-w-auto rounded-lg border"
>
  <Resizable.Pane defaultSize={25}>
    <div class="flex h-full items-center justify-center p-6">
			<Sidebar />
    </div>
  </Resizable.Pane>
  <Resizable.Handle withHandle />
  <Resizable.Pane defaultSize={75}>
    <div class="flex h-full items-center justify-center">
      <span class="font-semibold">
				{#if $activeTab === 'music'}
						<MusicTab {data}/>
					{:else if $activeTab === 'art'}
					<div class="overflow-auto">
						<ArtTab {data}/>
					</div>	
					{/if}
			</span>
    </div>
  </Resizable.Pane>
</Resizable.PaneGroup>
	<!-- <div class="rounded-[0.5rem] supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur w-auto">
		<div class="grid lg:grid-cols-5">
			<Sidebar class="" />
			<div class="col-span-3 lg:col-span-4 lg:border-l">
				<div class="h-full px-4 py-6 lg:px-8">
					{#if $activeTab === 'music'}
						<MusicTab {data}/>
					{:else if $activeTab === 'art'}
					<div class="overflow-auto">
						<ArtTab {data}/>
					</div>	
					{/if}
				</div>
			</div>
		</div>
	</div> -->
</div>
