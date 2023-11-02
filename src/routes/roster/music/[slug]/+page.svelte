<script lang="ts">
    import { musicRoster } from '$lib/roster'; // Import your array of artists
	import LoadingProfile from '$lib/components/LoadingProfile.svelte';
	import MusicianProfile from './MusicianProfile.svelte';

    export let data 
    const filterFunc = (m: { route: any; id: string }) => {
		return m.route.replace('/roster/music/', '') == data.slug;
	};
    let musician: any;
    (async () => {
		const res = await musicRoster();
		musician = res.filter(filterFunc)[0];
		// console.log(res);
	})();
</script>

<!-- Display artist information here -->
<br />
{#if !musician}
	<LoadingProfile />
{/if}
{#if musician}
	<MusicianProfile {musician} />
{/if}