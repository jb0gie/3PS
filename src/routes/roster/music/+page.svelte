<script>
	// import { PlusCircled } from "radix-icons-svelte";
	import { Button } from "$lib/components/ui/button";
	import { Separator } from "$lib/components/ui/separator";
	import * as Tabs from "$lib/components/ui/tabs";
	import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
	import db from '$lib/db';
	let musician;
	db.musician.subscribe((m) => (musician = m));

	const glassMorphism =
		'supports-[backdrop-filter]:bg-background/60 bg-background/95 shadow-sm backdrop-blur rounded-xl transform transition duration-500 hover:scale-105 relative border';
</script>

<!-- Display artist profile here -->
<!-- <pre>{JSON.stringify(musician, null, 2)}</pre> -->
<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<PageTitle>
		<svelte:fragment slot="pageName">Musicians</svelte:fragment>
	</PageTitle>

	<div class="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-2 xl:p-5">
		{#each musician as roster}
			<div class={glassMorphism}>
				<div class="p-2 flex justify-center">
					<a href={roster.route}>
						<img class="rounded-md" src={roster?.pic[0]} alt={roster.name} loading="lazy" />
					</a>
				</div>
				<div class="px-4 pb-3">
					<div>
						<a href={roster.route}>
							<h5
								class="text-xl font-semibold tracking-tight hover:text-violet-800 dark:hover:text-violet-300 text-gray-900 dark:text-white"
							>
								{roster.name}
							</h5>
						</a>
						<p class="antialiased text-gray-600 dark:text-gray-400 text-sm">{roster.genre}</p>
					</div>
				</div>
			</div>
		{/each}
	</div>
</div>
