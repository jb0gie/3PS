<script lang="ts">
	import MusicRoster from './MusicRoster.svelte';
</script>

<header id="hero" class="bg-surface-100-800-token hero-gradient">
	<div class="section-container"><h1 class="text-6xl font-bold mb-8">MUSICIANs 🎹🎸🎶</h1></div>
</header>

<section id="sponsors" class="bg-surface-100-800-token">
	<div class="section-container">
		<MusicRoster />
	</div>
</section>

<style lang="postcss">
	.section-container {
		@apply w-full max-w-7xl mx-auto p-4 py-16 md:py-24;
	}
	/* prettier-ignore */
	.hero-gradient {
		background-image:
			radial-gradient(at 0% 0%, rgba(var(--color-secondary-500) / 0.33) 0px, transparent 50%),
			radial-gradient(at 98% 1%, rgba(var(--color-error-500) / 0.33) 0px, transparent 50%);
	}
</style>
