<script>
	import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
	import EasterEggHero from './(components)/EasterEggHero.svelte';
</script>

<div>
	<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Easter Egg Hunt</svelte:fragment>
		</PageTitle>
		<EasterEggHero />
	</div>
</div>
