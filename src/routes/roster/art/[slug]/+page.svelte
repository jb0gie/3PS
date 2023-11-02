<script lang="ts">
	import { artRoster } from '$lib/roster'; // Import your array of artists
	import LoadingProfile from '$lib/components/LoadingProfile.svelte';
	import ArtistProfile from './ArtistProfile.svelte';

	export let data;

	const filterFunc = (a: { route: any; id: string }) => {
		return a.route.replace('/roster/art/', '') == data.slug;
	};
	let artist: any;
	(async () => {
		const res = await artRoster();
		artist = res.filter(filterFunc)[0];
		// console.log(res);
	})();
</script>

{#if !artist}
	<LoadingProfile />
{/if}
{#if artist}
	<ArtistProfile {artist} />
{/if}
