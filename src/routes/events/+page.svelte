<script>
    import PageTitle from '../../lib/components/PageTitle/PageTitle.svelte';
    import EventsHero from "./EventsHero.svelte";
    import EventsMid from "./EventsMid.svelte";
    import EventsFooter from "./EventsFooter.svelte";
    const cBase = 'flex-shrink-0 m-6 relative variant-glass-secondary rounded-xl overflow-hidden max-w-sm shadow-lg gradient-end';
</script>
<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	<PageTitle>
		<svelte:fragment slot="pageName">Events</svelte:fragment>
	</PageTitle>
    <div class="h-5 md:h-10"/>
    <EventsHero />
    <EventsMid />
    <EventsFooter />
</div>

<section class="bg-surface-100-800-token mid-gradient">
    <!-- <div class="section-container mx-auto px-12"></div> -->
</section>
<section class="bg-surface-100-800-token end-gradient">
    <div class="section-contianer mx-auto px-4"></div>
</section>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-28;
	}
</style>