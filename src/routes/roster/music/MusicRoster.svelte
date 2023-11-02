<script lang="ts">
	import { musicRoster } from '$lib/roster';
	import LoadingRoster from '$lib/components/LoadingRoster.svelte';
	import Musician from './Musician.svelte';

	let loaded :any;
	let roster: any[];
	roster = [];
	async function handleLoad() {
		roster = await musicRoster();
		loaded = roster
	}
</script>

{#if !loaded}
	<LoadingRoster />
{/if}
<span class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-10" use:handleLoad>
	{#each roster as musician}
		<Musician {musician} />
	{/each}
</span>