<script>
	import PageTitle from '$lib/components/page-title.svelte';
	import VipHero from './(components)/VipHero.svelte';
</script>

<div>
	<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">ASTRO FEST 24</svelte:fragment>
		</PageTitle>
		<VipHero />
	</div>
</div>
