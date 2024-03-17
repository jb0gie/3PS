<script>
	import { onMount } from 'svelte';
	import { activeTab, activeGenresTab } from './store.js';
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

	<div class="rounded-[0.5rem] supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur w-auto">
		<div class="grid lg:grid-cols-5">
			<Sidebar class="" />
			<div class="col-span-3 lg:col-span-4 lg:border-l">
				<div class="h-full px-4 py-6 lg:px-8">
					{#if $activeTab === 'music'}
						<!-- MusicTab.svelte -->
						<MusicTab {data}/>
					{:else if $activeTab === 'art'}
					<!-- ArtTab.svelte -->
					<div class="overflow-auto">
						<ArtTab {data}/>
					</div>	
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
