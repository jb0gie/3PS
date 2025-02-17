<script>
	import PageTitle from '$lib/components/page-title.svelte';
	import IMetHero from './(components)/IMetHero.svelte';
</script>

<div>
	<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">I Met mint</svelte:fragment>
		</PageTitle>
		<IMetHero />
	</div>
</div>
