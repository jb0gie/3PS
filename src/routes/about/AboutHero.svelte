<script>
	// import DocsLogoHero from '$lib/components/DocsLogos/DocsLogoHero.svelte';
	import third_planet from '$lib/images/3PSFINALLOGO2.png';

	const title = "About 3PS"
	const p1 = {
		paragraph: `<p>As a family-based operation, we offer the trust that is critical when entering into ​new territory.</p><br><p>We share your passion and understand that there is no one way to express yourself and everyone should have the freedom to create and write their own future and legacy.</p>`,
	}
</script>

<div class="section-container mx-auto px-12">
	<!-- <img src={third_planet} alt="logo" /> -->
	<br />
	<h2 class="text-6xl font-bold mb-8">{title}</h2>
	<p class="h3 mx-auto">{@html p1.paragraph}</p>
</div>