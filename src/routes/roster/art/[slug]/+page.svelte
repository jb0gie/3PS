<script>
	import { page } from '$app/stores';
	import db from '$lib/db';
	import OrbGlow from '../../../../lib/components/OrbGlow.svelte';
	import ArtistHero from './ArtistHero.svelte';
	import ArtistBio from './ArtistBio.svelte';
	import ArtistGallery from './ArtistGallery.svelte';
	let artist;
	let { slug } = $page.params;
	// console.log(slug);
	db.artist.subscribe((a) => {
		// console.log('Received artist data:', a);
		const filterfunc = (item) => item.route.includes(`/roster/art/${slug}`);
		artist = a.filter(filterfunc)[0];
		// console.log('Filtered artist:', artist);
	});
	
</script>

{#if artist}
	<ArtistHero {artist} />
	<OrbGlow />
	<ArtistBio {artist} />
	<ArtistGallery {artist} />
{/if}
