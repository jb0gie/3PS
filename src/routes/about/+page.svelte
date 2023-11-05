<script>
	import AboutHero from './AboutHero.svelte';
	import AboutFounders from './AboutFounders.svelte';
	import AboutFooter from './AboutFooter.svelte';
	import OrbGlow from '../../lib/components/OrbGlow.svelte';
	import third_planet from '$lib/images/logo-s.png';

	const gradientHeading =
		'bg-gradient-to-br from-blue-500 to-cyan-300 bg-clip-text text-transparent box-decoration-clone';
</script>

<div class="sm:flex items-center max-w-screen-xl">
	<div class="sm:w-1/2 p-10">
		<div class="image object-center text-center">
			<OrbGlow />
			<img src={third_planet} alt="logo" />
		</div>
	</div>
	<AboutHero />
</div>

<div class="text-center mb-16">
	<h1 class="h1 text-4xl sm:text-6xl leading-normal mt-16 font-extrabold tracking-tight">
		3PS <span class={gradientHeading}>FOUNDERS</span>
	</h1>
	<AboutFounders />
</div>

<div class="mb-16">
	<AboutFooter />
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
