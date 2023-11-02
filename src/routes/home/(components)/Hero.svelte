<script>
	// import DocsLogoHero from '$lib/components/DocsLogos/DocsLogoHero.svelte';
	import third_planet from '$lib/images/3PSFINALLOGO2.png';
	import HeroComponents from './HeroComponents.svelte';
</script>

<div class="grid grid-cols-1 xl:grid-cols-2 gap-4 md:gap-10 items-center">
	<!-- Info -->
	<div class="flex flex-col items-center xl:items-start text-center xl:text-left space-y-4">
		<img src={third_planet} alt="logo" />
		<h1 class="h1 !text-5xl md:!text-6xl max-w-[600px]">
			Follow us on 
			<a href="https://twitter.com/3PlanetStudio">
				<i class="fa-brands fa-x-twitter" />
			</a> 
		</h1>
		<p class="!text-xl max-w-[475px]">for live updates!</p>
		<div class="flex gap-4">
			<a href="/service" class="btn variant-ghost-error">
				<span>Services</span>
				<i class="fa-solid fa-arrow-right-long" />
			</a>
			<a href="/about" class="btn variant-glass-error">Learn More</a>
		</div>
	</div>
	<!-- Components -->
	<div class="hidden md:inline-block w-full max-w-[650px] mx-auto mt-20">
		<HeroComponents />
	</div>
</div>
