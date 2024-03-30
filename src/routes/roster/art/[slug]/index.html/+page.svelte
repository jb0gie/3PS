<script>
	import OrbGlow from '$lib/components/OrbGlow.svelte';
	import ArtistHero from './ArtistHero.svelte';
	import ArtistBio from './ArtistBio.svelte';
	import ArtistSocial from './ArtistSocial.svelte';
	import ArtistGallery from './ArtistGallery.svelte';
	export let data
	$: ({ artist } = data)
</script>

<div class="container mx-auto p-4 overflow-hidden md:rounded-lg md:p-10 lg:p-12">
	{#if artist}
		<OrbGlow />
		<ArtistHero {artist} />
		<ArtistSocial {artist}/>
		<ArtistBio {artist} />
		<!-- <ArtistGallery {artist} /> -->
	{/if}
</div>
