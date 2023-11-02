<script lang="ts">
	import { artRoster } from '$lib/roster';
	import LoadingRoster from '$lib/components/LoadingRoster.svelte';
	import Artist from './Artist.svelte';

	let loaded: any;
	let roster: any[];
	roster = [];
	async function handleLoad() {
		roster = await artRoster();
		loaded = roster;
	}
</script>

{#if !loaded}
	<LoadingRoster />
{/if}

<span class="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-3 gap-10" use:handleLoad>
	{#each roster as artist}
		<Artist {artist} />
	{/each}
</span>