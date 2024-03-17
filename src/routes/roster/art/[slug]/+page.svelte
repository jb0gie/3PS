<script>
	import { page } from '$app/stores';
	import OrbGlow from '$lib/components/OrbGlow.svelte';
	import ArtistHero from './ArtistHero.svelte';
	import ArtistBio from './ArtistBio.svelte';
	import ArtistGallery from './ArtistGallery.svelte';
	import ArtistSocial from './ArtistSocial.svelte';
	export let artist
	let { slug } = $page.params;
	
</script>

<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	{#if artist}
		<ArtistHero {artist} />
		<OrbGlow />
		<ArtistSocial {artist}/>
		<ArtistBio {artist} />
		<!-- <ArtistGallery {artist} /> -->
	{/if}
</div>
