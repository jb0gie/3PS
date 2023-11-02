<script lang="ts">
	// HTTP response data provided by +page.ts
	import type { PageData } from '../$types';
	export let data: PageData;
	$: ({ contributors } = data);

	// Components
	// import HomeFeatures from './HomeFeatures.svelte';
	// Page Partials
	import AboutHero from './AboutHero.svelte';
	import AboutFounders from './AboutFounders.svelte'
	import AboutFooter from './AboutFooter.svelte';

	// import third_planet from '$lib/images/3PSFINALLOGO2.png';

</script>

<div>
	<!-- hero -->
	<header id="hero" class="bg-surface-100-800-token hero-gradient"><AboutHero/></header>
	<!-- founder -->
	<section id="founders" class="bg-surface-100-800-token founders-gradient">
		<div class="section-container"><AboutFounders/></div>
	</section>
	<!-- why 3ps -->
	<section id="why" class="bg-surface-100-800-token why-gradient"><AboutFooter/></section>
</div>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-28;
	}
	/* Hero Gradient */
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.founders-gradient {
		background-image:
			radial-gradient(at 0% 100%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%);
	}
	/* SvelteKit Gradient */
	/* prettier-ignore */
	.why-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.50) 0px, transparent 50%),
			radial-gradient(at 100% 100%,  rgba(var(--color-primary-500) / 0.24) 0px, transparent 50%);
	}
	/* Features Gradient */
	/* prettier-ignore */
	/* .features-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 100% 0%,  rgba(var(--color-primary-500) / 0.33) 0px, transparent 50%);
	} */
	/* Sponsors Gradient */
	/* prettier-ignore */
	/* .sponsors-gradient {
		background-image:
		radial-gradient(at 0% 99%, rgba(var(--color-error-500) / 0.23) 0px, transparent 50%),
		radial-gradient(at 100% 100%, rgba(var(--color-primary-500) / 0.19) 0px, transparent 50%);
	} */
	/* Radial */
	/* prettier-ignore */
	/* .bottom-cta-gradient {
		@apply bg-primary-500 text-on-primary-token;
		background-image:
		radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%),
		radial-gradient(at 100% 100%, rgba(var(--color-secondary-500) / 0.75) 0px, transparent 40%);
	} */
</style>
