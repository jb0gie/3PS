<script>
	import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
	import AaHero from './(components)/AAHero.svelte';
</script>

<div>
	<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">All Access Pass</svelte:fragment>
		</PageTitle>
		<AaHero />
	</div>
</div>
