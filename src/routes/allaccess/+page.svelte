<script>
	import PageTitle from '$lib/components/page-title.svelte';
	import AllAccessHero from './(components)/AllAccessHero.svelte';
</script>

<div class="min-h-screen">
	<div class="container mx-auto p-4 md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">All Access Pass</svelte:fragment>
		</PageTitle>
		<AllAccessHero />
	</div>
</div>
