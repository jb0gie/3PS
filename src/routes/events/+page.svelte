<script lang="ts">
	import PageTitle from '$lib/components/page-title.svelte';
	import EventsHero from './EventsHero.svelte';
	import EventsMid from './EventsMid.svelte';
	import EventsFooter from './EventsFooter.svelte';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="min-h-screen bg-neutral-950">
	<div class="container mx-auto px-6 py-12 md:px-8 lg:px-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Events</svelte:fragment>
		</PageTitle>

		<div class="mt-16 space-y-24">
			<!-- Hero Section -->
			<EventsHero />

			<!-- NFT Music Hall Events -->
			<EventsMid />

			<!-- ThirdPlanet Events -->
			<EventsFooter {data} />
		</div>
	</div>
</div>
