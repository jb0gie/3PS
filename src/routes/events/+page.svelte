<script lang="ts">
    import EventsHero from "./EventsHero.svelte";
    import EventsMid from "./EventsMid.svelte";
    import EventsFooter from "./EventsFooter.svelte";
    const cBase = 'flex-shrink-0 m-6 relative variant-glass-secondary rounded-xl overflow-hidden max-w-sm shadow-lg gradient-end';
</script>
<section class="bg-surface-100-800-token start-gradient">
    <div class="section-container mx-auto px-4 "><EventsHero /></div>
</section>
<section class="bg-surface-100-800-token mid-gradient">
    <div class="section-container mx-auto px-12"><EventsMid /></div>
</section>
<section class="bg-surface-100-800-token end-gradient">
    <div class="section-contianer mx-auto px-4"><EventsFooter /></div>
</section>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-28;
	}
</style>