<script lang="ts">
	import PageTitle from '$lib/components/page-title.svelte';
	import EventsHero from './EventsHero.svelte';
	import EventsMid from './EventsMid.svelte';
	import EventsFooter from './EventsFooter.svelte';
</script>

<div class="container mx-auto overflow-hidden p-8 md:rounded-lg md:p-10 lg:p-12">
	<PageTitle>
		<svelte:fragment slot="pageName">Events</svelte:fragment>
	</PageTitle>
	<div class="h-5 md:h-10"></div>
	<EventsHero />
	<EventsMid />
	<EventsFooter />
</div>

<style lang="postcss">
	/* Remove unused styles */
</style>
