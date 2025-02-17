<script>
	import PageTitle from '$lib/components/page-title.svelte';
	import EasterEggHero from './(components)/EasterEggHero.svelte';
</script>

<div>
	<div class="container mx-auto overflow-hidden p-4 md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Easter Egg Hunt</svelte:fragment>
		</PageTitle>
		<EasterEggHero />
	</div>
</div>
