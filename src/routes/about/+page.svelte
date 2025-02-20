<script lang="ts">
	import type { RecordModel } from 'pocketbase';
	import PageTitle from '$lib/components/page-title.svelte';
	import AboutHero from './(components)/AboutHero.svelte';
	import AboutFounders from './(components)/AboutFounders.svelte';
	import AboutFooter from './(components)/AboutFooter.svelte';

	export let data: { team: RecordModel[] };
</script>

<PageTitle>
	<svelte:fragment slot="pageName">About Us</svelte:fragment>
</PageTitle>

<AboutHero />
<AboutFounders {data} />
<AboutFooter />
