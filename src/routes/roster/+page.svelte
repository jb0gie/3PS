<script>
	import { onMount, tick } from 'svelte';
	import { activeTab, activeGenresTab } from './store.js';
	import { Check, CaretSort } from 'radix-icons-svelte';
	import * as Tabs from '../../lib/components/ui/tabs';
	import * as Command from '$lib/components/ui/command';
	import * as Popover from '$lib/components/ui/popover';
	import { Button } from '../../lib/components/ui/button';
	import { cn } from '../../lib/utils';
	import Menu from './(components)/menu.svelte';
	import Sidebar from './(components)/sidebar.svelte';
	import Musician from './(components)/musician.svelte';
	import Separator from '../../lib/components/ui/separator/separator.svelte';
	import PageTitle from '../../lib/components/PageTitle/PageTitle.svelte';

	export let data;
	let open = false;
	let value = '';

	console.log({data});

	onMount(async () => {
		activeGenresTab.set(data.genres[0]);
	});

	$: selectedValue = data.genres.find((f) => f.value === value)?.label ?? 'Select a genre...';
	// We want to refocus the trigger button when the user selects
	// an item from the list so users can continue navigating the
	// rest of the form with the keyboard.
	
</script>

<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<PageTitle>
		<svelte:fragment slot="pageName">Roster</svelte:fragment>
	</PageTitle>
	
	<div class="h-5 md:h-16" />

	<div class="rounded-[0.5rem] supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur w-auto">
		<div class="grid lg:grid-cols-5">
			<Sidebar class="hidden lg:block" />
			<div class="col-span-3 lg:col-span-4 lg:border-l">
				<div class="h-full px-4 py-6 lg:px-8">
					{#if $activeTab === 'music'}
						<!-- MUSIC -->
						<Tabs.Root value="music" class="h-full space-y-6">
							<Tabs.List>
								{#each data.genres as genre}
									<Tabs.Trigger value={genre} class="relative text-xl">
										{genre}
									</Tabs.Trigger>
								{/each}
							</Tabs.List>
							{#each data.genres as genre}
								<Tabs.Content value={genre} class="border-none p-0 outline-none">
									<section class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
										{#each data.musicians as musician (musician.id)}
											{#if musician && musician.genre === genre}	
												<Musician {musician} />
											{/if}
										{/each}
									</section>
								</Tabs.Content>
							{/each}
						</Tabs.Root>
					{:else if $activeTab === 'art'}
					<!-- ART -->
					<h1>3rd Planet Ar</h1>	
						
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
