<script>
	import PageTitle from '$lib/components/PageTitle/PageTitle.svelte';
	import LMetHero from './(components)/LMetHero.svelte';
</script>

<div>
	<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">Lmet mint</svelte:fragment>
		</PageTitle>
		<LMetHero />
	</div>
</div>
