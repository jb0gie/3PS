<script>
	import PageTitle from '$lib/components/page-title.svelte';
	import AboutHero from './(components)/AboutHero.svelte';
	import AboutFounders from './(components)/AboutFounders.svelte';
	import AboutFooter from './(components)/AboutFooter.svelte';
</script>

<div>
	<div class="container mx-auto p-8 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
		<PageTitle>
			<svelte:fragment slot="pageName">About</svelte:fragment>
		</PageTitle>
		<div class="h-5 md:h-12"></div>
		<AboutHero />
		<div class="h-[1100px] sm:h-[640px]"></div>
		<AboutFounders />
		<AboutFooter />
	</div>
</div>
