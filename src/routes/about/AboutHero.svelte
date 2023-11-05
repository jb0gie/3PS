<script>
	// import DocsLogoHero from '$lib/components/DocsLogos/DocsLogoHero.svelte';
	import third_planet from '$lib/images/3PSFINALLOGO2.png';

	const title = 'About 3PS';
	const p1 = {
		paragraph: `<p>As a family-based operation, we offer the trust that is critical when entering into ​new territory.</p><br><p>We share your passion and understand that there is no one way to express yourself and everyone should have the freedom to create and write their own future and legacy.</p>`
	};
</script>

<div class="sm:w-1/2 p-5">
	<div class="text">
		<h2 class="my-4 font-bold text-3xl sm:text-4xl">
			About <span class="text-indigo-600">{title}</span>
		</h2>
		<p class="mx-auto text-2xl">
			{@html p1.paragraph}
		</p>
	</div>
</div>