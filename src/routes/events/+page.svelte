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
	.start-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.mid-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.end-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
</style>