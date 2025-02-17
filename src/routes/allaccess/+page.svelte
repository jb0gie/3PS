<script>
	import PageTitle from '$lib/components/page-title.svelte';
	import AllAccessHero from './(components)/AllAccessHero.svelte';
</script>

<div>
	<div class="container mx-auto overflow-hidden p-4 md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">All Access Pass</svelte:fragment>
		</PageTitle>
		<AllAccessHero />
	</div>
</div>
